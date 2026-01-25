# FASE 7: Contenido - Seguridad de la Información

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 7 de 13 |
| **Nombre** | Contenido - Seguridad de la Información |
| **Objetivo** | Primera sección completamente poblada con contenido educativo |
| **Prerequisitos** | Fase 6 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase implementa el contenido completo del módulo de Seguridad de la Información.
> El contenido proporcionado es de ejemplo. Debe ser reemplazado con contenido real de la institución.

---

## TAREA 1: Actualizar Página Principal del Módulo

### Archivo: `src/app/seguridad-informacion/page.tsx`

```tsx
import { Shield, Lock, Monitor, AlertTriangle, CheckCircle } from 'lucide-react';
import { ModuleTemplate } from '@/components/templates';
import { Alert, Card, CardContent } from '@/components/ui';

const subsections = [
  {
    title: 'Manejo Correcto de Equipos de Cómputo',
    description: 'Buenas prácticas para el uso, cuidado y mantenimiento de los equipos institucionales.',
    href: '/seguridad-informacion/manejo-equipos',
  },
];

const keyPoints = [
  {
    icon: Lock,
    title: 'Confidencialidad',
    description: 'Proteger la información sensible de accesos no autorizados.',
  },
  {
    icon: CheckCircle,
    title: 'Integridad',
    description: 'Garantizar que la información no sea alterada indebidamente.',
  },
  {
    icon: Monitor,
    title: 'Disponibilidad',
    description: 'Asegurar el acceso a la información cuando se necesite.',
  },
];

export default function SeguridadInformacionPage() {
  return (
    <ModuleTemplate
      title="Seguridad de la Información"
      description="Conoce los principios fundamentales para proteger la información institucional y de los pacientes."
      icon={Shield}
      breadcrumbs={[
        { label: 'Seguridad de la Información' },
      ]}
      subsections={subsections}
      introContent={
        <>
          <p>
            La seguridad de la información es un pilar fundamental en las instituciones
            de salud. Manejamos información altamente sensible que incluye datos personales
            de pacientes, historias clínicas, información financiera y datos institucionales
            que requieren protección especial.
          </p>

          <Alert variant="warning" title="Responsabilidad compartida" className="my-6">
            <p>
              Todo el personal tiene la obligación legal y ética de proteger la información
              confidencial. El incumplimiento puede resultar en sanciones disciplinarias,
              legales y daños a la reputación institucional.
            </p>
          </Alert>

          <h3>Los tres pilares de la seguridad de la información</h3>

          <div className="grid gap-4 md:grid-cols-3 my-6 not-prose">
            {keyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title}>
                  <CardContent className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-3">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {point.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <h3>Marco normativo</h3>
          <p>
            La protección de datos en salud está regulada por:
          </p>
          <ul>
            <li><strong>Ley 1581 de 2012</strong> - Protección de datos personales</li>
            <li><strong>Ley 1266 de 2008</strong> - Habeas Data</li>
            <li><strong>Resolución 1995 de 1999</strong> - Manejo de historia clínica</li>
            <li><strong>Ley 23 de 1981</strong> - Ética médica (secreto profesional)</li>
          </ul>

          <h3>Objetivos de aprendizaje</h3>
          <p>Al completar este módulo serás capaz de:</p>
          <ul>
            <li>Identificar información sensible que requiere protección</li>
            <li>Aplicar buenas prácticas en el manejo de equipos de cómputo</li>
            <li>Reconocer y reportar incidentes de seguridad</li>
            <li>Proteger credenciales y accesos a sistemas</li>
            <li>Prevenir amenazas como phishing y malware</li>
          </ul>

          <Alert variant="tip" title="Tiempo estimado" className="mt-6">
            Este módulo tiene una duración aproximada de 1 hora, incluyendo la
            evaluación final.
          </Alert>
        </>
      }
    />
  );
}
```

- [ ] Página principal del módulo actualizada

---

## TAREA 2: Crear Página Completa de Manejo de Equipos

### Archivo: `src/app/seguridad-informacion/manejo-equipos/page.tsx`

