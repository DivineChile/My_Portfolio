// EmailJS credentials.
//
// These are client-side "public" identifiers by design — EmailJS sends the
// request straight from the browser, so they are meant to be shipped in the
// bundle. Security is enforced in the EmailJS dashboard (allowed origins +
// rate limits), not by hiding these values.
//
// Any of them can be overridden without touching source by setting the matching
// VITE_EMAILJS_* variable in a .env file. The fallbacks below are the live
// values carried over from the previous portfolio, so sending works out of the
// box once `@emailjs/browser` is installed.
export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_e3yhkfn',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_1xv90mn',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'e0mrAbaOSuQiK7LAB',
}
