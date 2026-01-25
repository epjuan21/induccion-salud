# FASE 5: Componentes de Contenido Interactivo

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 5 de 13 |
| **Nombre** | Componentes de Contenido Interactivo |
| **Objetivo** | Componentes para contenido dinámico e interactivo |
| **Prerequisitos** | Fase 4 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase implementa componentes interactivos: Accordion, VideoEmbed, ImageGallery y Quiz.

---

## TAREA 1: Crear Componente Accordion

### Archivo: `src/components/ui/Accordion.tsx`

```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(id) ? [] : [id]
      );
    }
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className={cn(
              'w-full flex items-center justify-between p-4 text-left',
              'bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800',
              'transition-colors'
            )}
            aria-expanded={isOpen(item.id)}
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-gray-500 transition-transform duration-200',
                isOpen(item.id) && 'rotate-180'
              )}
            />
          </button>

          <AnimatePresence initial={false}>
            {isOpen(item.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-gray-700 dark:text-gray-300">
                    {item.content}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
```

- [ ] Componente Accordion creado

---

## TAREA 2: Crear Componente VideoEmbed

### Archivo: `src/components/ui/VideoEmbed.tsx`

```tsx
'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

function getVideoId(url: string): { platform: 'youtube' | 'vimeo' | null; id: string | null } {
  // YouTube
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) {
    return { platform: 'youtube', id: youtubeMatch[1] };
  }

  // Vimeo
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    return { platform: 'vimeo', id: vimeoMatch[1] };
  }

  return { platform: null, id: null };
}

function getEmbedUrl(platform: 'youtube' | 'vimeo', id: string): string {
  switch (platform) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${id}`;
    default:
      return '';
  }
}

function getThumbnail(platform: 'youtube' | 'vimeo', id: string): string {
  switch (platform) {
    case 'youtube':
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    case 'vimeo':
      // Vimeo requiere API para thumbnails, usamos placeholder
      return '';
    default:
      return '';
  }
}

const aspectRatioClasses = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
};

