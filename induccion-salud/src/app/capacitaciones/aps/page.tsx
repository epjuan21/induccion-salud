import { GraduationCap, MonitorPlay, Info, CheckCircle2, Users } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, SectionDivider, CompactCard } from '@/components/ui';

const VIDEO_EMBED_URL =
  'https://drive.google.com/file/d/1CRJ9bll956mOH_-FzVdHfOU_vodHCMvN/preview';

const pasosAfiliacion = [
  {
    paso: '1',
    titulo: 'Ingreso al sistema SAT',
    desc: 'Accede al Sistema de Afiliación Transaccional del Ministerio de Salud con tus credenciales institucionales.',
  },
  {
    paso: '2',
    titulo: 'Verificación de datos del afiliado',
    desc: 'Valida la información personal del usuario: documento de identidad, datos de contacto y condición de afiliación.',
  },
  {
    paso: '3',
    titulo: 'Selección del tipo de afiliación',
    desc: 'Elige el régimen correspondiente (Contributivo o Subsidiado) y el tipo de novedad a registrar.',
  },
  {
    paso: '4',
    titulo: 'Registro de la novedad',
    desc: 'Diligencia el formulario con la información requerida y adjunta los documentos soporte si aplica.',
  },
  {
    paso: '5',
    titulo: 'Confirmación y radicación',
    desc: 'Revisa el resumen de la transacción, confirma los datos y radica la afiliación en línea.',
  },
];

export default function ApsPage() {
  return (
    <SectionTemplate
      title="Afiliaciones en Línea"
      description="Instructivo para realizar afiliaciones en el Sistema de Afiliación Transaccional (SAT) del Ministerio de Salud."
      icon={GraduationCap}
      breadcrumbs={[
        { label: 'Capacitaciones', href: '/capacitaciones' },
        { label: 'Afiliaciones' },
      ]}
      nextPage={{
        title: 'Hospital',
        href: '/capacitaciones/hospital',
      }}
    >
      {/* Introducción */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            El <strong className="text-gray-800 dark:text-gray-200">Sistema de Afiliación
            Transaccional (SAT)</strong> es la plataforma del Ministerio de Salud y Protección
            Social que permite gestionar en línea las afiliaciones al Sistema General de
            Seguridad Social en Salud (SGSSS), eliminando el proceso manual en papel.
          </p>

          <Alert variant="info" title="Sistema de Afiliación Transaccional — SAT">
            A través del SAT, el personal de APS puede registrar novedades de afiliación,
            traslados y actualizaciones de datos directamente desde el puesto de trabajo,
            en tiempo real y con validación automática del sistema.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Video instructivo */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="wide">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-lg shrink-0">
              <MonitorPlay className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Video Instructivo
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            El siguiente video muestra paso a paso cómo realizar afiliaciones en línea
            desde el aplicativo SAT. Se recomienda verlo completo antes de realizar el
            proceso por primera vez.
          </p>

          {/* Contenedor del iframe con aspect ratio 16:9 */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
            style={{ paddingTop: '56.25%' }}>
            <iframe
              src={VIDEO_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Instructivo: Afiliaciones en Línea — Sistema de Afiliación Transaccional SAT"
            />
          </div>

          <p className="mt-3 text-xs text-gray-400 dark:text-gray-500 text-center">
            Si el video no carga, verifica que tienes acceso a Google Drive con tu cuenta institucional.
          </p>
        </ArticleContainer>
      </SectionBackground>

      <SectionDivider variant="decorative" icon={Users} />

      {/* Pasos del proceso */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Pasos del Proceso
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Resumen del flujo para registrar una afiliación en línea en el SAT.
          </p>

          <div className="space-y-3">
            {pasosAfiliacion.map((item) => (
              <CompactCard key={item.paso} variant="default">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-700 dark:text-primary-300">
                      {item.paso}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-0.5">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CompactCard>
            ))}
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Consideraciones importantes */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Consideraciones Importantes
          </h2>

          <div className="space-y-3 mb-6">
            {[
              {
                titulo: 'Verificación previa de documentos',
                detalle: 'Asegúrate de tener escaneados o disponibles los documentos soporte antes de iniciar el proceso en el SAT.',
              },
              {
                titulo: 'Datos del núcleo familiar',
                detalle: 'Para afiliaciones con beneficiarios, ten a la mano la documentación de todos los integrantes del grupo familiar.',
              },
              {
                titulo: 'Validación en tiempo real',
                detalle: 'El sistema valida automáticamente la información con las bases de datos del ADRES. Si hay inconsistencias, el sistema lo indicará.',
              },
              {
                titulo: 'Radicado de la transacción',
                detalle: 'Guarda siempre el número de radicado o comprobante generado al finalizar el proceso; es el soporte de la gestión realizada.',
              },
            ].map((item, index) => (
              <CompactCard key={index} variant="default">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                      {item.titulo}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.detalle}
                    </p>
                  </div>
                </div>
              </CompactCard>
            ))}
          </div>

          <Alert variant="warning" title="Acceso institucional requerido">
            El SAT es de uso exclusivo del personal autorizado. No compartas tus credenciales
            de acceso. Cada transacción queda registrada con el usuario que la realizó.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Soporte */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Tienes dudas o inconvenientes?
          </h2>

          <CompactCard variant="default">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg shrink-0">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Soporte interno
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ante cualquier dificultad con el proceso de afiliación en línea, comunícate
                  con el referente de APS de tu área o con el equipo de sistemas para obtener
                  orientación y soporte técnico.
                </p>
              </div>
            </div>
          </CompactCard>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
