import { Monitor, Shield, Trash2, Wifi, Lock, Key } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, Quiz, SectionDivider, CompactCard } from '@/components/ui';

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
          <li>Reporta el incidente al área de sistemas</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'faq-2',
    title: '¿Puedo instalar programas o aplicaciones en el equipo?',
    content: (
      <p>
        <strong>No.</strong> Solo el personal de Sistemas está autorizado para instalar software.
        Si necesitas un programa específico para tu trabajo, debes realziar la solicitud
        al área de sistemas especificando el software requerido y la
        justificación de su necesidad.
      </p>
    ),
  },
  // TODO: Actualizar con datos de contacto reales de soporte técnico
  // {
  //   id: 'faq-3',
  //   title: '¿Cómo reporto un problema técnico con mi equipo?',
  //   content: (
  //     <div>
  //       <p className="mb-2">Puedes reportar problemas de las siguientes formas:</p>
  //       <ul className="list-disc list-inside space-y-1">
  //         <li>Sistema de tickets: mesa.ayuda@institucion.com</li>
  //         <li>Extensión telefónica: 1234</li>
  //         <li>Portal de autoservicio TI (intranet)</li>
  //       </ul>
  //       <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
  //         Incluye siempre el número de inventario del equipo y una descripción
  //         detallada del problema.
  //       </p>
  //     </div>
  //   ),
  // },
  {
    id: 'faq-4',
    title: '¿Puedo conectar dispositivos USB personales?',
    content: (
      <p>
        <strong>No se recomienda.</strong> Los dispositivos USB pueden contener malware.
        Si necesitas transferir archivos, utiliza los medios autorizados como correo
        institucional, carpetas compartidas en red o servicios en la nube aprobados.
        Solo se permiten USB institucionales previamente escaneados por el área de sistemas.
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
          Reenvía el correo sospechoso a gesis@esesanantonio-betania-antioquia.gov.co
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

const passwordRequirements = [
  { requirement: 'Mínimo 12 caracteres', icon: Shield },
  { requirement: 'Combinación de mayúsculas y minúsculas', icon: Shield },
  { requirement: 'Al menos un número', icon: Shield },
  { requirement: 'Al menos un carácter especial (!@#$%&*)', icon: Shield },
  { requirement: 'No ser una palabra del diccionario', icon: Shield },
];

const passwordAvoid = [
  'Tu nombre o el de familiares',
  'Fechas de cumpleaños o aniversarios',
  'Números de documento o teléfono',
  'Palabras comunes como "password" o "123456"',
  'La misma contraseña en múltiples sistemas',
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
      {/* Introducción - Lead Paragraph */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Los equipos de cómputo son herramientas fundamentales para el desarrollo
            de nuestras actividades diarias. Su uso adecuado no solo garantiza su buen
            funcionamiento y prolonga su vida útil, sino que también protege la información
            institucional y de los pacientes.
          </p>

          <Alert variant="warning" title="Responsabilidad del usuario">
            Los equipos institucionales son monitoreados. Toda actividad queda registrada
            y puede ser auditada. El uso inadecuado puede resultar en sanciones
            disciplinarias.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Prohibiciones - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Prácticas Prohibidas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Las siguientes acciones están estrictamente prohibidas y pueden resultar en sanciones disciplinarias.
          </p>

          <Alert variant="danger" className="p-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Actividades NO permitidas
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Instalar software no autorizado
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Modificar configuraciones del sistema
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Conectar dispositivos USB personales sin autorización
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Acceder a sitios web bloqueados mediante métodos alternativos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Compartir credenciales de acceso
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Guardar información personal o no relacionada con el trabajo
                </span>
              </li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={Monitor} />

      {/* Buenas Prácticas - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Buenas Prácticas de Uso
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Sigue estas recomendaciones para garantizar el buen funcionamiento de los equipos y la seguridad de la información.
          </p>

          <div className="space-y-6">
            {/* Encendido y Apagado */}
            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg shrink-0">
                  <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Encendido y Apagado
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Espera que el sistema cargue completamente antes de abrir programas
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Cierra todas las aplicaciones antes de apagar
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Usa siempre la opción &quot;Apagar&quot; del sistema operativo
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Desconectar el equipo al terminar la jornada laboral (Corriente y Red)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CompactCard>

            {/* Seguridad de Acceso */}
            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg shrink-0">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Seguridad de Acceso
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Bloquea tu sesión cuando te ausentes (Windows + L)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        No compartas tu contraseña con nadie
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Cambia tu contraseña cada 90 días
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Usa contraseñas de al menos 12 caracteres
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CompactCard>

            {/* Mantenimiento */}
            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg shrink-0">
                  <Trash2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Mantenimiento
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Limpia el teclado y pantalla regularmente
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Mantén el área libre de líquidos y alimentos
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        No bloquees las ventilaciones del equipo
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Reporta anomalías al área de sistemas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CompactCard>

            {/* Conectividad */}
            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg shrink-0">
                  <Wifi className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Conectividad
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Conéctate solo a redes WiFi institucionales
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        No uses redes públicas para acceder a sistemas
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Desconecta dispositivos que no estés usando
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 shrink-0 mt-0.5">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Reporta conexiones sospechosas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={Key} />

      {/* Contraseñas seguras - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Creación de Contraseñas Seguras
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Una contraseña segura es tu primera línea de defensa contra accesos no autorizados.
            Sigue estas recomendaciones para crear y mantener contraseñas robustas.
          </p>

          {/* Requisitos de contraseña */}
          <div className="mb-6 p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-3">
              ✓ Una buena contraseña debe tener:
            </h3>
            <ul className="space-y-2">
              {passwordRequirements.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 shrink-0 mt-0.5">•</span>
                  <span className="text-sm text-green-700 dark:text-green-400 leading-relaxed">
                    {item.requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qué evitar */}
          <div className="mb-6 p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">
              ✗ Evita usar:
            </h3>
            <ul className="space-y-2">
              {passwordAvoid.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 shrink-0 mt-0.5">•</span>
                  <span className="text-sm text-red-700 dark:text-red-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Alert variant="tip" title="Consejo para recordar contraseñas">
            Usa una frase memorable y modifícala. Por ejemplo: &quot;MiGatoTiene4Patas!&quot;
            es más fácil de recordar y más segura que &quot;Gat0123&quot;. Convierte frases
            cotidianas en contraseñas fuertes usando mayúsculas, números y símbolos.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Preguntas frecuentes - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <Accordion items={faqItems} />
        </ArticleContainer>
      </SectionBackground>

      {/* Quiz de evaluación - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Evaluación del Módulo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Completa la siguiente evaluación para verificar tu comprensión del tema.
            Necesitas un 70% para aprobar.
          </p>
          <Quiz
            title="Evaluación: Manejo de Equipos de Cómputo"
            questions={quizQuestions}
            passingScore={70}
          />
        </ArticleContainer>
      </SectionBackground>

      {/* Resumen - Fondo Blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <Alert variant="success" className="p-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Resumen del módulo
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Has aprendido sobre:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Procedimientos correctos de encendido y apagado
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Prácticas de seguridad y bloqueo de sesión
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Creación y manejo de contraseñas seguras
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Identificación de correos de phishing
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Responsabilidades del usuario y prácticas prohibidas
                </span>
              </li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
