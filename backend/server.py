from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class QuizAnswer(BaseModel):
    question_id: int
    answer: str
    type: str


class QuizSubmission(BaseModel):
    answers: List[QuizAnswer]
    result: str


class QuizResult(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    answers: List[dict]
    result: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class QuizStats(BaseModel):
    total_submissions: int
    results_breakdown: dict


# Routes
@api_router.get("/")
async def root():
    return {"message": "ARCHIVIO 1937 API - La Fabbrica del Consenso"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Quiz endpoints
@api_router.post("/quiz/submit", response_model=QuizResult)
async def submit_quiz(submission: QuizSubmission):
    """Submit quiz answers and get result"""
    quiz_result = QuizResult(
        answers=[a.model_dump() for a in submission.answers],
        result=submission.result
    )
    
    doc = quiz_result.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.quiz_results.insert_one(doc)
    
    return quiz_result


@api_router.get("/quiz/stats", response_model=QuizStats)
async def get_quiz_stats():
    """Get statistics about quiz submissions"""
    total = await db.quiz_results.count_documents({})
    
    # Aggregate results breakdown
    pipeline = [
        {"$group": {"_id": "$result", "count": {"$sum": 1}}}
    ]
    
    breakdown = {}
    async for doc in db.quiz_results.aggregate(pipeline):
        breakdown[doc["_id"]] = doc["count"]
    
    return QuizStats(
        total_submissions=total,
        results_breakdown=breakdown
    )


@api_router.get("/quiz/results", response_model=List[QuizResult])
async def get_quiz_results(limit: int = 100):
    """Get recent quiz results"""
    results = await db.quiz_results.find(
        {}, 
        {"_id": 0}
    ).sort("timestamp", -1).limit(limit).to_list(limit)
    
    for result in results:
        if isinstance(result['timestamp'], str):
            result['timestamp'] = datetime.fromisoformat(result['timestamp'])
    
    return results


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
