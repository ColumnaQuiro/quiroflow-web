// Reads a whole branch of the i18n messages as plain strings, so a kit
// component can write home.hero.lead instead of t('home.hero.lead') forty
// times. tm() returns the branch with each leaf still compiled (an AST
// object or a function, depending on how vue-i18n loaded it); rt() turns a
// leaf back into its text. A leaf is told apart from a nested object by the
// keys vue-i18n's AST nodes carry, which no copy key uses (type/t with
// body/b/static/s).
export function useCopy() {
  const { tm, rt } = useI18n()
  const isLeaf = (v: unknown): boolean => {
    if (typeof v === 'function') return true
    if (!v || typeof v !== 'object' || Array.isArray(v)) return false
    const o = v as Record<string, unknown>
    return ('type' in o || 't' in o) && ('body' in o || 'b' in o || 'static' in o || 's' in o)
  }
  const deep = (v: unknown): any => {
    if (typeof v === 'string') return v
    if (isLeaf(v)) return rt(v as Parameters<typeof rt>[0])
    if (Array.isArray(v)) return v.map(deep)
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x)]))
    return v
  }
  return (key: string) => deep(tm(key))
}
