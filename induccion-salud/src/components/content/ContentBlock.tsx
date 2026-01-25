import { cn } from '@/lib/utils';

interface ContentBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentBlock({ children, className }: ContentBlockProps) {
  return (
    <div
      className={cn(
        'prose prose-gray dark:prose-invert max-w-none',
        'prose-headings:text-gray-900 dark:prose-headings:text-white',
        'prose-p:text-gray-700 dark:prose-p:text-gray-300',
        'prose-a:text-primary-600 dark:prose-a:text-primary-400',
        'prose-strong:text-gray-900 dark:prose-strong:text-white',
        'prose-ul:text-gray-700 dark:prose-ul:text-gray-300',
        'prose-ol:text-gray-700 dark:prose-ol:text-gray-300',
        'prose-li:marker:text-gray-400 dark:prose-li:marker:text-gray-500',
        className
      )}
    >
      {children}
    </div>
  );
}
