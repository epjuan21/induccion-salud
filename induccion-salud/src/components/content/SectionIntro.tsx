import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface SectionIntroProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

export function SectionIntro({
  title,
  description,
  icon: Icon,
  className,
  children,
}: SectionIntroProps) {
  return (
    <div className={cn('mb-8', className)}>
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="flex-shrink-0 p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30">
            <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
}
