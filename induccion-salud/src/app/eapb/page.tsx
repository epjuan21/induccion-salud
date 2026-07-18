import { Building2 } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { ModuleCard } from '@/components/ui';

export default function EapbPage() {
  return (
    <SectionTemplate
      title="EAPB"
      description="Recursos e instructivos operativos para procesos asociados a Entidades Administradoras de Planes de Beneficios."
      icon={Building2}
      breadcrumbs={[{ label: 'EAPB' }]}
      nextPage={{
        title: 'SURA',
        href: '/eapb/sura',
      }}
    >
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 md:grid-cols-2">
            <ModuleCard
              title="SURA"
              description="Instructivos y recursos para la gestión de usuarios y accesos en plataformas SURA."
              href="/eapb/sura"
              icon={Building2}
              iconColor="text-blue-600 dark:text-blue-400"
              iconBgColor="bg-blue-100 dark:bg-blue-900/30"
              subsections={[
                {
                  title: 'Gestión Usuarios',
                  href: '/eapb/sura/gestion-usuarios',
                },
              ]}
            />
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
