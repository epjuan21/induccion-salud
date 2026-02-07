import { cn } from '@/lib/utils';

interface ArticleContainerProps {
  children: React.ReactNode;
  maxWidth?: 'prose' | 'article' | 'wide';
  className?: string;
}

/**
 * Contenedor principal centrado tipo blog para contenido
 *
 * @param maxWidth - 'prose' (~768px) para lectura, 'article' (~896px) para elementos más anchos, 'wide' (~1024px) para tablas
 */
export function ArticleContainer({
  children,
  maxWidth = 'article',
  className
}: ArticleContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        maxWidth === 'prose' && 'max-w-3xl', // ~768px para lectura óptima
        maxWidth === 'article' && 'max-w-4xl', // ~896px para elementos más anchos
        maxWidth === 'wide' && 'max-w-5xl', // ~1024px para tablas grandes
        className
      )}
    >
      {children}
    </div>
  );
}

ArticleContainer.displayName = 'ArticleContainer';
