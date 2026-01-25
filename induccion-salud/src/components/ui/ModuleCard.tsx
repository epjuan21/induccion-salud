import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  subsections?: { title: string; href: string }[];
  className?: string;
}

export function ModuleCard({
  title,
  description,
  href,
  icon: Icon,
  iconColor = 'text-primary-600 dark:text-primary-400',
  iconBgColor = 'bg-primary-100 dark:bg-primary-900/30',
  subsections,
  className,
}: ModuleCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700',
        'hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200',
        className
      )}
    >
      <Link href={href} className="block p-6">
        <div className="flex items-start gap-4">
          <div className={cn('p-3 rounded-xl flex-shrink-0', iconBgColor)}>
            <Icon className={cn('w-6 h-6', iconColor)} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </Link>

      {/* Subsections preview */}
      {subsections && subsections.length > 0 && (
        <div className="px-6 pb-4">
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              Contenido:
            </p>
            <ul className="space-y-1">
              {subsections.slice(0, 3).map((sub) => (
                <li key={sub.href}>
                  <Link
                    href={sub.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    • {sub.title}
                  </Link>
                </li>
              ))}
              {subsections.length > 3 && (
                <li className="text-sm text-gray-500 dark:text-gray-500">
                  +{subsections.length - 3} más...
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
