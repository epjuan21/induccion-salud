import { Accordion, VideoEmbed, ImageGallery, Quiz, ProgressIndicator } from '@/components/ui';
import { SectionIntro } from '@/components/content';
import { Sparkles } from 'lucide-react';

const accordionItems = [
  {
    id: '1',
    title: '¿Qué es la inducción laboral?',
    content: 'La inducción laboral es el proceso mediante el cual los nuevos empleados se familiarizan con la organización, sus políticas, procedimientos y cultura.',
  },
  {
    id: '2',
    title: '¿Cuánto dura el proceso de inducción?',
    content: 'El proceso de inducción generalmente dura entre 1 y 2 semanas, dependiendo del cargo y la complejidad de las funciones.',
  },
  {
    id: '3',
    title: '¿Qué documentos debo traer?',
    content: 'Debes traer tu documento de identidad, certificados de estudio, referencias laborales y cualquier otro documento solicitado por recursos humanos.',
  },
];

const galleryImages = [
  { src: '/images/placeholder-1.jpg', alt: 'Imagen 1', caption: 'Instalaciones principales' },
  { src: '/images/placeholder-2.jpg', alt: 'Imagen 2', caption: 'Área de trabajo' },
  { src: '/images/placeholder-3.jpg', alt: 'Imagen 3', caption: 'Sala de reuniones' },
];

const quizQuestions = [
  {
    id: '1',
    question: '¿Cuál es el objetivo principal de la seguridad de la información?',
    options: [
      { id: 'a', text: 'Proteger los datos personales y corporativos' },
      { id: 'b', text: 'Aumentar la velocidad de internet' },
      { id: 'c', text: 'Reducir costos operativos' },
      { id: 'd', text: 'Mejorar la comunicación interna' },
    ],
    correctOptionId: 'a',
    explanation: 'La seguridad de la información tiene como objetivo principal proteger la confidencialidad, integridad y disponibilidad de los datos.',
  },
  {
    id: '2',
    question: '¿Qué debe hacer si sospecha de un correo de phishing?',
    options: [
      { id: 'a', text: 'Abrir los archivos adjuntos para verificar' },
      { id: 'b', text: 'Responder al correo pidiendo más información' },
      { id: 'c', text: 'Reportarlo al área de TI y eliminarlo' },
      { id: 'd', text: 'Reenviar a todos los compañeros' },
    ],
    correctOptionId: 'c',
    explanation: 'Ante un correo sospechoso, lo correcto es reportarlo al área de TI y eliminarlo sin abrir ningún enlace o archivo adjunto.',
  },
];

const progressSteps = [
  { id: '1', title: 'Introducción', completed: true },
  { id: '2', title: 'Contenido', completed: true },
  { id: '3', title: 'Evaluación', current: true },
  { id: '4', title: 'Certificación' },
];

export default function DemoPage() {
  return (
    <div className="p-6 lg:p-8 space-y-12">
      <SectionIntro
        title="Demostración de Componentes"
        description="Esta página muestra todos los componentes interactivos disponibles."
        icon={Sparkles}
      />

      {/* Progress Indicator */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Indicador de Progreso
        </h2>
        <ProgressIndicator steps={progressSteps} />
      </section>

      {/* Accordion */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Acordeón - Preguntas Frecuentes
        </h2>
        <Accordion items={accordionItems} />
      </section>

      {/* Video */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Video Embebido
        </h2>
        <div className="max-w-2xl">
          <VideoEmbed
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            title="Video de ejemplo"
          />
        </div>
      </section>

      {/* Image Gallery */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Galería de Imágenes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Nota: Las imágenes mostrarán errores hasta que se agreguen imágenes reales en /public/images/
        </p>
        <ImageGallery images={galleryImages} columns={3} />
      </section>

      {/* Quiz */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Evaluación
        </h2>
        <div className="max-w-2xl">
          <Quiz
            title="Quiz de Seguridad de la Información"
            questions={quizQuestions}
            passingScore={50}
          />
        </div>
      </section>
    </div>
  );
}
