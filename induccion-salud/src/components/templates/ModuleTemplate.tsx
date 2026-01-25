import Link from 'next/link';
import { type LucideIcon, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/Card';
import { SectionIntro } from '@/components/content';
import { cn } from '@/lib/utils';

interface Subsection {
  title: string;
  description: string;
  href: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ModuleTemplateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  breadcrumbs: BreadcrumbItem[];
  subsections: Subsection[];
  introContent?: React.ReactNode;
  className?: string;
}

export function ModuleTemplate({
  title,
  description,
  icon,
  breadcrumbs,
  subsections,
  introContent,
  className,
}: ModuleTemplateProps) {
  return (
    <div className={cn('p-6 lg:p-8', className)}>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} className="mb-6" />

      {/* Module Header */}
      <SectionIntro
        title={title}
        description={description}
        icon={icon}
      />

      {/* Intro Content */}
      {introContent && (
        <div className="mt-6 prose prose-gray dark:prose-invert max-w-none">
          {introContent}
        </div>
      )}

      {/* Subsections Grid */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Contenido del módulo
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {subsections.map((subsection, index) => (
            <Link key={subsection.href} href={subsection.href}>
              <Card className="h-full hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all group">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {subsection.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {subsection.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
