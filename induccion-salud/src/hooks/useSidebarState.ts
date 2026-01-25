'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseSidebarStateOptions {
  defaultExpanded?: boolean;
  storageKey?: string;
}

export function useSidebarState(options: UseSidebarStateOptions = {}) {
  const {
    defaultExpanded = true,
    storageKey = 'sidebar-expanded'
  } = options;

  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Cargar estado desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) {
      setIsExpanded(stored === 'true');
    }

    const storedSections = localStorage.getItem(`${storageKey}-sections`);
    if (storedSections) {
      try {
        setExpandedSections(JSON.parse(storedSections));
      } catch {
        // Ignorar errores de parsing
      }
    }
  }, [storageKey]);

  // Guardar estado en localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, String(isExpanded));
  }, [isExpanded, storageKey]);

  useEffect(() => {
    localStorage.setItem(`${storageKey}-sections`, JSON.stringify(expandedSections));
  }, [expandedSections, storageKey]);

  const toggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen(prev => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleSection = useCallback((sectionHref: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionHref)
        ? prev.filter(s => s !== sectionHref)
        : [...prev, sectionHref]
    );
  }, []);

  const isSectionExpanded = useCallback((sectionHref: string) => {
    return expandedSections.includes(sectionHref);
  }, [expandedSections]);

  return {
    isExpanded,
    isMobileOpen,
    toggle,
    toggleMobile,
    closeMobile,
    toggleSection,
    isSectionExpanded,
  };
}
