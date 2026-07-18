export interface FichaVigilancia {
  /** Códigos INS del evento (pueden ser varios en una misma ficha). */
  codigos: string[];
  /** Nombre legible de la ficha. */
  nombre: string;
  /** Año de la ficha. */
  anio: string;
  /** Enlace al archivo en Google Drive. */
  href: string;
}

/**
 * Listado de fichas de notificación de vigilancia epidemiológica.
 * Los archivos se encuentran en la carpeta compartida de Google Drive.
 * Ordenadas de forma ascendente por código de evento (INS).
 */
export const fichasVigilancia: FichaVigilancia[] = [
  { codigos: ['100'], nombre: 'Accidente Ofídico', anio: '2024', href: 'https://drive.google.com/file/d/1ffm-LQxbye3K24rnJGlQvTFN9i8lY0Uf/view' },
  { codigos: ['101'], nombre: 'Accidentes por Animales Venenosos', anio: '2024', href: 'https://drive.google.com/file/d/1uX0K3IGSJ4PTTBEqNkpu1ifLGtAz-vLS/view' },
  { codigos: ['110'], nombre: 'Bajo Peso al Nacer (BPN)', anio: '2024', href: 'https://drive.google.com/file/d/1YPBBAQpcEYKPNbqSuPT9oGmKsxvQDJKq/view' },
  { codigos: ['113'], nombre: 'Desnutrición Aguda en Menores de 5 Años (DNT 5)', anio: '2026', href: 'https://drive.google.com/file/d/1EFEBKN6bY2CBUSShobWz98ZUsY6-qVCb/view' },
  { codigos: ['114'], nombre: 'Riesgo de Desnutrición (DNT)', anio: '2026', href: 'https://drive.google.com/file/d/1REXYPWjzxDqJWu5WtX4CPRdyCiuGILoa/view' },
  { codigos: ['115'], nombre: 'Cáncer en Menores de 18 Años', anio: '2024', href: 'https://drive.google.com/file/d/1MzqXzqMjFS8Kjhzl-zRfFefqMPR0XEln/view' },
  { codigos: ['155'], nombre: 'Cáncer de Mama y Cuello Uterino', anio: '2024', href: 'https://drive.google.com/file/d/1TWmPxefx9BFN2uSZFz49JdOhvxTDZGya/view' },
  { codigos: ['200'], nombre: 'Cólera', anio: '2024', href: 'https://drive.google.com/file/d/1CdqfkmdJmXjX86e6hpm7Vnbess0OILSR/view' },
  { codigos: ['205'], nombre: 'Chagas', anio: '2026', href: 'https://drive.google.com/file/d/1kN7EbSDduRA2EZkhkWJ65XK78nnoVvC8/view' },
  { codigos: ['210', '220', '580'], nombre: 'Dengue', anio: '2024', href: 'https://drive.google.com/file/d/1qqIWFW14VUUsGU_gm1xpgEYQpDj2PzqS/view' },
  { codigos: ['215'], nombre: 'Defectos Congénitos', anio: '2024', href: 'https://drive.google.com/file/d/1WJKTCzVUrzS2w_Txjq9myClhqVUNFf4O/view' },
  { codigos: ['217'], nombre: 'Chikungunya', anio: '2024', href: 'https://drive.google.com/file/d/17jMlBYeTUlzcaQ0H26UN7iZDl-OSaKhQ/view' },
  { codigos: ['228'], nombre: 'Exposición a Flúor', anio: '2024', href: 'https://drive.google.com/file/d/1idmQyteG2vMPpWI8dhYfFNzxfBrUBYXm/view' },
  { codigos: ['230'], nombre: 'Difteria', anio: '2024', href: 'https://drive.google.com/file/d/1Mo3_dhm-KD30zPWsCAV4XVWAGYO_xmED/view' },
  { codigos: ['298'], nombre: 'Eventos Adversos Posteriores a la Vacunación (EAPV)', anio: '2024', href: 'https://drive.google.com/file/d/1ryKnh5hHjfarprn9y3sjfJQFjrFqqtgP/view' },
  { codigos: ['300'], nombre: 'Accidente por Animales Potencialmente Transmisores de Rabia (APTR)', anio: '2024', href: 'https://drive.google.com/file/d/11ZQe9DN5crzBAX4VoA0f8qqGAp7elg-J/view' },
  { codigos: ['305'], nombre: 'Tracoma', anio: '2024', href: 'https://drive.google.com/file/d/1I05szn8s7wmKzntk7DFYB6WG5ALkWbh1/view' },
  { codigos: ['310'], nombre: 'Fiebre Amarilla', anio: '2026', href: 'https://drive.google.com/file/d/1pj2gIdYHcBQxMdYHcP4x0Bi9UZiVI8Pg/view' },
  { codigos: ['340'], nombre: 'Hepatitis B', anio: '2026', href: 'https://drive.google.com/file/d/12WnvfZ3pxrInFqMPBlUaQT3i_0tD2p6v/view' },
  { codigos: ['342'], nombre: 'Enfermedades Huérfanas', anio: '2026', href: 'https://drive.google.com/file/d/1nmOpEAIHczVzN5znPKPQNXTYNGzA0DLx/view' },
  { codigos: ['345'], nombre: 'ESI - IRAG', anio: '2024', href: 'https://drive.google.com/file/d/1vL45Ik5_UFUYST8ae-yQj2hhaQgGWZma/view' },
  { codigos: ['348'], nombre: 'IRAG Inusitado', anio: '2026', href: 'https://drive.google.com/file/d/122nJZp2yfOJWFO28JYfwE8pcMPR2Cnfw/view' },
  { codigos: ['349'], nombre: 'Enfermedad Transmitida por Alimentos (ETA) Colectivo', anio: '2024', href: 'https://drive.google.com/file/d/1QycZP8ZbQDE3Wq6wXvv3bdY1owKtoygc/view' },
  { codigos: ['352'], nombre: 'Infección del Sitio Operatorio (ISO)', anio: '2024', href: 'https://drive.google.com/file/d/1HFQxYvBbh7_KXDov2n6aONh5n3k-T6Mp/view' },
  { codigos: ['354'], nombre: 'Consumo de Antibióticos (CAB)', anio: '2024', href: 'https://drive.google.com/file/d/1y7WHboVTMylXV9Rwv-b6hEZyRmIS8FOX/view' },
  { codigos: ['355'], nombre: 'Enfermedad Transmitida por Alimentos (ETA) Individual', anio: '2024', href: 'https://drive.google.com/file/d/1NrQMJrmAiu_JeDgUxbMz5acVfWVTyRKs/view' },
  { codigos: ['356'], nombre: 'Intento de Suicidio', anio: '2024', href: 'https://drive.google.com/file/d/1Z_elJaKP89RJToNEqVaUsLrvJG9OKaH2/view' },
  { codigos: ['357'], nombre: 'Infección Asociada a Dispositivos (IAD)', anio: '2024', href: 'https://drive.google.com/file/d/1Ck-8_KnOtLC31DjpkM6nTBKoM_oNpoM8/view' },
  { codigos: ['359'], nombre: 'Infección Asociada a Dispositivos (IAD) Colectivo', anio: '2024', href: 'https://drive.google.com/file/d/1s8lKoTPs683Sdk-UJmM4Ge3Q7hVvhig0/view' },
  { codigos: ['362'], nombre: 'Infección del Sitio Operatorio (ISO) Colectivo', anio: '2024', href: 'https://drive.google.com/file/d/1N_AlqvM9WQgzq6bvG9d7eotC31Ni2pwr/view' },
  { codigos: ['365'], nombre: 'Intoxicaciones', anio: '2026', href: 'https://drive.google.com/file/d/1PtYPE-HCrtTlA3DX2E6KB2oc4zyTZ7o7/view' },
  { codigos: ['420', '430', '440'], nombre: 'Leishmaniasis', anio: '2026', href: 'https://drive.google.com/file/d/1cVTAmqB0nDCRh9YlBchL8MD5pgiQkeh8/view' },
  { codigos: ['450'], nombre: 'Lepra', anio: '2026', href: 'https://drive.google.com/file/d/1MJxz0Wwo7-wY-jYXwRzF_fEAjDBcBN2m/view' },
  { codigos: ['452'], nombre: 'Lesiones por Pólvora', anio: '2024', href: 'https://drive.google.com/file/d/1EubvgZ6O7_0idx3QpNMFnFzpRexW1AnI/view' },
  { codigos: ['453'], nombre: 'Lesiones de Causa Externa', anio: '2025', href: 'https://drive.google.com/file/d/1VsRaI4VxgyZfcmkTFHOY2LhY93a5wm3P/view' },
  { codigos: ['455'], nombre: 'Leptospirosis', anio: '2026', href: 'https://drive.google.com/file/d/17AGUikn5qVTQW9H-zjRdfTdSHZwwTUuc/view' },
  { codigos: ['465'], nombre: 'Malaria', anio: '2026', href: 'https://drive.google.com/file/d/1QM-J97dkDD_-v5J_Y_l5GBnaCiuHHHGG/view' },
  { codigos: ['535'], nombre: 'Meningitis', anio: '2024', href: 'https://drive.google.com/file/d/10ofPqZqwyTlKuuIsyUHwkM_QlRS3eO3k/view' },
  { codigos: ['549'], nombre: 'Morbilidad Materna Extrema (MME)', anio: '2024', href: 'https://drive.google.com/file/d/1cN0CbUUepXZT8Oms164qX0RSufcEFLM3/view' },
  { codigos: ['550'], nombre: 'Mortalidad Materna', anio: '2024', href: 'https://drive.google.com/file/d/1foQ3DUWYLVfsw0aaYq2qusXWwDuMy0gw/view' },
  { codigos: ['560'], nombre: 'Mortalidad Perinatal y Neonatal Tardía (MPNT)', anio: '2025', href: 'https://drive.google.com/file/d/1FTRtECliBesXnjysmluglxvGA-_iT1-1/view' },
  { codigos: ['591'], nombre: 'Mortalidad en Menores de 5 Años', anio: '2024', href: 'https://drive.google.com/file/d/1FHWvRajJjxH0GpOh-DEB8RTwyulSEei2/view' },
  { codigos: ['605'], nombre: 'Enfermedad Diarreica Aguda (EDA) por Rotavirus', anio: '2024', href: 'https://drive.google.com/file/d/1XDOdIZP3JY5T6B6wnEkXSQHbwGl4x-l9/view' },
  { codigos: ['607'], nombre: 'Ébola', anio: '2024', href: 'https://drive.google.com/file/d/1M9n62P8pJLFOCKvVObsS-wTHPaAfVkyA/view' },
  { codigos: ['610'], nombre: 'Parálisis Flácida Aguda (PFA)', anio: '2026', href: 'https://drive.google.com/file/d/1lCWd8gR9LrtVZSuyz1OWhF00NeZ_sydW/view' },
  { codigos: ['650', '652'], nombre: 'Rabia Animal', anio: '2024', href: 'https://drive.google.com/file/d/1dVrPpVgfux9YtdHZuC5LStUz_47TepMF/view' },
  { codigos: ['670'], nombre: 'Rabia Humana', anio: '2024', href: 'https://drive.google.com/file/d/1Fc0FTbT2V24b7cwculSdkaeQ31Qmpn_z/view' },
  { codigos: ['710', '730'], nombre: 'Sarampión y Rubéola', anio: '2024', href: 'https://drive.google.com/file/d/1OzD2MnT8EsjNXANhRRmg7YNQvo5M7kch/view' },
  { codigos: ['720'], nombre: 'Síndrome de Rubéola Congénita', anio: '2024', href: 'https://drive.google.com/file/d/16as8jDfoDfiCygpP4Sd8jbOAu6Wt3FlZ/view' },
  { codigos: ['739'], nombre: 'Síndrome Inflamatorio Multisistémico (MIS-C)', anio: '2024', href: 'https://drive.google.com/file/d/1nob9F7K_zFbqkX0hBcAe23IRQt2hv4fF/view' },
  { codigos: ['740', '750'], nombre: 'Sífilis', anio: '2026', href: 'https://drive.google.com/file/d/1nGAhTOOMm0Id_cPWA66DwSvJ-4-fZmPI/view' },
  { codigos: ['760'], nombre: 'Tétanos Accidental', anio: '2024', href: 'https://drive.google.com/file/d/1q2KdvZPC7byKE3vRvONXfT_j2Ij60hw6/view' },
  { codigos: ['770'], nombre: 'Tétanos Neonatal', anio: '2024', href: 'https://drive.google.com/file/d/15eCN1L3GsflaZkpQLPwqG6h3bTMvHC3I/view' },
  { codigos: ['800'], nombre: 'Tosferina', anio: '2024', href: 'https://drive.google.com/file/d/1VPt381lEZ1tm5BlksbRSUZVVPe2usNl1/view' },
  { codigos: ['813'], nombre: 'Tuberculosis', anio: '2024', href: 'https://drive.google.com/file/d/1rnd4DNU1e9mw9sbPHHnIHOqa1LnF5abj/view' },
  { codigos: ['850'], nombre: 'VIH / Sida', anio: '2026', href: 'https://drive.google.com/file/d/1XgLLyQrPwWLCHt9ml6AYtO0550HpFtFm/view' },
  { codigos: ['875'], nombre: 'Violencia de Género', anio: '2026', href: 'https://drive.google.com/file/d/1__LgkoQSoCGjsXwCoKrGXDves97TsQrj/view' },
  { codigos: ['880'], nombre: 'Monkeypox (Viruela Símica)', anio: '2024', href: 'https://drive.google.com/file/d/1W-OygGzG4isg7HAm5X4pPbteZfNDQK5G/view' },
  { codigos: ['895'], nombre: 'Zika', anio: '2024', href: 'https://drive.google.com/file/d/1EsK7qM8SbZmg9IGrbtq9abAQnWfYXLRD/view' },
  { codigos: ['900'], nombre: 'Evento Sin Establecer', anio: '2024', href: 'https://drive.google.com/file/d/1EuvLMBYwMaF2vLCCnatv9dHX13rZ3Euo/view' },
  { codigos: ['995'], nombre: 'Infección Respiratoria Aguda (IRA) Colectiva', anio: '2026', href: 'https://drive.google.com/file/d/1oWhMy31ngl3iVNkRoPEuyiSy9uWIoPdK/view' },
  { codigos: ['998', '830', '621', '901'], nombre: 'Brotes y Otros Eventos', anio: '2024', href: 'https://drive.google.com/file/d/1C_w0scAWAR5sbjbEVN_akjL4c3KXYEXv/view' },
  { codigos: [], nombre: 'Datos Básicos', anio: '2024', href: 'https://drive.google.com/file/d/1sMCA_Sh4aU0UumZH3lkzVt71tmRczBOz/view' },
  { codigos: [], nombre: 'Datos Colectivos', anio: '', href: 'https://drive.google.com/file/d/1p2D5sVlISzKq2AVI8ulbhVlaEhciYdIv/view' },
  { codigos: [], nombre: 'Caracterización de Datos Básicos', anio: '2024', href: 'https://drive.google.com/file/d/1BrfQzlR3JkqF14Q7p3ioieZW-o8GRq5J/view' },
  { codigos: [], nombre: 'Caracterización de Datos Básicos Complementaria', anio: '2024', href: 'https://drive.google.com/file/d/19neklUDAiLn8aHoOW6exoiTAyhwE23nw/view' },
  { codigos: [], nombre: 'Laboratorios de Salud Pública', anio: '2024', href: 'https://drive.google.com/file/d/15WENNmJ8uX4tGNEwW1eIxNnKcbdT0VaI/view' },
  { codigos: [], nombre: 'Seguimiento de Contactos', anio: '2024', href: 'https://drive.google.com/file/d/1kkWmx6o6X-ukjWMVA01S0IwgPddFLPmN/view' },
];
