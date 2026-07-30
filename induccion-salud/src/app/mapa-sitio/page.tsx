import Link from 'next/link';
import { Map } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Card } from '@/components/ui/Card';
import { navigation, type NavItem } from '@/data/navigation';

function SitemapLink({ item }: { item: NavItem }) {
  return (
    <li>
      <Link
        href={item.href}
        className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 hover:underline underline-offset-2 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
      >
        {item.title}
      </Link>

      {item.children && item.children.length > 0 && (
        <ul className="mt-2 ml-4 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-4">
          {item.children.map((child) => (
            <SitemapLink key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function SitemapSection({ item }: { item: NavItem }) {
  const Icon = item.icon;

  return (
    <Card className="h-full">
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <Link
          href={item.href}
          className="text-base font-semibold text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 transition-colors"
        >
          {item.title}
        </Link>
      </div>

      {item.children && item.children.length > 0 ? (
        <ul className="space-y-2">
          {item.children.map((child) => (
            <SitemapLink key={child.href} item={child} />
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Sin subsecciones adicionales.
        </p>
      )}
    </Card>
  );
}

export default function MapaSitioPage() {
  return (
    <SectionTemplate
      title="Mapa del Sitio"
      description="Explora la estructura completa del portal y accede directamente a cualquier sección o subsección."
      icon={Map}
      breadcrumbs={[{ label: 'Mapa del Sitio' }]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {navigation
              .filter((item) => item.href !== '/')
              .map((item) => (
                <SitemapSection key={item.href} item={item} />
              ))}
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
