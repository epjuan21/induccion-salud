import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Información institucional */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} <span className="font-medium">ESE Hospital San Antonio - Betania, Antioquia</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Portal de Inducción - Todos los derechos reservados
            </p>
          </div>

          {/* Créditos */}
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>para nuestro equipo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
