import { Building2, Users } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { ModuleCard } from '@/components/ui';

export default function SuraPage() {
  return (
    <SectionTemplate
      title="SURA"
      description="Recursos de apoyo para procesos operativos y de acceso relacionados con SURA."
      icon={Building2}
      breadcrumbs={[
        { label: 'EAPB', href: '/eapb' },
        { label: 'SURA' },
      ]}
      previousPage={{
        title: 'EAPB',
        href: '/eapb',
      }}
      nextPage={{
        title: 'Gestión Usuarios',
        href: '/eapb/sura/gestion-usuarios',
      }}
    >
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 md:grid-cols-2">
            <ModuleCard
              title="Gestión Usuarios"
              description="Videos instructivos para cambio de contraseña, actualización de celular y configuración MFA."
              href="/eapb/sura/gestion-usuarios"
              icon={Users}
              iconColor="text-blue-600 dark:text-blue-400"
              iconBgColor="bg-blue-100 dark:bg-blue-900/30"
            />
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
