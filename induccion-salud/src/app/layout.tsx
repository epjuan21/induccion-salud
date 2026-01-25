import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portal de Inducción - Personal de Salud',
  description: 'Portal educativo de inducción para personal nuevo de instituciones de salud',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          {/* Header se agregará en Fase 2 */}
          <main className="flex-1">
            {children}
          </main>
          {/* Footer se agregará en Fase 2 */}
        </div>
      </body>
    </html>
  );
}
