import { useState } from "react";
import { AlertTriangle, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const questions = [
  {
    id: 1,
    scenario: "Il tuo vicino di casa, un po' brillo, racconta una barzelletta sui baffi di Stalin. Tu cosa fai?",
    options: [
      { id: "A", text: "Ridi di gusto.", type: "heroic", label: "Risposta Umana" },
      { id: "B", text: "Fai finta di nulla e cambi stanza.", type: "prudent", label: "Risposta Prudente" },
      { id: "C", text: "Corri alla sede dell'NKVD a denunciarlo.", type: "informer", label: "Risposta del Delatore" }
    ]
  },
  {
    id: 2,
    scenario: "Sei il direttore di una fabbrica. Un macchinario si rompe perché è vecchio. Il Partito ti accusa di sabotaggio trotskista.",
    options: [
      { id: "A", text: "Ti difendi con i dati tecnici: \"Servono ricambi!\"", type: "heroic", label: "Risposta Logica" },
      { id: "B", text: "Confessi colpe che non hai sperando nella pietà.", type: "prudent", label: "Risposta Disperata" },
      { id: "C", text: "Accusi il tuo vice: \"È stato lui, io l'ho visto!\"", type: "informer", label: "Risposta Infame" }
    ]
  },
  {
    id: 3,
    scenario: "Manca il pane al negozio. La fila è di 5 ore a -20 gradi.",
    options: [
      { id: "A", text: "Ti lamenti ad alta voce dell'inefficienza del governo.", type: "heroic", label: "Risposta Coraggiosa" },
      { id: "B", text: "Aspetti in silenzio, testa bassa.", type: "prudent", label: "Risposta Sottomessa" },
      { id: "C", text: "Cerchi di corrompere il negoziante per averlo da dietro.", type: "informer", label: "Risposta Illegale" }
    ]
  }
];

const results = {
  heroic: {
    color: "#D22B2B",
    emoji: "🔴",
    title: "FUCILATO",
    subtitle: "Articolo 58 del Codice Penale",
    description: "Sei una persona integra, onesta e coraggiosa. Purtroppo, nel 1937, queste sono condanne a morte. Sei stato arrestato per \"agitazione antisovietica\" e condannato alla pena capitale. La tua famiglia è stata deportata.",
    stamp: "LIQUIDATO"
  },
  prudent: {
    color: "#C0A080",
    emoji: "🟠",
    title: "10 ANNI DI GULAG",
    subtitle: "Kolymà, Siberia Orientale",
    description: "Hai cercato di farti i fatti tuoi. Non è bastato. Qualcuno ha fatto il tuo nome sotto tortura per fermare il dolore. Sei stato mandato a Kolyma a spaccare pietre nel ghiaccio. Forse sopravviverai, ma non sarai più lo stesso.",
    stamp: "DEPORTATO"
  },
  informer: {
    color: "#4CAF50",
    emoji: "🟢",
    title: "SOPRAVVISSUTO",
    subtitle: "Cittadino Modello",
    description: "Complimenti, sei ancora vivo. Hai denunciato il tuo vicino, hai fatto arrestare il tuo collega e vivi nella menzogna. Sei un ingranaggio perfetto del sistema. Hai salvato la pelle, ma hai perso la tua anima. E ricorda: domani potrebbero venire a prendere te.",
    stamp: "COLLABORATORE"
  }
};

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState(null);

  const handleAnswer = (questionId, optionId, type) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { optionId, type }
    }));
  };

  const calculateResult = () => {
    const types = Object.values(answers).map(a => a.type);
    const counts = types.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    // Determine majority
    if (counts.heroic >= 2) return "heroic";
    if (counts.informer >= 2) return "informer";
    return "prudent";
  };

  const submitQuiz = async () => {
    const result = calculateResult();
    setResultType(result);
    setShowResult(true);

    // Save result to backend
    try {
      await axios.post(`${API}/quiz/submit`, {
        answers: Object.entries(answers).map(([qId, a]) => ({
          question_id: parseInt(qId),
          answer: a.optionId,
          type: a.type
        })),
        result: result
      });
    } catch (e) {
      console.error("Failed to save quiz result:", e);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResultType(null);
  };

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const allAnswered = Object.keys(answers).length === questions.length;

  if (showResult && resultType) {
    const result = results[resultType];
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="quiz-result">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <div className="bg-[#121212] border-2" style={{ borderColor: result.color }}>
            {/* Header */}
            <div className="p-8 text-center border-b border-[#333333]">
              <div 
                className="stamp mb-6 text-2xl inline-block"
                style={{ borderColor: result.color, color: result.color }}
                data-testid="result-stamp"
              >
                {result.stamp}
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl mb-2" style={{ color: result.color }}>
                {result.emoji} ESITO: {result.title}
              </h1>
              <p className="font-body text-[#A0A0A0] tracking-wider">
                {result.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="p-8">
              <p className="font-body text-[#E5E5E5] text-lg leading-relaxed">
                {result.description}
              </p>
            </div>

            {/* Your Answers */}
            <div className="p-8 border-t border-[#333333] bg-[#0a0a0a]">
              <h3 className="font-heading text-[#E5E5E5] mb-4">LE TUE RISPOSTE:</h3>
              <div className="space-y-3">
                {questions.map((q, idx) => {
                  const answer = answers[q.id];
                  const option = q.options.find(o => o.id === answer?.optionId);
                  return (
                    <div key={q.id} className="flex items-start gap-3 font-body text-sm">
                      <span className="text-[#A0A0A0]">{idx + 1}.</span>
                      <span className="text-[#E5E5E5]">{option?.text}</span>
                      <span className="text-[#A0A0A0] ml-auto">({option?.label})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Retry Button */}
          <div className="mt-8 text-center">
            <button
              onClick={resetQuiz}
              data-testid="retry-quiz-btn"
              className="font-heading text-sm tracking-wider px-8 py-3 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] hover:text-[#D22B2B] transition-colors flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" />
              RIPETI IL TEST
            </button>
          </div>

          {/* Historical Note */}
          <div className="mt-12 bg-[#121212] border border-[#333333] p-6">
            <p className="font-heading text-[#D22B2B] text-xs tracking-wider mb-3">NOTA STORICA</p>
            <p className="font-body text-[#A0A0A0] text-sm leading-relaxed">
              Durante il Grande Terrore (1936-1938), circa 750.000 persone furono fucilate e 
              oltre un milione furono inviate nei Gulag. Le vittime includevano tutti gli strati 
              della società: contadini, operai, intellettuali, membri del Partito, e persino 
              funzionari dell'NKVD stesso.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="quiz-page">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">
          SEZIONE IV - SIMULAZIONE
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">
          SOPRAVVIVERESTI NEL 1937?
        </h1>
        <p className="font-body text-[#A0A0A0]">
          Rispondi onestamente. Il tuo destino dipende dalle tue scelte.
        </p>
      </div>

      {/* Warning */}
      <div className="max-w-2xl mx-auto mb-8 bg-[#121212] border border-[#D22B2B] p-4 flex items-center gap-4">
        <AlertTriangle className="w-6 h-6 text-[#D22B2B] flex-shrink-0" />
        <p className="font-body text-[#E5E5E5] text-sm">
          Attenzione: Questo test simula le scelte impossibili che i cittadini sovietici 
          dovevano affrontare quotidianamente durante le purghe staliniane.
        </p>
      </div>

      {/* Progress */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="font-body text-[#A0A0A0] text-sm">
            DOMANDA {currentQuestion + 1} DI {questions.length}
          </span>
          <span className="font-body text-[#A0A0A0] text-sm">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="h-1 bg-[#333333]">
          <div 
            className="h-full bg-[#D22B2B] transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#121212] border border-[#333333]" data-testid={`question-${currentQ.id}`}>
          {/* Scenario */}
          <div className="p-8 border-b border-[#333333]">
            <p className="font-heading text-[#D22B2B] text-xs tracking-wider mb-3">SCENARIO</p>
            <p className="font-body text-[#E5E5E5] text-lg leading-relaxed">
              {currentQ.scenario}
            </p>
          </div>

          {/* Options */}
          <div className="p-8 space-y-4">
            {currentQ.options.map((option) => {
              const isSelected = answers[currentQ.id]?.optionId === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(currentQ.id, option.id, option.type)}
                  data-testid={`option-${currentQ.id}-${option.id}`}
                  className={`w-full text-left p-4 border transition-all duration-300 flex items-start gap-4 ${
                    isSelected 
                      ? 'border-[#D22B2B] bg-[#D22B2B]/10' 
                      : 'border-[#333333] hover:border-[#A0A0A0]'
                  }`}
                >
                  <div className={`w-6 h-6 border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-[#D22B2B]' : 'border-[#333333]'
                  }`}>
                    {isSelected && <CheckCircle className="w-4 h-4 text-[#D22B2B]" />}
                  </div>
                  <div>
                    <p className="font-body text-[#E5E5E5]">{option.text}</p>
                    <p className="font-body text-[#A0A0A0] text-sm mt-1">({option.label})</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            data-testid="prev-question-btn"
            className={`font-heading text-sm tracking-wider px-6 py-3 border transition-colors ${
              currentQuestion === 0
                ? 'border-[#333333] text-[#333333] cursor-not-allowed'
                : 'border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B]'
            }`}
          >
            INDIETRO
          </button>

          {isLastQuestion ? (
            <button
              onClick={submitQuiz}
              disabled={!allAnswered}
              data-testid="submit-quiz-btn"
              className={`font-heading text-sm tracking-wider px-8 py-3 transition-colors ${
                allAnswered
                  ? 'bg-[#D22B2B] text-white hover:bg-[#B22222]'
                  : 'bg-[#333333] text-[#A0A0A0] cursor-not-allowed'
              }`}
            >
              SCOPRI IL TUO DESTINO
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!answers[currentQ.id]}
              data-testid="next-question-btn"
              className={`font-heading text-sm tracking-wider px-6 py-3 border transition-colors ${
                answers[currentQ.id]
                  ? 'border-[#D22B2B] text-[#D22B2B] hover:bg-[#D22B2B] hover:text-white'
                  : 'border-[#333333] text-[#333333] cursor-not-allowed'
              }`}
            >
              AVANTI
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
