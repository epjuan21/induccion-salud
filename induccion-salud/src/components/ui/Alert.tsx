import { cn } from '@/lib/utils';
import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

type AlertVariant = 'info' | 'warning' | 'success' | 'danger' | 'tip';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  title?: string;
  className?: string;
  icon?: LucideIcon;
}

const variantStyles: Record<AlertVariant, {
  container: string;
  icon: string;
  title: string;
  defaultIcon: LucideIcon;
}> = {
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-800 dark:text-blue-300',
    defaultIcon: Info,
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
    title: 'text-yellow-800 dark:text-yellow-300',
    defaultIcon: AlertTriangle,
  },
  success: {
    container: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    title: 'text-green-800 dark:text-green-300',
    defaultIcon: CheckCircle,
  },
  danger: {
    container: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-800 dark:text-red-300',
    defaultIcon: XCircle,
  },
  tip: {
    container: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
    title: 'text-purple-800 dark:text-purple-300',
    defaultIcon: Lightbulb,
  },
};

export function Alert({
  children,
  variant = 'info',
  title,
  className,
  icon: CustomIcon,
}: AlertProps) {
  const styles = variantStyles[variant];
  const Icon = CustomIcon || styles.defaultIcon;

  return (
    <div
      className={cn(
        'flex gap-3 p-4 rounded-lg border',
        styles.container,
        className
      )}
      role="alert"
    >
      <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', styles.icon)} />
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className={cn('font-semibold mb-1', styles.title)}>
            {title}
          </h4>
        )}
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
