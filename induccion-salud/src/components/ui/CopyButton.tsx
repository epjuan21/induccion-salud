'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  text: string;
  size?: 'sm' | 'md';
  className?: string;
}

export function CopyButton({ text, size = 'md', className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center rounded-lg',
        'hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
        'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1',
        size === 'sm' && 'p-1.5',
        size === 'md' && 'p-2',
        className
      )}
      aria-label={copied ? 'Copiado' : 'Copiar código'}
      title={copied ? 'Copiado' : 'Copiar código'}
    >
      {copied ? (
        <Check className={cn(
          'text-green-600 dark:text-green-400',
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-5 h-5'
        )} />
      ) : (
        <Copy className={cn(
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-5 h-5'
        )} />
      )}
    </button>
  );
}
