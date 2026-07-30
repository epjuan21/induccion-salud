import Link from 'next/link';
import Image from 'next/image';
import { Heart, Map } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Información institucional */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <Image
              src="/images/logo.svg"
              alt="Logo Hospital San Antonio de Betania"
              width={32}
              height={32}
              className="hidden h-8 w-8 shrink-0 sm:block"
            />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} <span className="font-medium">ESE Hospital San Antonio - Betania, Antioquia</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Portal de Inducción - Todos los derechos reservados
              </p>
            </div>
          </div>

          {/* Créditos */}
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>para nuestro equipo</span>
          </div>
        </div>

        {/* Enlaces */}
        <div className="mt-4 flex justify-center border-t border-gray-200 pt-4 dark:border-gray-800 md:justify-start">
          <Link
            href="/mapa-sitio"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
          >
            <Map className="w-4 h-4" />
            Mapa del Sitio
          </Link>
        </div>
      </div>
    </footer>
  );
}
