import { useEffect, useRef, useState } from 'react'
import './BuildStageVideo.css'

export default function BuildStageVideo({ src, poster, label }) {
  const videoRef = useRef(null)
  const reduceMotion = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  if (!src) {
    return (
      <div className="build-stage-video build-stage-video--placeholder" aria-hidden="true">
        <span className="build-stage-video__placeholder-text">Video coming soon</span>
      </div>
    )
  }

  const play = () => {
    if (reduceMotion.current) return
    const v = videoRef.current
    if (!v) return
    const p = v.play()
    if (p && typeof p.then === 'function') {
      p.then(() => setIsPlaying(true)).catch(() => {})
    } else {
      setIsPlaying(true)
    }
  }

  const pause = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
    setIsPlaying(false)
  }

  const toggle = () => (isPlaying ? pause() : play())

  return (
    <button
      type="button"
      className={`build-stage-video${isPlaying ? ' is-playing' : ''}`}
      onMouseEnter={play}
      onMouseLeave={pause}
      onClick={toggle}
      onFocus={play}
      onBlur={pause}
      aria-label={`${label} — ${isPlaying ? 'pause' : 'play'} video`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      />
    </button>
  )
}