export function VideoEmbed({
  url,
  title = 'Video',
  className,
  aspectRatio = '16:9',
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { platform, id } = getVideoId(url);

  if (!platform || !id) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg',
          aspectRatioClasses[aspectRatio],
          className
        )}
      >
        <p className="text-gray-500 dark:text-gray-400">
          URL de video no válida
        </p>
      </div>
    );
  }

  const embedUrl = getEmbedUrl(platform, id);
  const thumbnail = getThumbnail(platform, id);

  return (
    <div
      className={cn(
        'relative rounded-lg overflow-hidden bg-gray-900',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {!isLoaded ? (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Reproducir ${title}`}
        >
          {/* Thumbnail */}
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1" />
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-medium truncate">{title}</p>
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}
```

- [ ] Componente VideoEmbed creado

---

## TAREA 3: Crear Componente ImageGallery

### Archivo: `src/components/ui/ImageGallery.tsx`

```tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ImageGallery({
  images,
  columns = 3,
  className,
}: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  }, [lightboxIndex, images.length]);

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  }, [lightboxIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={cn('grid gap-4', columnClasses[columns], className)}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm truncate">{image.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain"
              />
              {images[lightboxIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-center">
                    {images[lightboxIndex].caption}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] Componente ImageGallery creado

---

## TAREA 4: Crear Componente Quiz

### Archivo: `src/components/ui/Quiz.tsx`

```tsx
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
  const isCorrect = selectedOption === currentQuestion?.correctOptionId;
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;

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
```

- [ ] Componente Quiz creado

---

## TAREA 5: Crear Componente ProgressIndicator

### Archivo: `src/components/ui/ProgressIndicator.tsx`

```tsx
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface ProgressStep {
  id: string;
  title: string;
  completed?: boolean;
  current?: boolean;
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  className?: string;
}

export function ProgressIndicator({ steps, className }: ProgressIndicatorProps) {
  return (
    <nav className={cn('flex items-center', className)} aria-label="Progreso">
      <ol className="flex items-center space-x-2 md:space-x-4">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center">
            {index > 0 && (
              <div
                className={cn(
                  'w-8 md:w-12 h-0.5 mx-2',
                  step.completed || step.current
                    ? 'bg-primary-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                )}
              />
            )}
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium',
                  step.completed && 'bg-primary-500 text-white',
                  step.current && 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 ring-2 ring-primary-500',
                  !step.completed && !step.current && 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                )}
              >
                {step.completed ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={cn(
                  'hidden md:block text-sm',
                  step.current
                    ? 'font-medium text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                )}
              >
                {step.title}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

- [ ] Componente ProgressIndicator creado

---

## TAREA 6: Actualizar Exportaciones de UI

### Archivo: `src/components/ui/index.ts`

```typescript
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
export { Alert } from './Alert';
export { ExternalLink } from './ExternalLink';
export { Button } from './Button';
export { Accordion } from './Accordion';
export { VideoEmbed } from './VideoEmbed';
export { ImageGallery } from './ImageGallery';
export { Quiz } from './Quiz';
export { ProgressIndicator } from './ProgressIndicator';
```

- [ ] Exportaciones actualizadas

---

## TAREA 7: Crear Página de Demostración de Componentes Interactivos

### Archivo: `src/app/demo/page.tsx`

```tsx
import { Accordion, VideoEmbed, ImageGallery, Quiz, ProgressIndicator } from '@/components/ui';
import { SectionIntro } from '@/components/content';
import { Sparkles } from 'lucide-react';

const accordionItems = [
  {
    id: '1',
    title: '¿Qué es la inducción laboral?',
    content: 'La inducción laboral es el proceso mediante el cual los nuevos empleados se familiarizan con la organización, sus políticas, procedimientos y cultura.',
  },
  {
    id: '2',
    title: '¿Cuánto dura el proceso de inducción?',
    content: 'El proceso de inducción generalmente dura entre 1 y 2 semanas, dependiendo del cargo y la complejidad de las funciones.',
  },
  {
    id: '3',
    title: '¿Qué documentos debo traer?',
    content: 'Debes traer tu documento de identidad, certificados de estudio, referencias laborales y cualquier otro documento solicitado por recursos humanos.',
  },
];

const galleryImages = [
  { src: '/images/placeholder-1.jpg', alt: 'Imagen 1', caption: 'Instalaciones principales' },
  { src: '/images/placeholder-2.jpg', alt: 'Imagen 2', caption: 'Área de trabajo' },
  { src: '/images/placeholder-3.jpg', alt: 'Imagen 3', caption: 'Sala de reuniones' },
];

const quizQuestions = [
  {
    id: '1',
    question: '¿Cuál es el objetivo principal de la seguridad de la información?',
    options: [
      { id: 'a', text: 'Proteger los datos personales y corporativos' },
      { id: 'b', text: 'Aumentar la velocidad de internet' },
      { id: 'c', text: 'Reducir costos operativos' },
      { id: 'd', text: 'Mejorar la comunicación interna' },
    ],
    correctOptionId: 'a',
    explanation: 'La seguridad de la información tiene como objetivo principal proteger la confidencialidad, integridad y disponibilidad de los datos.',
  },
  {
    id: '2',
    question: '¿Qué debe hacer si sospecha de un correo de phishing?',
    options: [
      { id: 'a', text: 'Abrir los archivos adjuntos para verificar' },
      { id: 'b', text: 'Responder al correo pidiendo más información' },
      { id: 'c', text: 'Reportarlo al área de TI y eliminarlo' },
      { id: 'd', text: 'Reenviar a todos los compañeros' },
    ],
    correctOptionId: 'c',
    explanation: 'Ante un correo sospechoso, lo correcto es reportarlo al área de TI y eliminarlo sin abrir ningún enlace o archivo adjunto.',
  },
];

const progressSteps = [
  { id: '1', title: 'Introducción', completed: true },
  { id: '2', title: 'Contenido', completed: true },
  { id: '3', title: 'Evaluación', current: true },
  { id: '4', title: 'Certificación' },
];

export default function DemoPage() {
  return (
    <div className="p-6 lg:p-8 space-y-12">
      <SectionIntro
        title="Demostración de Componentes"
        description="Esta página muestra todos los componentes interactivos disponibles."
        icon={Sparkles}
      />

      {/* Progress Indicator */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Indicador de Progreso
        </h2>
        <ProgressIndicator steps={progressSteps} />
      </section>

      {/* Accordion */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Acordeón - Preguntas Frecuentes
        </h2>
        <Accordion items={accordionItems} />
      </section>

      {/* Video */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Video Embebido
        </h2>
        <div className="max-w-2xl">
          <VideoEmbed
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            title="Video de ejemplo"
          />
        </div>
      </section>

      {/* Image Gallery */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Galería de Imágenes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Nota: Las imágenes mostrarán errores hasta que se agreguen imágenes reales en /public/images/
        </p>
        <ImageGallery images={galleryImages} columns={3} />
      </section>

      {/* Quiz */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Evaluación
        </h2>
        <div className="max-w-2xl">
          <Quiz
            title="Quiz de Seguridad de la Información"
            questions={quizQuestions}
            passingScore={50}
          />
        </div>
      </section>
    </div>
  );
}
```

- [ ] Página de demostración creada

---

## TAREA 8: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### Navegación de prueba:
- Ir a `http://localhost:3000/demo` para ver todos los componentes

### Checklist de verificación Accordion:
- [ ] Items se expanden al hacer clic
- [ ] Animación suave al abrir/cerrar
- [ ] Solo un item abierto a la vez (por defecto)
- [ ] Ícono de flecha rota correctamente

### Checklist de verificación VideoEmbed:
- [ ] Thumbnail visible (si es YouTube)
- [ ] Botón de play visible
- [ ] Al hacer clic, carga el video
- [ ] Video reproduce correctamente

### Checklist de verificación ImageGallery:
- [ ] Grid de imágenes visible
- [ ] Hover effect en imágenes
- [ ] Lightbox abre al hacer clic
- [ ] Navegación izquierda/derecha funcional
- [ ] Cerrar con X o clic fuera
- [ ] Navegación con teclado (flechas, Escape)

### Checklist de verificación Quiz:
- [ ] Pregunta visible con opciones
- [ ] Selección de opción funcional
- [ ] Botón "Verificar respuesta" funcional
- [ ] Feedback visual correcto/incorrecto
- [ ] Explicación visible después de responder
- [ ] Navegación a siguiente pregunta
- [ ] Pantalla de resultados final
- [ ] Botón reintentar funcional
- [ ] Barra de progreso actualiza correctamente

### Checklist de verificación ProgressIndicator:
- [ ] Steps muestran números/checks correctamente
- [ ] Estado completed muestra check
- [ ] Estado current muestra anillo
- [ ] Líneas conectoras con color correcto

---

## Entregable de la Fase 5

✅ Componente Accordion:
  - Múltiples items colapsables
  - Animación suave con Framer Motion
  - Opción allowMultiple

✅ Componente VideoEmbed:
  - Soporte YouTube y Vimeo
  - Lazy loading con thumbnail
  - Wrapper responsivo 16:9

✅ Componente ImageGallery:
  - Grid configurable
  - Lightbox con navegación
  - Soporte teclado

✅ Componente Quiz:
  - Preguntas de opción múltiple
  - Feedback inmediato
  - Puntuación y reintentos

✅ Componente ProgressIndicator:
  - Indicador de pasos
  - Estados: completado, actual, pendiente

---

## Siguiente Fase

➡️ **FASE 6**: Página de Inicio y Plantillas - Ver archivo `FASE-06-inicio-plantillas.md`
