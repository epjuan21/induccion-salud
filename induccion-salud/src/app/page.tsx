export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Portal de Inducción
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Personal de Salud
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Bienvenido al portal de inducción. Aquí encontrarás toda la información
          necesaria para tu proceso de incorporación.
        </p>
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            🚧 Portal en construcción - Fase 1 completada
          </p>
        </div>
      </div>
    </div>
  );
}
