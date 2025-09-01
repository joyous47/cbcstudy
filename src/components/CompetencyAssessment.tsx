import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  XCircle,
  Brain,
  Target,
  Award
} from 'lucide-react';

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  competency: string;
}

const sampleQuestions: Question[] = [
  {
    id: '1',
    text: 'A farmer has 120 apples and wants to pack them equally into boxes. If each box holds 8 apples, how many boxes will he need?',
    options: ['12 boxes', '15 boxes', '16 boxes', '18 boxes'],
    correctAnswer: 1,
    explanation: 'To find the number of boxes needed, divide 120 by 8: 120 ÷ 8 = 15 boxes.',
    competency: 'Mathematical Problem Solving'
  },
  {
    id: '2',
    text: 'Which of the following best demonstrates critical thinking in a science experiment?',
    options: [
      'Following instructions exactly as written',
      'Questioning unexpected results and investigating further',
      'Recording only positive outcomes',
      'Skipping the hypothesis step'
    ],
    correctAnswer: 1,
    explanation: 'Critical thinking involves questioning results, analyzing data objectively, and investigating anomalies to understand the underlying causes.',
    competency: 'Scientific Critical Thinking'
  }
];

export function CompetencyAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      
      if (!showExplanation) {
        setShowExplanation(true);
        return;
      }
      
      if (currentQuestion < sampleQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setIsComplete(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
      setShowExplanation(false);
    }
  };

  const calculateScore = () => {
    const correct = answers.reduce((acc, answer, index) => {
      return acc + (answer === sampleQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
    return Math.round((correct / sampleQuestions.length) * 100);
  };

  if (isComplete) {
    const score = calculateScore();
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="mb-6">
            <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Complete!</h2>
            <p className="text-gray-600">You've successfully completed the competency assessment</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">{score}%</div>
            <p className="text-gray-700 font-medium">Overall Score</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{answers.filter((a, i) => a === sampleQuestions[i].correctAnswer).length}</div>
              <p className="text-sm text-gray-600">Correct</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{answers.filter((a, i) => a !== sampleQuestions[i].correctAnswer).length}</div>
              <p className="text-sm text-gray-600">Incorrect</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all">
            View Learning Recommendations
          </button>
        </div>
      </motion.div>
    );
  }

  const question = sampleQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Competency Assessment</h1>
                <p className="text-blue-100">{question.competency}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Question</div>
              <div className="text-xl font-bold">{currentQuestion + 1}/{sampleQuestions.length}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-medium text-gray-900 mb-6">{question.text}</h2>
              
              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left border rounded-lg transition-all ${
                      selectedAnswer === index
                        ? showExplanation
                          ? index === question.correctAnswer
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showExplanation && selectedAnswer === index && (
                        index === question.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-lg border ${
                    isCorrect ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Target className={`h-5 w-5 mt-0.5 ${isCorrect ? 'text-green-600' : 'text-blue-600'}`} />
                    <div>
                      <h3 className={`font-medium mb-2 ${isCorrect ? 'text-green-800' : 'text-blue-800'}`}>
                        {isCorrect ? 'Correct!' : 'Learning Opportunity'}
                      </h3>
                      <p className="text-sm text-gray-700">{question.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{showExplanation ? (currentQuestion === sampleQuestions.length - 1 ? 'Complete' : 'Next Question') : 'Submit Answer'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}