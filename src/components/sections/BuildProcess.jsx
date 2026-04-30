import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  Factory,
  Box,
  Layers,
  Droplets,
  Zap,
  Hammer,
  Utensils,
  BadgeCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import BuildStageVideo from '../ui/BuildStageVideo.jsx'
import { buildProcess } from '../../content/buildProcess.js'
import './BuildProcess.css'

const ICONS = { Factory, Box, Layers, Droplets, Zap, Hammer, Utensils, BadgeCheck }
const CLONE_BUFFER = 2
const SWIPE_THRESHOLD = 40
const DRAG_THRESHOLD = 6

export default function BuildProcess({ showHeader = true }) {
  const stages = buildProcess.stages
  const stageCount = stages.length

  const [vIdx, setVIdx] = useState(CLONE_BUFFER)
  const [animating, setAnimating] = useState(true)
  const [slideWidth, setSlideWidth] = useState(0)
  const [gap, setGap] = useState(12)

  const trackRef = useRef(null)
  const viewportRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, dx: 0, dragged: false })
  const stepRef = useRef(0)

  const slideStep = slideWidth + gap
  const realIdx = ((vIdx - CLONE_BUFFER) % stageCount + stageCount) % stageCount

  const next = () => setVIdx((i) => i + 1)
  const prev = () => setVIdx((i) => i - 1)
  const goTo = (i) => setVIdx(CLONE_BUFFER + i)

  // Measure slide width + gap on mount and on viewport resize.
  useLayoutEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return

    const measure = () => {
      const slide = track.children[CLONE_BUFFER]
      if (!slide) return
      const w = slide.getBoundingClientRect().width
      const cs = window.getComputedStyle(track)
      const g = parseFloat(cs.columnGap || cs.gap || '0') || 0
      if (w <= 0) return
      const newStep = w + g
      if (newStep === stepRef.current) return
      const isResize = stepRef.current !== 0
      stepRef.current = newStep
      if (isResize) setAnimating(false)
      setSlideWidth(w)
      setGap(g)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(viewport)
    return () => ro.disconnect()
  }, [])

  // After a snap-back render (animating=false), re-enable transitions on the next frame.
  useEffect(() => {
    if (animating) return
    const id = requestAnimationFrame(() => setAnimating(true))
    return () => cancelAnimationFrame(id)
  }, [animating])

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== 'transform') return
    if (vIdx >= CLONE_BUFFER + stageCount) {
      setAnimating(false)
      setVIdx(vIdx - stageCount)
    } else if (vIdx < CLONE_BUFFER) {
      setAnimating(false)
      setVIdx(vIdx + stageCount)
    }
  }

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    if (e.target.closest('button')) return
    dragRef.current = { active: true, startX: e.clientX, dx: 0, dragged: false }
  }

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return
    const dx = e.clientX - dragRef.current.startX
    dragRef.current.dx = dx
    if (Math.abs(dx) > DRAG_THRESHOLD) dragRef.current.dragged = true
  }

  const onPointerUp = () => {
    if (!dragRef.current.active) return
    const { dx } = dragRef.current
    dragRef.current.active = false
    if (dx <= -SWIPE_THRESHOLD) next()
    else if (dx >= SWIPE_THRESHOLD) prev()
  }

  const onClickCapture = (e) => {
    if (dragRef.current.dragged) {
      e.preventDefault()
      e.stopPropagation()
      dragRef.current.dragged = false
    }
  }

  const trackStyle = {
    '--slide-step': `${slideStep}px`,
    '--v-idx': vIdx,
    visibility: slideStep > 0 ? 'visible' : 'hidden',
  }

  const renderStage = (stage, displayNum) => {
    const Icon = ICONS[stage.icon] || Sparkles
    const step = String(displayNum).padStart(2, '0')
    return (
      <article className="build-process__stage">
        <BuildStageVideo
          src={stage.video}
          poster={stage.poster}
          label={stage.title}
        />
        <div className="build-process__head">
          <div className="build-process__icon" aria-hidden="true">
            <Icon size={22} strokeWidth={1.6} />
          </div>
          <div className="build-process__num">{step}</div>
        </div>
        <h3 className="build-process__title">{stage.title}</h3>
        <p className="build-process__body">{stage.body}</p>
      </article>
    )
  }

  const preClones = stages.slice(stageCount - CLONE_BUFFER)
  const postClones = stages.slice(0, CLONE_BUFFER)

  return (
    <section className="build-process section section--dark" id="build-process">
      <div className="container">
        {showHeader && (
          <SectionHeader
            eyebrow={buildProcess.eyebrow}
            heading={buildProcess.heading}
            sub={buildProcess.sub}
            align="center"
            dark
          />
        )}

        <div className="build-process__carousel">
          <button
            type="button"
            className="build-process__edge build-process__edge--prev"
            onClick={prev}
            aria-label="Previous stage"
          >
            <ChevronLeft size={22} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            className="build-process__edge build-process__edge--next"
            onClick={next}
            aria-label="Next stage"
          >
            <ChevronRight size={22} strokeWidth={1.8} />
          </button>

          <div
            className="build-process__viewport"
            ref={viewportRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClickCapture={onClickCapture}
          >
            <div
              className={`build-process__track${animating ? '' : ' is-snapping'}`}
              ref={trackRef}
              style={trackStyle}
              onTransitionEnd={handleTransitionEnd}
            >
              {preClones.map((stage, i) => {
                const displayNum = stageCount - CLONE_BUFFER + i + 1
                return (
                  <div
                    key={`clone-pre-${i}`}
                    className="build-process__slide"
                    aria-hidden="true"
                  >
                    {renderStage(stage, displayNum)}
                  </div>
                )
              })}

              {stages.map((stage, i) => (
                <RevealOnScroll
                  key={`real-${stage.title}`}
                  delay={i * 0.04}
                  className="build-process__slide"
                >
                  {renderStage(stage, i + 1)}
                </RevealOnScroll>
              ))}

              {postClones.map((stage, i) => (
                <div
                  key={`clone-post-${i}`}
                  className="build-process__slide"
                  aria-hidden="true"
                >
                  {renderStage(stage, i + 1)}
                </div>
              ))}
            </div>
          </div>

          <div className="build-process__controls">
            <button
              type="button"
              className="build-process__nav"
              onClick={prev}
              aria-label="Previous stage"
            >
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>
            <div className="build-process__dots" role="tablist" aria-label="Build stages">
              {stages.map((stage, i) => (
                <button
                  key={stage.title}
                  type="button"
                  role="tab"
                  aria-selected={i === realIdx}
                  aria-label={`Go to stage ${i + 1}: ${stage.title}`}
                  className={`build-process__dot${i === realIdx ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="build-process__nav"
              onClick={next}
              aria-label="Next stage"
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {buildProcess.footnote && (
          <p className="build-process__footnote">{buildProcess.footnote}</p>
        )}
      </div>
    </section>
  )
}
