// In-page anchor scroll with offset for the sticky header.
export function scrollToId(id, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
