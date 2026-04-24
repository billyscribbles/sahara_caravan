import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import './Lightbox.css'

const SWIPE_THRESHOLD = 50

export default function Lightbox({ images, startIndex = 0, open, onClose, alt = 'Gallery image' }) {
  const [index, setIndex] = useState(startIndex)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    if (open) setIndex(startIndex)
  }, [open, startIndex])

  const total = images?.length ?? 0
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])

  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose, prev, next])

  // Preload neighbours for snappier navigation
  useEffect(() => {
    if (!open || total === 0) return
    const neighbours = [images[(index + 1) % total], images[(index - 1 + total) % total]]
    neighbours.forEach((n) => {
      if (!n?.src) return
      const img = new Image()
      img.src = n.src
    })
  }, [open, index, images, total])

  if (!open || total === 0) return null

  const current = images[index]

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) next()
      else prev()
    }
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        aria-label="Close gallery"
        onClick={(e) => { e.stopPropagation(); onClose?.() }}
      >
        <X size={22} strokeWidth={2} aria-hidden="true" />
      </button>

      <div className="lightbox__counter" aria-live="polite">
        {index + 1} / {total}
      </div>

      {total > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          aria-label="Previous image"
          onClick={(e) => { e.stopPropagation(); prev() }}
        >
          <ChevronLeft size={28} strokeWidth={2} aria-hidden="true" />
        </button>
      )}

      <figure
        className="lightbox__stage"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.caption || alt}
          className="lightbox__image"
          draggable="false"
        />
        {current.caption && (
          <figcaption className="lightbox__caption">{current.caption}</figcaption>
        )}
      </figure>

      {total > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          aria-label="Next image"
          onClick={(e) => { e.stopPropagation(); next() }}
        >
          <ChevronRight size={28} strokeWidth={2} aria-hidden="true" />
        </button>
      )}
    </div>,
    document.body
  )
}
