// Thin wrapper over vue-i18n's t() so every existing t('a.b.c') call site
// across the app keeps working unchanged -- the dot-path lookup semantics
// are identical to the old hand-rolled dictionary walker this replaced.
// Note: a handful of call sites iterate a t() result directly in v-for
// (arrays of {label, status} objects, not translated strings) -- vue-i18n's
// t() stringifies non-string messages, so those specific sites use tm()
// (via useI18n() directly) instead of this composable. See ReportsMockup.vue
// and similar for the pattern.
export function useT() {
  const { t } = useI18n()
  return t
}
