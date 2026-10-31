import type { CompetitorKey } from '~/utils/comparison'

// Copy for the /alternativa-a-* pages, Spanish only like the page itself:
// these are searches made by Spanish clinics weighing a switch.
//
// The rule for everything here is the comparison table's rule: say only what
// the competitor's own site shows (checked October 2026), credit what it does
// well, and say who it still suits. The feature table on each page comes from
// app/utils/comparison.ts, not from this file, so the two cannot disagree.
//
// Migration claims follow the app's importers: PracticeHub has a full API
// import (patients, appointments, care plans, clinical notes, forms, files,
// packages and ledger); every other system goes through the CSV patient
// import plus the assisted migration.
export interface Alternative {
  slug: string
  competitor: CompetitorKey
  name: string
  title: string
  description: string
  heading: string
  intro: string
  strengths: string
  stillFits: string
  migration: string
  faq: { q: string; a: string }[]
}

export const alternatives: Alternative[] = [
  {
    slug: 'practicehub',
    competitor: 'practicehub',
    name: 'PracticeHub',
    title: 'Alternativa a PracticeHub para quiroprácticos en España | QuiroFlow',
    description: 'PracticeHub o QuiroFlow para clínicas en España: VeriFactu, WhatsApp sin integraciones, sala asignada sola y migración por API con notas y planes de cuidado.',
    heading: 'La alternativa a PracticeHub pensada para clínicas en España',
    intro: 'PracticeHub es un programa de gestión pensado para quiroprácticos, con clínicas en más de treinta países. Si tu consulta está en España, hay dos cosas que su web no menciona: la facturación VeriFactu que pedirá Hacienda y los recordatorios por WhatsApp, que en PracticeHub llegan a través de integraciones de terceros. QuiroFlow está hecho para clínicas españolas, en español, y trae tus datos de PracticeHub por API.',
    strengths: 'PracticeHub hace bien lo básico de una consulta quiropráctica: agenda, reserva online, formularios, facturas de bonos y membresías, estadísticas de retención, exportación de tus datos a Excel y una app de ejercicios para el paciente.',
    stillFits: 'Si tu clínica trabaja en inglés o fuera de España, o si no echas en falta nada de la tabla de abajo, PracticeHub puede seguir siendo una buena opción.',
    migration: 'Es la migración que mejor cubrimos. Conectas tu cuenta de PracticeHub y QuiroFlow importa por API pacientes, citas, tipos de cita, planes de cuidado, notas clínicas, formularios, archivos, bonos y movimientos de caja, sin tocar un CSV. Suele hacerse en un fin de semana y está incluida en todos los planes.',
    faq: [
      {
        q: '¿Puedo pasarme de PracticeHub sin perder las notas clínicas?',
        a: 'Sí. La importación por API trae las notas clínicas, los planes de cuidado, los formularios rellenados y los archivos de cada paciente, además de pacientes, citas, bonos y pagos. Antes de empezar a usar QuiroFlow puedes revisar la conciliación de lo importado.',
      },
      {
        q: '¿QuiroFlow emite facturas VeriFactu?',
        a: 'Sí. Cada factura lleva su QR, se encadena con la anterior y se envía a la AEAT automáticamente desde el día en que pasas a producción. Hasta entonces funciona en modo de pruebas, sin coste; desde ese día cuesta 7,50 € al mes por sede.',
      },
      {
        q: '¿Los recordatorios por WhatsApp necesitan una integración aparte?',
        a: 'No. Los recordatorios con botón para confirmar o cambiar la cita, la bandeja de WhatsApp y las plantillas vienen en QuiroFlow desde el plan Solo.',
      },
      {
        q: '¿Tiene app de ejercicios para el paciente, como PracticeHub?',
        a: 'Sí. Asignas ejercicios o programas con tu propio vídeo o foto desde la ficha, el paciente los sigue en la app con un recordatorio diario y QuiroFlow te avisa si deja de hacerlos.',
      },
      {
        q: '¿Cuánto cuesta QuiroFlow?',
        a: 'Solo, para un profesional, 45 €/mes; Practice, hasta cuatro profesionales, 99 €/mes; Clinic, sin límite de profesionales ni sedes, 149 €/mes. Precios sin IVA, pacientes ilimitados y 30 días de prueba sin tarjeta.',
      },
    ],
  },
  {
    slug: 'clinic-cloud',
    competitor: 'cliniccloud',
    name: 'Clinic Cloud',
    title: 'Alternativa a Clinic Cloud para fisioterapia y quiropráctica | QuiroFlow',
    description: 'Clinic Cloud o QuiroFlow para clínicas de terapia manual: sala asignada sola, lista de espera, aviso de plan retrasado, análisis postural y ejercicios.',
    heading: 'Una alternativa a Clinic Cloud para clínicas de terapia manual',
    intro: 'Clinic Cloud es el programa de gestión de Doctoralia para clínicas y consultas de muchas especialidades, con facturación VeriFactu y TicketBAI, WhatsApp, historia clínica con IA y la reserva online de Doctoralia. Es una opción sólida y generalista. QuiroFlow está pensado solo para clínicas de terapia manual —quiropráctica, fisioterapia, osteopatía y podología— y se centra en lo que en esas consultas decide el mes: que el paciente complete su plan y que la agenda no deje huecos.',
    strengths: 'Clinic Cloud cubre bien la gestión de una clínica generalista: agenda, comunicaciones por WhatsApp, SMS y email, facturación preparada para VeriFactu y TicketBAI, consentimientos digitales, stock, informes y herramientas de IA para la historia clínica y la recepción.',
    stillFits: 'Si tu clínica es multidisciplinar, con especialidades médicas, o si captas buena parte de tus pacientes a través del directorio de Doctoralia, Clinic Cloud encaja bien en ese ecosistema.',
    migration: 'Tus pacientes se importan por CSV desde el export de tu programa, mapeando tus propias columnas, sin depender de un formato fijo. Para el resto de datos te acompañamos en una migración asistida, incluida en todos los planes.',
    faq: [
      {
        q: '¿Qué tiene QuiroFlow que no muestre Clinic Cloud?',
        a: 'Según lo que cada uno publica en su web: asignación automática de sala o camilla, lista de espera que reofrece sola los huecos cancelados, aviso cuando un paciente se retrasa en su plan de tratamiento, análisis postural a partir de fotos, ejercicios con vídeo para el paciente y exportación completa de tus datos desde tu propia cuenta. La tabla de esta página lo detalla fila a fila.',
      },
      {
        q: '¿QuiroFlow es compatible con VeriFactu?',
        a: 'Sí. Cada factura lleva su QR, se encadena con la anterior y se envía a la AEAT automáticamente desde el día en que pasas a producción. QuiroFlow no emite TicketBAI, así que no sirve todavía para clínicas del País Vasco.',
      },
      {
        q: '¿Puedo seguir recibiendo reservas desde Doctoralia?',
        a: 'Tu perfil de Doctoralia es independiente de QuiroFlow, pero QuiroFlow no se sincroniza con la agenda de Doctoralia: las reservas que entren por allí tendrías que pasarlas a mano. QuiroFlow tiene su propia página de reservas online con tu marca y la disponibilidad real de cada profesional.',
      },
      {
        q: '¿Cuánto cuesta QuiroFlow?',
        a: 'Solo, para un profesional, 45 €/mes; Practice, hasta cuatro profesionales, 99 €/mes; Clinic, sin límite de profesionales ni sedes, 149 €/mes. Precios sin IVA, pacientes ilimitados y 30 días de prueba sin tarjeta.',
      },
    ],
  },
  {
    slug: 'doctoralia',
    competitor: 'doctoralia',
    name: 'Doctoralia',
    title: 'Alternativa a la agenda de Doctoralia para tu clínica | QuiroFlow',
    description: 'Doctoralia o un programa de gestión: qué cubre cada uno, comparado con QuiroFlow para clínicas: planes de tratamiento, bonos, salas, ejercicios y tus datos.',
    heading: 'Doctoralia te trae pacientes. QuiroFlow lleva la clínica.',
    intro: 'Doctoralia es sobre todo un directorio de salud donde los pacientes buscan profesional y reservan, con agenda online, recordatorios, reseñas y una página para tu perfil. Para que te encuentren pacientes nuevos es muy útil. Para llevar la clínica por dentro —planes de tratamiento, bonos, salas, ejercicios, la retención de cada paciente— hace falta un programa de gestión, y ahí es donde entra QuiroFlow.',
    strengths: 'Doctoralia destaca en visibilidad: perfiles que aparecen en Google, reserva online 24/7, recordatorios y confirmación por WhatsApp, reseñas de pacientes y lista de espera.',
    stillFits: 'Si tu agenda se llena sobre todo con pacientes que llegan por el directorio y no necesitas más que agenda y recordatorios, la agenda de Doctoralia puede bastarte. Muchas clínicas mantienen su perfil para captar y llevan la gestión en otro programa.',
    migration: 'Tus pacientes se importan por CSV desde el export que tengas, mapeando tus propias columnas, y te acompañamos en una migración asistida, incluida en todos los planes. Tu perfil de Doctoralia no se toca.',
    faq: [
      {
        q: '¿Tengo que dejar Doctoralia para usar QuiroFlow?',
        a: 'No. Tu perfil del directorio es independiente. Lo que tienes que saber es que QuiroFlow no se sincroniza con la agenda de Doctoralia: si sigues recibiendo reservas por allí, tendrías que pasarlas a QuiroFlow a mano, o mover esas reservas a la página de reservas de QuiroFlow.',
      },
      {
        q: '¿Qué hace QuiroFlow que no haga la agenda de Doctoralia?',
        a: 'Según lo que cada uno publica: asignación automática de sala, formularios digitales de primera visita y consentimiento, aviso cuando un paciente se retrasa en su plan, recepcionista con IA que contesta y reserva, análisis postural, ejercicios con vídeo para el paciente y exportación completa de tus datos. La tabla de esta página lo detalla fila a fila.',
      },
      {
        q: '¿QuiroFlow tiene reserva online?',
        a: 'Sí. Cada clínica tiene su propia página de reservas con su marca y la disponibilidad real de cada profesional, y la cita entra directa en la agenda.',
      },
      {
        q: '¿Cuánto cuesta QuiroFlow?',
        a: 'Solo, para un profesional, 45 €/mes; Practice, hasta cuatro profesionales, 99 €/mes; Clinic, sin límite de profesionales ni sedes, 149 €/mes. Precios sin IVA, pacientes ilimitados y 30 días de prueba sin tarjeta.',
      },
    ],
  },
]

export function findAlternative(slug: string) {
  return alternatives.find(alternative => alternative.slug === slug)
}
