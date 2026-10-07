import { FileText, ExternalLink as ExternalLinkIcon, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DocumentItem {
  title: string;
  href: string;
  /** Ruta opcional de la imagen de portada. Mientras no exista se muestra un placeholder. */
  cover?: string;
}

interface DocumentCardProps {
  document: DocumentItem;
  className?: string;
}

export function DocumentCard({ document, className }: DocumentCardProps) {
  const { title, href, cover } = document;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
        'hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700',
        'transition-all duration-200',
        className
      )}
    >
      {/* Portada / Placeholder */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={`Portada de ${title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <ImageIcon className="h-10 w-10 text-gray-300 dark:text-gray-600" />
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
              Portada próximamente
            </span>
          </div>
        )}

        {/* Insignia PDF */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-red-600/90 px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm">
          <FileText className="h-3.5 w-3.5" />
          PDF
        </span>
      </div>

      {/* Información */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-3 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400">
          Abrir documento
          <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

DocumentCard.displayName = 'DocumentCard';

interface DocumentGridProps {
  documents: DocumentItem[];
  className?: string;
}

export function DocumentGrid({ documents, className }: DocumentGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {documents.map((doc) => (
        <DocumentCard key={doc.href} document={doc} />
      ))}
    </div>
  );
}

DocumentGrid.displayName = 'DocumentGrid';
