'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        {/* Botón menú móvil */}
        <button
          onClick={onMenuClick}
          className="mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Logo y Título */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Logo Hospital San Antonio de Betania"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
            priority
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Portal de Inducción
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Personal de Salud
            </p>
          </div>
        </Link>

        {/* Espaciador */}
        <div className="flex-1" />

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
