import { ExternalLink, FileText, KeyRound, Laptop, MonitorPlay, ShieldCheck, Smartphone } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, CompactCard } from '@/components/ui';

const videos = [
  {
    title: 'Cambio de contraseña',
    description: 'Paso a paso para actualizar la contraseña de acceso a las plataformas.',
    url: 'https://player.vimeo.com/video/1101510304',
    icon: KeyRound,
    iconClassName: 'text-blue-600 dark:text-blue-400',
    iconBgClassName: 'bg-blue-100 dark:bg-blue-900/40',
  },
  {
    title: 'Cambio de número de celular',
    description: 'Guía para actualizar el número de celular asociado al usuario.',
    url: 'https://player.vimeo.com/video/1101511951',
    icon: Smartphone,
    iconClassName: 'text-green-600 dark:text-green-400',
    iconBgClassName: 'bg-green-100 dark:bg-green-900/40',
  },
  {
    title: 'Configuración de autenticación multifactor (MFA) desde celular',
    description: 'Instructivo para configurar el segundo factor de autenticación desde un dispositivo móvil.',
    url: 'https://player.vimeo.com/video/1101512211',
    icon: ShieldCheck,
    iconClassName: 'text-purple-600 dark:text-purple-400',
    iconBgClassName: 'bg-purple-100 dark:bg-purple-900/40',
  },
  {
    title: 'Configuración de autenticación multifactor (MFA) desde computador',
    description: 'Instructivo para configurar el segundo factor de autenticación desde un equipo de escritorio o portátil.',
    url: 'https://player.vimeo.com/video/1101512605',
    icon: Laptop,
    iconClassName: 'text-orange-600 dark:text-orange-400',
    iconBgClassName: 'bg-orange-100 dark:bg-orange-900/40',
  },
];

export default function GestionUsuariosSuraPage() {
  return (
    <SectionTemplate
      title="Gestión Usuarios"
      description="Videos instructivos para facilitar la gestión de accesos y la autogestión de usuarios en plataformas SURA."
      icon={MonitorPlay}
      breadcrumbs={[
        { label: 'EAPB', href: '/eapb' },
        { label: 'SURA', href: '/eapb/sura' },
        { label: 'Gestión Usuarios' },
      ]}
    >
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Con el fin de facilitar la gestión de accesos y promover la autogestión
            de los usuarios, se comparten los siguientes videos instructivos, en los
            cuales encontrarás el paso a paso para realizar algunos procesos frecuentes
            relacionados con el acceso a las plataformas.
          </p>

          <Alert variant="info" title="Videos instructivos SURA">
            Revisa el video correspondiente antes de solicitar soporte. Estos recursos
            cubren cambios de contraseña, actualización de celular y configuración MFA.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 lg:grid-cols-2">
            {videos.map((video) => {
              const Icon = video.icon;
              return (
                <CompactCard key={video.url} variant="default" className="bg-white dark:bg-gray-900">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded-lg shrink-0 ${video.iconBgClassName}`}>
                      <Icon className={`w-5 h-5 ${video.iconClassName}`} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900 dark:text-white text-base">
                        {video.title}
                      </h2>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-950 shadow-sm aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </CompactCard>
              );
            })}
          </div>
        </ArticleContainer>
      </SectionBackground>

      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Recupera tu acceso MFA en minutos
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  ¿Tuviste problemas para ingresar el código de autenticación,
                  cambiaste de dispositivo o tu aplicación Authenticator dejó de
                  funcionar? Ahora puedes resolverlo por tu cuenta, sin necesidad
                  de contactar a la Mesa de Ayuda.
                </p>

                <p>
                  Con la nueva funcionalidad de <strong className="text-gray-800 dark:text-gray-200">Autogestión MFA</strong>,
                  podrás realizar el desbloqueo o restablecimiento de tu autenticación
                  multifactor de forma rápida y segura. Solo debes validar tu identidad
                  mediante <strong className="text-gray-800 dark:text-gray-200">reconocimiento facial y documento de identidad</strong> para
                  recuperar el acceso.
                </p>

                <p>
                  Esta mejora reduce tiempos de espera, facilita tu experiencia y
                  garantiza un acceso seguro a las aplicaciones de la Compañía. Si la
                  validación de identidad no es exitosa, el caso será gestionado
                  automáticamente por la Mesa de Ayuda.
                </p>
              </div>

              <a
                href="https://drive.google.com/file/d/1HYSyldyAfnVfyFovfkkC94wcIQPbHgiO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Ver manual de Autogestión MFA
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <CompactCard variant="default" className="bg-gray-50 dark:bg-gray-900">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-lg shrink-0">
                  <MonitorPlay className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                    Autogestión MFA
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Video instructivo para recuperar el acceso mediante validación de identidad.
                  </p>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-950 shadow-sm aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1200079508?badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Autogestión MFA - Recupera tu acceso"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
