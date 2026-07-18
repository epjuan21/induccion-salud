'use client';

import { useMemo, useState } from 'react';
import { Search, FileText, ExternalLink, X } from 'lucide-react';
import { Badge } from '@/components/ui';
import type { FichaVigilancia } from '@/data/fichas-vigilancia';

interface FichasBrowserProps {
  fichas: FichaVigilancia[];
}

/** Quita acentos y pasa a minúsculas para búsquedas tolerantes. */
function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export function FichasBrowser({ fichas }: FichasBrowserProps) {
  const [query, setQuery] = useState('');

  const resultados = useMemo(() => {
    const q = normalizar(query);
    if (!q) return fichas;

    return fichas.filter((ficha) => {
      const nombre = normalizar(ficha.nombre);
      const codigos = ficha.codigos.join(' ');
      return nombre.includes(q) || codigos.includes(q);
    });
  }, [fichas, query]);

  return (
    <div>
      {/* Buscador */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre o código de evento (ej. Dengue, 210, APTR)"
          aria-label="Buscar fichas de vigilancia epidemiológica"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-2.5 pl-10 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Limpiar búsqueda"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Contador */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {resultados.length}{' '}
        {resultados.length === 1 ? 'ficha encontrada' : 'fichas encontradas'}
      </p>

      {/* Listado */}
      {resultados.length > 0 ? (
        <ul className="space-y-2">
          {resultados.map((ficha) => (
            <li key={ficha.href}>
              <a
                href={ficha.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-sm transition-all"
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-lg shrink-0">
                  <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {ficha.codigos.map((codigo) => (
                      <Badge key={codigo} variant="blue" size="sm">
                        {codigo}
                      </Badge>
                    ))}
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {ficha.nombre}
                    </span>
                  </div>
                  {ficha.anio && (
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      Ficha {ficha.anio}
                    </p>
                  )}
                </div>

                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No se encontraron fichas para{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              &ldquo;{query}&rdquo;
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
}
