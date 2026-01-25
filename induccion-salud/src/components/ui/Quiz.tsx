'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation?: string;
}

interface QuizProps {
  title?: string;
  questions: QuizQuestion[];
  passingScore?: number; // Porcentaje para aprobar (0-100)
  className?: string;
}

export function Quiz({
  title = 'Evaluación',
  questions,
  passingScore = 70,
  className,
}: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (optionId: string) => {
    if (showResult) return;
    setSelectedOption(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    setShowResult(true);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setAnswers({});
    setIsFinished(false);
  };

  // Calculate score
  const correctAnswers = Object.entries(answers).filter(
    ([questionId, answerId]) =>
      questions.find(q => q.id === questionId)?.correctOptionId === answerId
  ).length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = score >= passingScore;

  if (isFinished) {
    return (
      <div className={cn('bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700', className)}>
        <div className="text-center">
          <div className={cn(
            'inline-flex items-center justify-center w-20 h-20 rounded-full mb-4',
            passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
          )}>
            {passed ? (
              <Trophy className="w-10 h-10 text-green-600 dark:text-green-400" />
            ) : (
              <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
            )}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {passed ? '¡Felicitaciones!' : 'Sigue intentando'}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {passed
              ? 'Has aprobado la evaluación satisfactoriamente.'
              : 'No alcanzaste el puntaje mínimo requerido.'}
          </p>

          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">
                {score}%
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Puntaje obtenido
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">
                {correctAnswers}/{totalQuestions}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Respuestas correctas
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Puntaje mínimo para aprobar: {passingScore}%
          </p>

          <Button onClick={handleRestart} leftIcon={RotateCcw}>
            Intentar de nuevo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden', className)}>
      {/* Header */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Pregunta {currentQuestionIndex + 1} de {totalQuestions}
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <p className="text-lg font-medium text-gray-900 dark:text-white mb-6">
          {currentQuestion.question}
        </p>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrectOption = option.id === currentQuestion.correctOptionId;

            let optionClass = 'border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500';

            if (showResult) {
              if (isCorrectOption) {
                optionClass = 'border-green-500 bg-green-50 dark:bg-green-900/20';
              } else if (isSelected && !isCorrectOption) {
                optionClass = 'border-red-500 bg-red-50 dark:bg-red-900/20';
              }
            } else if (isSelected) {
              optionClass = 'border-primary-500 bg-primary-50 dark:bg-primary-900/20';
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={showResult}
                className={cn(
                  'w-full p-4 text-left rounded-lg border-2 transition-colors',
                  'disabled:cursor-default',
                  optionClass
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center',
                    showResult && isCorrectOption && 'border-green-500 bg-green-500',
                    showResult && isSelected && !isCorrectOption && 'border-red-500 bg-red-500',
                    !showResult && isSelected && 'border-primary-500 bg-primary-500',
                    !showResult && !isSelected && 'border-gray-300 dark:border-gray-600'
                  )}>
                    {showResult && isCorrectOption && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                    {showResult && isSelected && !isCorrectOption && (
                      <XCircle className="w-4 h-4 text-white" />
                    )}
                    {!showResult && isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {option.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {showResult && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Explicación:</span> {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
        {!showResult ? (
          <Button
            onClick={handleSubmitAnswer}
            disabled={!selectedOption}
          >
            Verificar respuesta
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < totalQuestions - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
          </Button>
        )}
      </div>
    </div>
  );
}
