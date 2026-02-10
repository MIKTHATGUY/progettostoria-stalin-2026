import requests
import sys
from datetime import datetime
import json

class ArchivioAPITester:
    def __init__(self, base_url="https://archivio1937.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if endpoint else self.api_url
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )

    def test_status_check_create(self):
        """Test creating a status check"""
        return self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data={"client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"}
        )

    def test_status_check_get(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )

    def test_quiz_submit(self):
        """Test quiz submission"""
        quiz_data = {
            "answers": [
                {"question_id": 1, "answer": "A", "type": "heroic"},
                {"question_id": 2, "answer": "B", "type": "prudent"},
                {"question_id": 3, "answer": "C", "type": "informer"}
            ],
            "result": "prudent"
        }
        return self.run_test(
            "Submit Quiz",
            "POST",
            "quiz/submit",
            200,
            data=quiz_data
        )

    def test_quiz_stats(self):
        """Test getting quiz statistics"""
        return self.run_test(
            "Get Quiz Stats",
            "GET",
            "quiz/stats",
            200
        )

    def test_quiz_results(self):
        """Test getting quiz results"""
        return self.run_test(
            "Get Quiz Results",
            "GET",
            "quiz/results",
            200
        )

def main():
    print("🚀 Starting ARCHIVIO 1937 API Tests...")
    print("=" * 50)
    
    tester = ArchivioAPITester()

    # Test all endpoints
    tests = [
        tester.test_root_endpoint,
        tester.test_status_check_create,
        tester.test_status_check_get,
        tester.test_quiz_submit,
        tester.test_quiz_stats,
        tester.test_quiz_results
    ]

    for test in tests:
        test()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Tests Summary: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend tests passed!")
        return 0
    else:
        print(f"⚠️  {tester.tests_run - tester.tests_passed} tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())