```tsx
import { Monitor, Power, Shield, Trash2, Lock, Wifi, Mail, HardDrive } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent, VideoEmbed, Quiz } from '@/components/ui';

const faqItems = [
  {
    id: 'faq-1',
    title: '¿Qué hago si mi equipo se congela o no responde?',
    content: (
      <div>
        <p className="mb-2">Sigue estos pasos en orden:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Espera 30 segundos, algunos procesos pueden estar cargando</li>
          <li>Intenta cerrar la aplicación problemática con Ctrl + Alt + Supr</li>
          <li>Si no funciona, intenta cerrar sesión desde el administrador de tareas</li>
          <li>Como último recurso, mantén presionado el botón de encendido por 5 segundos</li>
          <li>Reporta el incidente al área de soporte técnico</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'faq-2',
    title: '¿Puedo instalar programas o aplicaciones en el equipo?',
    content: (
      <p>
        <strong>No.</strong> Solo el personal de TI está autorizado para instalar software.
        Si necesitas un programa específico para tu trabajo, debes enviar una solicitud
        formal al departamento de sistemas especificando el software requerido y la
        justificación de su necesidad.
      </p>
    ),
  },
  {
    id: 'faq-3',
    title: '¿Cómo reporto un problema técnico con mi equipo?',
    content: (
      <div>
        <p className="mb-2">Puedes reportar problemas de las siguientes formas:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Sistema de tickets: mesa.ayuda@institucion.com</li>
          <li>Extensión telefónica: 1234</li>
          <li>Portal de autoservicio TI (intranet)</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Incluye siempre el número de inventario del equipo y una descripción
          detallada del problema.
        </p>
      </div>
    ),
  },
  {
    id: 'faq-4',
    title: '¿Puedo conectar dispositivos USB personales?',
    content: (
      <p>
        <strong>No se recomienda.</strong> Los dispositivos USB pueden contener malware.
        Si necesitas transferir archivos, utiliza los medios autorizados como correo
        institucional, carpetas compartidas en red o servicios en la nube aprobados.
        Solo se permiten USB institucionales previamente escaneados por TI.
      </p>
    ),
  },
  {
    id: 'faq-5',
    title: '¿Qué hago si recibo un correo sospechoso?',
    content: (
      <div>
        <p className="mb-2"><strong>No abras enlaces ni archivos adjuntos.</strong> Los correos de phishing son cada vez más sofisticados. Señales de alerta:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Remitente desconocido o que imita direcciones legítimas</li>
          <li>Urgencia extrema o amenazas</li>
          <li>Errores ortográficos o gramaticales</li>
          <li>Solicitan información personal o contraseñas</li>
          <li>Enlaces que no coinciden con el texto mostrado</li>
        </ul>
        <p className="mt-2">
          Reenvía el correo sospechoso a seguridad.informatica@institucion.com
          y elimínalo de tu bandeja.
        </p>
      </div>
    ),
  },
];

const quizQuestions = [
  {
    id: 'q1',
    question: '¿Cuál es la forma correcta de apagar el equipo al finalizar la jornada?',
    options: [
      { id: 'a', text: 'Desconectar directamente del tomacorriente' },
      { id: 'b', text: 'Cerrar la tapa del portátil sin apagar' },
      { id: 'c', text: 'Usar la opción "Apagar" del menú de Windows después de cerrar todas las aplicaciones' },
      { id: 'd', text: 'Mantener presionado el botón de encendido' },
    ],
    correctOptionId: 'c',
    explanation: 'Siempre debes cerrar todas las aplicaciones y usar la opción "Apagar" del sistema operativo. Esto permite que el sistema guarde configuraciones y cierre procesos correctamente.',
  },
  {
    id: 'q2',
    question: '¿Qué combinación de teclas debes usar para bloquear tu sesión cuando te ausentes?',
    options: [
      { id: 'a', text: 'Ctrl + Alt + Supr' },
      { id: 'b', text: 'Windows + L' },
      { id: 'c', text: 'Alt + F4' },
      { id: 'd', text: 'Ctrl + Z' },
    ],
    correctOptionId: 'b',
    explanation: 'Windows + L es el atajo más rápido para bloquear tu sesión. También puedes presionar Ctrl + Alt + Supr y seleccionar "Bloquear".',
  },
  {
    id: 'q3',
    question: 'Recibes un correo del "banco" pidiendo actualizar tus datos urgentemente. ¿Qué debes hacer?',
    options: [
      { id: 'a', text: 'Hacer clic en el enlace y actualizar los datos' },
      { id: 'b', text: 'Responder al correo pidiendo más información' },
      { id: 'c', text: 'Reportarlo como phishing y eliminarlo sin hacer clic en nada' },
      { id: 'd', text: 'Reenviar el correo a tus compañeros para que estén alertas' },
    ],
    correctOptionId: 'c',
    explanation: 'Los bancos nunca solicitan información confidencial por correo electrónico. Ante cualquier correo sospechoso, no hagas clic en enlaces, repórtalo al área de seguridad y elimínalo.',
  },
  {
    id: 'q4',
    question: '¿Cada cuánto tiempo se recomienda cambiar tu contraseña de acceso?',
    options: [
      { id: 'a', text: 'Solo cuando el sistema lo exija' },
      { id: 'b', text: 'Cada 90 días como mínimo' },
      { id: 'c', text: 'Una vez al año' },
      { id: 'd', text: 'Nunca, si es una contraseña segura' },
    ],
    correctOptionId: 'b',
    explanation: 'Se recomienda cambiar la contraseña cada 90 días. Además, debes cambiarla inmediatamente si sospechas que ha sido comprometida.',
  },
  {
    id: 'q5',
    question: '¿Cuál de las siguientes es una práctica correcta de seguridad?',
    options: [
      { id: 'a', text: 'Compartir tu contraseña solo con compañeros de confianza' },
      { id: 'b', text: 'Anotar la contraseña en un post-it pegado al monitor' },
      { id: 'c', text: 'Usar la misma contraseña para todos los sistemas' },
      { id: 'd', text: 'Usar contraseñas únicas y complejas para cada sistema' },
    ],
    correctOptionId: 'd',
    explanation: 'Nunca compartas tus contraseñas ni las anotes en lugares visibles. Cada sistema debe tener una contraseña única y compleja.',
  },
];

const bestPractices = [
  {
    icon: Power,
    title: 'Encendido y Apagado',
    items: [
      'Espera que el sistema cargue completamente antes de abrir programas',
      'Cierra todas las aplicaciones antes de apagar',
      'Usa siempre la opción "Apagar" del sistema operativo',
      'No desconectes el equipo directamente del tomacorriente',
    ],
  },
  {
    icon: Shield,
    title: 'Seguridad de Acceso',
    items: [
      'Bloquea tu sesión cuando te ausentes (Windows + L)',
      'No compartas tu contraseña con nadie',
      'Cambia tu contraseña cada 90 días',
      'Usa contraseñas de al menos 12 caracteres',
    ],
  },
  {
    icon: Trash2,
    title: 'Mantenimiento',
    items: [
      'Limpia el teclado y pantalla regularmente',
      'Mantén el área libre de líquidos y alimentos',
      'No bloquees las ventilaciones del equipo',
      'Reporta anomalías al soporte técnico',
    ],
  },
  {
    icon: Wifi,
    title: 'Conectividad',
    items: [
      'Conéctate solo a redes WiFi institucionales',
      'No uses redes públicas para acceder a sistemas',
      'Desconecta dispositivos que no estés usando',
      'Reporta conexiones sospechosas',
    ],
  },
];

export default function ManejoEquiposPage() {
  return (
    <SectionTemplate
      title="Manejo Correcto de Equipos de Cómputo"
      description="Guía completa para el uso adecuado, seguro y eficiente de los equipos institucionales."
      icon={Monitor}
      breadcrumbs={[
        { label: 'Seguridad de la Información', href: '/seguridad-informacion' },
        { label: 'Manejo de Equipos' },
      ]}
      previousPage={{
        title: 'Seguridad de la Información',
        href: '/seguridad-informacion',
      }}
      nextPage={{
        title: 'Facturación P&P',
        href: '/facturacion-pyp',
      }}
    >
      {/* Introducción */}
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          Los equipos de cómputo son herramientas fundamentales para el desarrollo
          de nuestras actividades diarias. Su uso adecuado no solo garantiza su buen
          funcionamiento y prolonga su vida útil, sino que también protege la información
          institucional y de los pacientes.
        </p>
        <p>
          En esta sección aprenderás las mejores prácticas para el manejo de equipos,
          desde el encendido correcto hasta la respuesta ante incidentes de seguridad.
        </p>
      </ContentBlock>

      {/* Video educativo */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Video: Buenas prácticas de seguridad informática
        </h2>
        <div className="max-w-3xl">
          <VideoEmbed
            url="https://www.youtube.com/watch?v=inWWhr5tnEA"
            title="Buenas prácticas de seguridad informática"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          * Este video es ilustrativo. Reemplazar con contenido institucional.
        </p>
      </div>

      {/* Alertas importantes */}
      <div className="my-8 space-y-4">
        <Alert variant="danger" title="Prohibido">
          <ul className="list-disc list-inside space-y-1">
            <li>Instalar software no autorizado</li>
            <li>Modificar configuraciones del sistema</li>
            <li>Conectar dispositivos USB personales sin autorización</li>
            <li>Acceder a sitios web bloqueados mediante métodos alternativos</li>
            <li>Compartir credenciales de acceso</li>
          </ul>
        </Alert>

        <Alert variant="warning" title="Recuerda">
          Los equipos institucionales son monitoreados. Toda actividad queda registrada
          y puede ser auditada. El uso inadecuado puede resultar en sanciones
          disciplinarias.
        </Alert>
      </div>

      {/* Buenas prácticas */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Buenas Prácticas
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {bestPractices.map((practice) => {
            const Icon = practice.icon;
            return (
              <Card key={practice.title}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {practice.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {practice.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Contraseñas seguras */}
      <ContentBlock>
        <h2>Creación de contraseñas seguras</h2>
        <p>
          Una contraseña segura es tu primera línea de defensa. Sigue estas
          recomendaciones:
        </p>

        <div className="my-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
            ✓ Una buena contraseña debe tener:
          </h4>
          <ul className="text-green-700 dark:text-green-400 space-y-1">
            <li>• Mínimo 12 caracteres</li>
            <li>• Combinación de mayúsculas y minúsculas</li>
            <li>• Al menos un número</li>
            <li>• Al menos un carácter especial (!@#$%&*)</li>
            <li>• No ser una palabra del diccionario</li>
          </ul>
        </div>

        <div className="my-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">
            ✗ Evita usar:
          </h4>
          <ul className="text-red-700 dark:text-red-400 space-y-1">
            <li>• Tu nombre o el de familiares</li>
            <li>• Fechas de cumpleaños o aniversarios</li>
            <li>• Números de documento o teléfono</li>
            <li>• Palabras comunes como &quot;password&quot; o &quot;123456&quot;</li>
            <li>• La misma contraseña en múltiples sistemas</li>
          </ul>
        </div>

        <Alert variant="tip" title="Consejo">
          Usa una frase memorable y modifícala. Por ejemplo: &quot;MiGatoTiene4Patas!&quot;
          es más fácil de recordar y más segura que &quot;Gat0123&quot;.
        </Alert>
      </ContentBlock>

      {/* Preguntas frecuentes */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>

      {/* Contacto de soporte */}
      <div className="my-8">
        <Card className="bg-gray-50 dark:bg-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <HardDrive className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ¿Necesitas soporte técnico?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  El equipo de TI está disponible para ayudarte con cualquier
                  problema técnico o consulta sobre el uso de equipos.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href="mailto:soporte.ti@institucion.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                      soporte.ti@institucion.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span className="text-gray-600 dark:text-gray-400">Extensión: 1234</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-400">🕐</span>
                    <span className="text-gray-600 dark:text-gray-400">Lunes a Viernes: 7:00 AM - 6:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quiz de evaluación */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Evaluación del Módulo
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Completa la siguiente evaluación para verificar tu comprensión del tema.
          Necesitas un 70% para aprobar.
        </p>
        <Quiz
          title="Evaluación: Manejo de Equipos de Cómputo"
          questions={quizQuestions}
          passingScore={70}
        />
      </div>

      {/* Resumen */}
      <Alert variant="success" title="Resumen del módulo">
        <p className="mb-2">Has aprendido sobre:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Procedimientos correctos de encendido y apagado</li>
          <li>Prácticas de seguridad y bloqueo de sesión</li>
          <li>Creación y manejo de contraseñas seguras</li>
          <li>Identificación de correos de phishing</li>
          <li>Canales de soporte técnico</li>
        </ul>
      </Alert>
    </SectionTemplate>
  );
}
```

