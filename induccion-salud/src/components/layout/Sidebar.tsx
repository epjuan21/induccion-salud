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
        {hasChildren ? (
          <button
            onClick={() => onToggleSection(item.href)}
            title={!isExpanded ? item.title : undefined}
            className={cn(
              'w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              'hover:bg-gray-100 dark:hover:bg-gray-800',
              active
                ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                : 'text-gray-700 dark:text-gray-300',
              !isExpanded && 'justify-center px-2'
            )}
          >
            {Icon && (
              <Icon className={cn('shrink-0', isExpanded ? 'w-5 h-5' : 'w-5 h-5')} />
            )}
            {isExpanded && (
              <>
                <span className="flex-1 text-left leading-snug">{item.title}</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 shrink-0 transition-transform text-gray-400',
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
            title={!isExpanded ? item.title : undefined}
            className={cn(
              'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              'hover:bg-gray-100 dark:hover:bg-gray-800',
              active
                ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                : 'text-gray-700 dark:text-gray-300',
              depth > 0 && isExpanded && 'pl-4',
              !isExpanded && 'justify-center px-2'
            )}
          >
            {Icon && <Icon className="w-5 h-5 shrink-0" />}
            {isExpanded && (
              <span className="leading-snug">{item.title}</span>
            )}
          </Link>
        )}

        {/* Subsecciones */}
        {hasChildren && isExpanded && (
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="ml-3 mt-0.5 mb-1 pl-3 space-y-0.5 border-l-2 border-gray-200 dark:border-gray-700">
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
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header — solo en móvil */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 lg:hidden">
        <span className="font-semibold text-gray-900 dark:text-white text-sm">Navegación</span>
        <button
          onClick={onCloseMobile}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
          aria-label="Cerrar menú"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {navigation.map((item) => renderNavItem(item))}
      </nav>
    </div>
  );

  return (
    <>
      {/* ── SIDEBAR DESKTOP ── */}
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 272 : 60 }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          'hidden lg:block fixed left-0 top-16 bottom-0',
          'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800',
          'z-40 overflow-visible'
        )}
      >
        {sidebarContent}

        {/* Tab de colapso — borde derecho del sidebar */}
        <button
          onClick={onToggle}
          aria-label={isExpanded ? 'Colapsar menú' : 'Expandir menú'}
          className={cn(
            'absolute -right-3 top-6',
            'w-6 h-6 rounded-full',
            'bg-white dark:bg-gray-900',
            'border border-gray-200 dark:border-gray-700',
            'flex items-center justify-center',
            'shadow-sm hover:shadow-md',
            'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
            'transition-all duration-150 hover:scale-110',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1'
          )}
        >
          {isExpanded
            ? <ChevronLeft className="w-3.5 h-3.5" />
            : <ChevronRight className="w-3.5 h-3.5" />
          }
        </button>
      </motion.aside>

      {/* ── OVERLAY MÓVIL ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onCloseMobile}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* ── SIDEBAR MÓVIL (Drawer) ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className={cn(
              'lg:hidden fixed left-0 top-0 bottom-0 w-72',
              'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800',
              'z-50 shadow-xl'
            )}
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
