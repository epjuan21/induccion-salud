import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageNavigationProps {
  previousPage?: {
    title: string;
    href: string;
  };
  nextPage?: {
    title: string;
    href: string;
  };
  className?: string;
}

export function PageNavigation({
  previousPage,
  nextPage,
  className,
}: PageNavigationProps) {
  return (
    <nav
      className={cn(
        'flex items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-700',
        className
      )}
      aria-label="Navegación de páginas"
    >
      {previousPage ? (
        <Link
          href={previousPage.href}
          className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <div className="text-left">
            <span className="block text-xs text-gray-500 dark:text-gray-500">
              Anterior
            </span>
            <span className="font-medium">{previousPage.title}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextPage ? (
        <Link
          href={nextPage.href}
          className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-right"
        >
          <div>
            <span className="block text-xs text-gray-500 dark:text-gray-500">
              Siguiente
            </span>
            <span className="font-medium">{nextPage.title}</span>
          </div>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
