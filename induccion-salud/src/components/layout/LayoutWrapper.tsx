'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { useSidebarState } from '@/hooks/useSidebarState';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const sidebar = useSidebarState();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Header onMenuClick={sidebar.toggleMobile} />

      <div className="flex-1 flex">
        <Sidebar
          isExpanded={sidebar.isExpanded}
          isMobileOpen={sidebar.isMobileOpen}
          onToggle={sidebar.toggle}
          onCloseMobile={sidebar.closeMobile}
          onToggleSection={sidebar.toggleSection}
          isSectionExpanded={sidebar.isSectionExpanded}
        />

        {/* Contenido principal con margen para el sidebar */}
        <main
          className={cn(
            'flex-1 transition-all duration-200',
            'lg:ml-[280px]',
            !sidebar.isExpanded && 'lg:ml-[72px]'
          )}
        >
          <div className="min-h-[calc(100vh-4rem-4rem)]">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