- [ ] Página completa de Manejo de Equipos creada

---

## TAREA 3: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### URLs a verificar:
- `http://localhost:3000/seguridad-informacion` - Página del módulo
- `http://localhost:3000/seguridad-informacion/manejo-equipos` - Subsección

### Checklist de verificación Página del Módulo:
- [ ] Breadcrumbs muestra solo "Seguridad de la Información"
- [ ] Icono y título del módulo visibles
- [ ] Descripción introductoria visible
- [ ] Tres cards de pilares (Confidencialidad, Integridad, Disponibilidad)
- [ ] Alert de responsabilidad visible
- [ ] Lista de marco normativo visible
- [ ] Objetivos de aprendizaje listados
- [ ] Grid de subsecciones con link a "Manejo de Equipos"

### Checklist de verificación Página de Subsección:
- [ ] Breadcrumbs con link a módulo padre
- [ ] Navegación anterior/siguiente funcional
- [ ] Contenido introductorio visible
- [ ] Video embebido funcional (lazy load)
- [ ] Alertas de prohibido y recuerda visibles
- [ ] 4 cards de buenas prácticas
- [ ] Sección de contraseñas seguras
- [ ] Accordion de preguntas frecuentes funcional
- [ ] Card de contacto de soporte
- [ ] Quiz interactivo funcional
- [ ] Alert de resumen al final

