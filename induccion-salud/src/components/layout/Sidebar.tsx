'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { navigation, type NavItem } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isExpanded: boolean;
  isMobileOpen: boolean;
  onToggle: () => void;
  onCloseMobile: () => void;
  onToggleSection: (href: string) => void;
  isSectionExpanded: (href: string) => boolean;
}

export function Sidebar({
  isExpanded,
  isMobileOpen,
  onToggle,
  onCloseMobile,
  onToggleSection,
  isSectionExpanded,
}: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const expanded = isSectionExpanded(item.href);
    const active = isActive(item.href);
    const Icon = item.icon;

    return (
      <div key={item.href}>
        <div className="relative">
          {hasChildren ? (
            <button
              onClick={() => onToggleSection(item.href)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                active && 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                !active && 'text-gray-700 dark:text-gray-300'
              )}
            >
              {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
              {isExpanded && (
                <>
                  <span className="flex-1 text-left truncate">{item.title}</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform',
                      expanded && 'rotate-180'
                    )}
                  />
                </>
              )}
            </button>
          ) : (
            <Link
              href={item.href}
              onClick={onCloseMobile}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                active && 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                !active && 'text-gray-700 dark:text-gray-300',
                depth > 0 && 'ml-6'
              )}
            >
              {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
              {isExpanded && <span className="truncate">{item.title}</span>}
            </Link>
          )}
        </div>

        {/* Subsecciones */}
        {hasChildren && isExpanded && (
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700">
                  {item.children!.map(child => renderNavItem(child, depth + 1))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Header del sidebar (solo móvil) */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <span className="font-semibold text-gray-900 dark:text-white">Menú</span>
        <button
          onClick={onCloseMobile}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map(item => renderNavItem(item))}
      </nav>

      {/* Botón colapsar (solo desktop) */}
      <div className="hidden lg:block p-4 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Colapsar</span>
            </>
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Sidebar Desktop */}
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 280 : 72 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'hidden lg:flex flex-col fixed left-0 top-16 bottom-0',
          'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800',
          'z-40'
        )}
      >
        {sidebarContent}
      </motion.aside>

      {/* Overlay móvil */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseMobile}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Móvil (Drawer) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'lg:hidden fixed left-0 top-0 bottom-0 w-72',
              'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800',
              'z-50'
            )}
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
