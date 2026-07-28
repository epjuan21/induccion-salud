import { Users } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert } from '@/components/ui';
import { ciclosVida, getCicloBySlug, TablaCodigosCiclo } from '@/data/ciclos-vida';

interface CicloVidaDetalleProps {
  slug: string;
}

export function CicloVidaDetalle({ slug }: CicloVidaDetalleProps) {
  const ciclo = getCicloBySlug(slug);

  if (!ciclo) {
    return null;
  }

  const index = ciclosVida.findIndex((c) => c.slug === ciclo.slug);
  const anterior = ciclosVida[index - 1];
  const siguiente = ciclosVida[index + 1];

  const previousPage = anterior
    ? { title: anterior.title, href: `/facturacion-pyp/ciclos-vida/${anterior.slug}` }
    : { title: 'Ciclos de Vida', href: '/facturacion-pyp/ciclos-vida' };

  const nextPage = siguiente
    ? { title: siguiente.title, href: `/facturacion-pyp/ciclos-vida/${siguiente.slug}` }
    : { title: 'Vacunación', href: '/facturacion-pyp/vacunacion' };

  return (
    <SectionTemplate
      title={ciclo.title}
      description={ciclo.descripcion}
      icon={Users}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Ciclos de Vida', href: '/facturacion-pyp/ciclos-vida' },
        { label: ciclo.title },
      ]}
      previousPage={previousPage}
      nextPage={nextPage}
    >
      <div className={`bg-gradient-to-r ${ciclo.gradient} p-6 rounded-lg border ${ciclo.border} mb-4`}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {ciclo.numero}. {ciclo.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{ciclo.rangoEdad}</p>
      </div>

      <ContentBlock>
        <Alert variant="info" title="Parámetros comunes de facturación">
          <p className="mb-2">
            Todos los códigos de valoración integral usan los mismos parámetros:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Finalidad: 11</strong> - Promoción de la Salud y Mantenimiento</li>
            <li><strong>Causa Externa: 40</strong> - Promoción y Mantenimiento de la Salud</li>
          </ul>
        </Alert>
      </ContentBlock>

      <TablaCodigosCiclo datos={ciclo.datos} titulo={`Códigos CUPS - ${ciclo.title}`} />
    </SectionTemplate>
  );
}
