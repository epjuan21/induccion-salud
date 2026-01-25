import { type LucideIcon } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { SectionIntro } from '@/components/content';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface NavigationPage {
  title: string;
  href: string;
}

interface SectionTemplateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  breadcrumbs: BreadcrumbItem[];
  previousPage?: NavigationPage;
  nextPage?: NavigationPage;
  children: React.ReactNode;
  className?: string;
}

export function SectionTemplate({
  title,
  description,
  icon,
  breadcrumbs,
  previousPage,
  nextPage,
  children,
  className,
}: SectionTemplateProps) {
  return (
    <div className={cn('p-6 lg:p-8', className)}>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} className="mb-6" />

      {/* Section Header */}
      <SectionIntro
        title={title}
        description={description}
        icon={icon}
      />

      {/* Content */}
      <div className="mt-8">
        {children}
      </div>

      {/* Page Navigation */}
      {(previousPage || nextPage) && (
        <PageNavigation
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
}
