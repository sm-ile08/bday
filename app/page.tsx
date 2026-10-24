'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Heart,
  Menu,
  Pause,
  Play,
  Sparkles,
  X,
} from 'lucide-react'

const memories = [
  { id: 1, image: '/oldDad.jpeg', year: 'A moment to remember', title: 'The quiet moments' },
  { id: 2, image: '/fam.jpeg', year: 'Family archive', title: 'Together is our favorite place'},
  { id: 3, image: '/dad4.jpeg', year: 'A life well lived', title: 'Always showing the way'},
  { id: 4, image: '/oldDad2.jpeg', year: 'The good old days', title: 'thank God for growth'},
  { id: 5, image: '/dad+maama.jpeg', year: 'A moment to remember', title: 'love love this picture' },
  { id: 6, image: '/dad+siblings.jpeg', year: 'Family archive', title: 'cutee'},
  { id: 7, image: '/dadChicken.jpeg', year: 'A life well lived', title: 'lifestyleeee'},
  { id: 8, image: '/dad+me.jpeg', year: 'The good old days', title: 'meeeeeee'},
]

const milestones = [
  ['01', 'A life filled with purpose', 'P.S Never to be caught unfresh'],
  ['02', 'Lessons that shaped us', 'The wisdom, patience, and quiet example we carry with us.'],
  ['03', 'Memories we will always cherish', 'Longggggggggggggggggggggggggg life and prosperity'],
  ['04', 'The moments that make our family special', 'We love you Mr Fabiyi'],
]

const qualities = [
  ['Strength', 'The kind that makes everyone around you feel safe.', '✦'],
  ['Wisdom', 'The steady voice we return to, time and time again.', '◒'],
  ['Love', 'Given freely, generously, and without needing to be asked.', '♡'],
  ['Guidance', 'A light that has helped us find our way.', '↗'],
  ['Dedication', 'In every sacrifice, every promise, every day.', '∞'],
  ['Kindness', 'The lasting impression you leave everywhere you go.', '⋆'],
]

const slides = [
  [
    "The Man Who Means So Much",
    "A lifetime of love, strength, and unforgettable memories.",
    "/dad1.jpg",
  ],
  [
    "A Legacy of Love",
    "The lessons you teach us will stay with us forever.",
    "/dad2.jpg",
  ],
  [
    "Our Favourite Memories",
    "The little moments that became our biggest treasures.",
    "/dad3.jpg",
  ],
  [
    "Celebrating You",
    "Today, we celebrate the wonderful person you are.",
    "/dad4.jpg",
  ],
];