### Checklist de Quiz:
- [ ] 5 preguntas cargan correctamente
- [ ] Selección de opciones funciona
- [ ] Botón verificar respuesta funciona
- [ ] Feedback correcto/incorrecto visible
- [ ] Explicaciones aparecen después de responder
- [ ] Pantalla de resultados muestra porcentaje
- [ ] Botón reintentar funciona

---

## Entregable de la Fase 7

✅ Página principal de Seguridad de la Información:
  - Introducción completa al tema
  - Tres pilares de seguridad (cards)
  - Marco normativo
  - Objetivos de aprendizaje
  - Preview de subsecciones

✅ Subsección Manejo de Equipos completamente poblada:
  - Contenido educativo estructurado
  - Video embebido
  - Alertas informativas
  - Buenas prácticas en cards
  - Sección de contraseñas seguras
  - Preguntas frecuentes (Accordion)
  - Información de soporte técnico
  - Quiz de evaluación (5 preguntas)
  - Navegación funcional

---

## Notas para Contenido Real

> **Para el equipo de contenido:**
>
> El contenido proporcionado en esta fase es de ejemplo. Debe ser reemplazado con:
>
> 1. **Políticas reales** de seguridad de la información de la institución
> 2. **Normativas internas** específicas
> 3. **Datos de contacto reales** del área de soporte
> 4. **Videos institucionales** de capacitación
> 5. **Imágenes** de equipos y procedimientos de la institución
> 6. **Preguntas de evaluación** validadas por el área de capacitación

---

## Siguiente Fase

➡️ **FASE 8-9**: Contenido - Facturación P&P - Ver archivo `FASE-08-09-facturacion.md`
