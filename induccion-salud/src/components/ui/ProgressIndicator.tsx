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