export default function Page() {
  const [entered, setEntered] = useState(false)
  const [activeMemory, setActiveMemory] = useState<number | null>(null)
  const [slide, setSlide] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [celebrated, setCelebrated] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 4500)
    return () => window.clearInterval(timer)
  }, [playing])

  useEffect(() => {
    document.body.style.overflow = activeMemory !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeMemory])

  const nextMemory = () => setActiveMemory((current) => current === null ? 0 : (current + 1) % memories.length)
  const previousMemory = () => setActiveMemory((current) => current === null ? memories.length - 1 : (current - 1 + memories.length) % memories.length)
  const confetti = useMemo(() => Array.from({ length: 28 }, (_, index) => index), [])

  if (!entered) return (
    <main className="intro-screen">
      <div className="grain" />
      <div className="intro-orbit orbit-one" />
      <div className="intro-orbit orbit-two" />
      <div className="intro-content">
        <p className="eyebrow reveal-up">A small celebration of a very big life</p>
        <div className="intro-line" />
        <h1 className="intro-title reveal-up delay-one">For the man<br /><em>who means so much.</em></h1>
        <p className="intro-subtitle reveal-up delay-two">A birthday story, written with love.</p>
        <button className="enter-button reveal-up delay-three" onClick={() => setEntered(true)}>
          <span>Enter your surprise</span><ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>
      <p className="intro-foot">Scroll slowly · stay awhile</p>
    </main>
  )

  return (
    <main className="site-shell">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home">From Feranmi</a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#memories" onClick={() => setMenuOpen(false)}>Memories</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#letter" onClick={() => setMenuOpen(false)}>Letter</a>
          <a href="#wishes" onClick={() => setMenuOpen(false)}>Birthday wishes</a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <span className="nav-date">25 · 10 · 26</span>
      </nav>

      <section className="hero section-dark" id="home">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow gold">A birthday tribute</p>
          <h1>Celebrating the<br /><em>man, the legend,</em><br />my Dad.</h1>
          <p className="hero-description">For every lesson, every laugh, and every moment you made feel like home — this one is for you.</p>
          <a href="#memories" className="scroll-cue"><span>Begin the story</span><ArrowDown size={17} /></a>
        </div>
        <div className="hero-image">
          <img
            src="./dad6.jpeg"
            alt="A favourite photograph of Dad"
            className="hero-photo"
          />

          <div className="image-scrim" />

          <div className="hero-caption">
          </div>
        </div>
       <div className="hero-mark">DAD<br /><span>—</span><br />01</div>
      </section>

      <section className="section memories-section" id="memories">
        <div className="section-heading"><div><p className="eyebrow gold">Chapter one · the archive</p><h2>The moments<br /><em>we keep.</em></h2></div><p className="section-intro">A collection of little windows into a life that means everything to us. </p></div>
        <div className="memory-grid">
          {memories.map((memory, index) => <button key={memory.id} className={`memory-card ${memory.className}`} onClick={() => setActiveMemory(index)} aria-label={`Open memory: ${memory.title}`}><div className="memory-image"><img src={memory.image} alt="Placeholder family memory" /></div><div className="memory-meta"><span>{memory.year}</span><h3>{memory.title}</h3><p>{memory.text}</p></div><span className="card-number">0{memory.id}</span></button>)}
        </div>
      </section>

      <section className="section story-section" id="story">
        <div className="section-heading centered"><p className="eyebrow gold">Chapter two · our story</p><h2>A life measured<br /><em>in meaning.</em></h2><p className="section-intro">Not a biography. Just a few places to pause and honor the moments that made us who we are.</p></div>
        <div className="timeline">{milestones.map(([number, title, text], index) => <article className={`timeline-item ${index % 2 ? 'offset' : ''}`} key={number}><div className="timeline-number">{number}</div><div className="timeline-dot" /><div><p className="eyebrow">Milestone</p><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="section qualities-section"><div className="section-heading"><div><p className="eyebrow gold">Chapter three · the things you are</p><h2>More than words<br /><em>can say.</em></h2></div></div><div className="qualities-grid">{qualities.map(([title, text, icon]) => <article className="quality-card" key={title}><span className="quality-icon">{icon}</span><p className="eyebrow">{title}</p><h3>{text}</h3><span className="quality-line" /></article>)}</div></section>

      <section className="letter-section section" id="letter"><div className="letter-card"><div className="letter-stamp"><Heart size={18} fill="currentColor" /> <span>WITH LOVE</span></div><p className="eyebrow gold">Chapter four · a note from us</p><h2>A Letter<br /><em>to My Dad.</em></h2><div className="letter-copy"><p>Dear Mr Fabiyi,</p><p>There are some things that become clearer with time: the quiet sacrifices, the steady presence, the way you have always made room for us to become ourselves.</p><p>Thank you for being the person we can count on, the voice we trust, and the home we carry with us. I hope today you feel even a little of the love you have given so freely.</p><p>Here&apos;s to another beautiful year — and all the memories still waiting for us.</p><p>With all my love,<br /><em>Your favorite human</em></p></div><audio controls preload="metadata"> <source src="/bday.mp4" type="audio/mp4" /></audio><div className="letter-doodle">✦</div></div></section>

<section className="slideshow-section section-dark">
  <div
    className="slideshow-bg"
    style={{
      backgroundImage: `url("${slides[slide][2]}")`,
    }}
  />

  <div className="slideshow-overlay" />

  <div className="slideshow-content">
    <p className="eyebrow gold">Chapter five · a little film</p>

<h2>{slides[slide][0]}</h2>

<p>{slides[slide][1]}</p>

<div className="slide-controls">
  <button
    onClick={() =>
      setSlide((slide - 1 + slides.length) % slides.length)
    }
    aria-label="Previous slide"
  >
    <ArrowLeft size={18} />
  </button>

  <button
    className="play-button"
    onClick={() => setPlaying(!playing)}
    aria-label={playing ? "Pause slideshow" : "Play slideshow"}
  >
    {playing ? (
      <Pause size={18} />
    ) : (
      <Play size={18} fill="currentColor" />
    )}
  </button>

  <button
    onClick={() => setSlide((slide + 1) % slides.length)}
    aria-label="Next slide"
  >
    <ArrowRight size={18} />
  </button>

  <span className="slide-count">
    {String(slide + 1).padStart(2, "0")}
    {" "}
    <i>/</i>
    {" "}
    {String(slides.length).padStart(2, "0")}
  </span>
</div>

  </div>
</section>

      <section className="wishes-section section" id="wishes"><div className="wish-stars">{confetti.map((item) => <span key={item} style={{ '--i': item } as React.CSSProperties}>✦</span>)}</div><div className="centered wish-content"><p className="eyebrow gold">The birthday chapter</p><h2>Today, we<br /><em>celebrate you.</em></h2><p className="wish-copy">May this year bring you the same joy, courage, and love you have brought into all of our lives.</p><button className="celebrate-button" onClick={() => setCelebrated(true)}><Sparkles size={17} /> {celebrated ? 'A wish made with love' : 'Make a wish Mr Fabiyi'}</button>{celebrated && <p className="celebration-note">The whole sky is cheering for you.</p>}</div></section>

      <section className="final-section section-dark"><div className="final-image image-placeholder"><span>dad6.jpeg here</span></div><div className="final-overlay" /><div className="final-content"><p className="eyebrow gold">One last thing</p><p className="final-prelude">No matter how much time passes,<br />one thing will always remain true...</p><h2>I am grateful<br />that I get to<br /><em>call you Dad.</em></h2><p className="final-greeting">Happy Birthday, Daddy.</p><div className="final-line" /><p className="final-note">Made with love, just for you.</p></div></section>

      <footer className="footer"><span>D<span>·</span>D</span><p>For the man who means so much.</p><span>2026</span></footer>

      {activeMemory !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Memory viewer"><button className="lightbox-close" onClick={() => setActiveMemory(null)} aria-label="Close memory viewer"><X /></button><button className="lightbox-arrow left" onClick={previousMemory} aria-label="Previous memory"><ArrowLeft /></button><div className="lightbox-content"><div className="lightbox-image"><img src={memories[activeMemory].image} alt="Expanded family memory placeholder" /></div><p className="eyebrow gold">{memories[activeMemory].year}</p><h2>{memories[activeMemory].title}</h2><p>{memories[activeMemory].text}</p><span className="lightbox-count">0{activeMemory + 1} / 0{memories.length}</span></div><button className="lightbox-arrow right" onClick={nextMemory} aria-label="Next memory"><ArrowRight /></button></div>}
    </main>
  )
}
