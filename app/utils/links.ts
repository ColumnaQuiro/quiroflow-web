// Google Calendar appointment schedule for hola@quiroflow.com ("30 min with
// Raúl"). Update here if the schedule is ever recreated with a new link.
export const BOOKING_URL = 'https://calendar.app.google/mGCPXToAJcfgv6LR6'

// Self-service sign-up in the product itself. Every button that promises a
// 30-day trial points here; every button that promises a conversation points
// at BOOKING_URL. The two used to share one button labelled "Empezar prueba
// de 30 días" that opened the demo calendar -- which burned exactly the
// self-serve visitor who is cheapest to acquire.
export const SIGNUP_URL = 'https://app.quiroflow.com/signup'

// 60-90s product walkthrough. Empty until the video exists: VideoSection
// renders nothing in a production build while this is blank (and a marked
// placeholder in dev), so shipping the site before the recording is done
// never puts a "coming soon" box in front of a visitor. Set this to the
// embed URL (YouTube/Vimeo player URL, not the watch page) to switch it on.
export const PRODUCT_VIDEO_URL = ''
