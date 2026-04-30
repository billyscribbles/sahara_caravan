import { useEffect, useRef, useState } from 'react'
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

export default function BuildProcess({ showHeader = true }) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const stageCount = buildProcess.stages.length

  const scrollToIndex = (i) => {
    const track = trackRef.current
    if (!track) return
    const wrapped = ((i % stageCount) + stageCount) % stageCount
    const slide = track.children[wrapped]
    if (!slide) return
    const trackRect = track.getBoundingClientRect()
    const slideRect = slide.getBoundingClientRect()
    const slideCenterInTrack = (slideRect.left - trackRect.left) + slideRect.width / 2
    const target = track.scrollLeft + slideCenterInTrack - track.clientWidth / 2
    track.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
  }

  const next = () => scrollToIndex(activeIndex + 1)
  const prev = () => scrollToIndex(activeIndex - 1)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const slides = Array.from(track.children)
        const center = track.scrollLeft + track.clientWidth / 2
        let closest = 0
        let closestDist = Infinity
        slides.forEach((s, i) => {
          const slideCenter = s.offsetLeft - track.offsetLeft + s.clientWidth / 2
          const dist = Math.abs(slideCenter - center)
          if (dist < closestDist) {
            closestDist = dist
            closest = i
          }
        })
        setActiveIndex(closest)
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

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
          <div className="build-process__track" ref={trackRef}>
            {buildProcess.stages.map((stage, i) => {
              const Icon = ICONS[stage.icon] || Sparkles
              const step = String(i + 1).padStart(2, '0')
              return (
                <RevealOnScroll
                  key={stage.title}
                  delay={i * 0.04}
                  className="build-process__slide"
                >
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
                </RevealOnScroll>
              )
            })}
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
              {buildProcess.stages.map((stage, i) => (
                <button
                  key={stage.title}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to stage ${i + 1}: ${stage.title}`}
                  className={`build-process__dot${i === activeIndex ? ' is-active' : ''}`}
                  onClick={() => scrollToIndex(i)}
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
