// The app screens shown whole on the site (public/screens): captured at 2x
// from the local app seeded with the fictional Clínica Demo (no production
// data), so w and h are the CSS size each one is drawn at, half its pixels.
// Never cropped mid-content: smaller views are illustrations (KitIll).
export const SCREENS = {
  calendario: { src: '/screens/calendario.webp', w: 1280, h: 800 },
  bandeja: { src: '/screens/bandeja.webp', w: 1280, h: 800 },
  recepcionista: { src: '/screens/recepcionista.webp', w: 592, h: 706 },
  appPaciente: { src: '/screens/app-paciente-inicio.webp', w: 416, h: 870 },
} as const

export type ScreenKey = keyof typeof SCREENS
