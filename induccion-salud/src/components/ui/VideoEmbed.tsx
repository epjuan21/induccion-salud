'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

function getVideoId(url: string): { platform: 'youtube' | 'vimeo' | null; id: string | null } {
  // YouTube
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) {
    return { platform: 'youtube', id: youtubeMatch[1] };
  }

  // Vimeo
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    return { platform: 'vimeo', id: vimeoMatch[1] };
  }

  return { platform: null, id: null };
}

function getEmbedUrl(platform: 'youtube' | 'vimeo', id: string): string {
  switch (platform) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${id}`;
    default:
      return '';
  }
}

function getThumbnail(platform: 'youtube' | 'vimeo', id: string): string {
  switch (platform) {
    case 'youtube':
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    case 'vimeo':
      // Vimeo requiere API para thumbnails, usamos placeholder
      return '';
    default:
      return '';
  }
}

const aspectRatioClasses = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
};

export function VideoEmbed({
  url,
  title = 'Video',
  className,
  aspectRatio = '16:9',
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { platform, id } = getVideoId(url);

  if (!platform || !id) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg',
          aspectRatioClasses[aspectRatio],
          className
        )}
      >
        <p className="text-gray-500 dark:text-gray-400">
          URL de video no válida
        </p>
      </div>
    );
  }

  const embedUrl = getEmbedUrl(platform, id);
  const thumbnail = getThumbnail(platform, id);

  return (
    <div
      className={cn(
        'relative rounded-lg overflow-hidden bg-gray-900',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {!isLoaded ? (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Reproducir ${title}`}
        >
          {/* Thumbnail */}
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1" />
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-medium truncate">{title}</p>
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}
