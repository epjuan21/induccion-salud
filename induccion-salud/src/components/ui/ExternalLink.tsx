import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1 text-primary-600 dark:text-primary-400',
        'hover:text-primary-700 dark:hover:text-primary-300',
        'underline underline-offset-2 decoration-primary-300 dark:decoration-primary-700',
        'hover:decoration-primary-500 dark:hover:decoration-primary-500',
        'transition-colors',
        className
      )}
    >
      {children}
      {showIcon && (
        <ExternalLinkIcon className="w-3.5 h-3.5 flex-shrink-0" />
      )}
    </a>
  );
}
