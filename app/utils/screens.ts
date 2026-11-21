// The app screens shown on the site (public/screens): captured at 2x from the
// local app seeded with the fictional Clínica Demo (no production data), so
// w and h are the CSS size each one is drawn at, half its pixels.
export const SCREENS = {
  calendario: { src: '/screens/calendario.webp', w: 1280, h: 800 },
  calendarioSalas: { src: '/screens/calendario-salas.webp', w: 860, h: 520 },
  bandeja: { src: '/screens/bandeja.webp', w: 1280, h: 800 },
  recepcionista: { src: '/screens/recepcionista.webp', w: 592, h: 580 },
  planCuidados: { src: '/screens/plan-cuidados.webp', w: 942, h: 342 },
  bono: { src: '/screens/bono.webp', w: 1314, h: 318 },
  facturas: { src: '/screens/facturas.webp', w: 1349, h: 250 },
  postural: { src: '/screens/postural.webp', w: 1044, h: 644 },
  retencion: { src: '/screens/retencion.webp', w: 1316, h: 432 },
  appPaciente: { src: '/screens/app-paciente-inicio.webp', w: 416, h: 870 },
} as const

export type ScreenKey = keyof typeof SCREENS
