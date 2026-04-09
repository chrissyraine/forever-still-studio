'use client'

import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// ICONS (inline SVG helpers — no external icon dep needed)
// ─────────────────────────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const LockIcon = () => (
  <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const ChevronDown = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#problem',   label: 'The Problem' },
    { href: '#solution',  label: 'How It Works' },
    { href: '/packages',  label: 'Packages' },
    { href: '#about',     label: 'About' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-36 lg:h-40">

          {/* Logo */}
          <a href="#" aria-label="Forever Still Studio home">
            <img
              src="/images/logo.png"
              alt="Forever Still Studio"
              width={120}
              height={120}
              className="flex-shrink-0"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-blush/70 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="sms:8142820777"
              className="bg-gold text-dark px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#D4B97A] transition-colors duration-200"
            >
              Text Me
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cream p-2 focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-dark border-t border-plum/60 pb-5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3.5 text-blush/80 hover:text-gold text-sm tracking-[0.12em] uppercase border-b border-plum/20"
              >
                {link.label}
              </a>
            ))}
            <div className="px-5 pt-4">
              <a
                href="sms:8142820777"
                className="block w-full text-center bg-gold text-dark px-5 py-3.5 text-sm font-bold tracking-[0.15em] uppercase"
              >
                Text Me for a Free Audit
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-dark flex items-center justify-center overflow-hidden hero-texture"
      aria-label="Hero"
    >
      {/* Radial glow blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(107,45,62,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(61,26,58,0.25) 0%, transparent 65%)',
        }}
      />

      {/* Top accent line */}
      <div className="accent-hr top-0" aria-hidden />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-32 pb-24 lg:pt-44 lg:pb-32">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-plum/50 border border-gold/25 px-5 py-2 mb-8 rounded-sm">
          <span className="text-gold text-[10px] tracking-[0.22em] uppercase">
            Veteran-Owned &nbsp;·&nbsp; Local &nbsp;·&nbsp; Built to Work
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-[5rem] text-cream leading-[1.08] mb-7">
          Your best customers are searching
          <br />
          for you right now.
          <br />
          <em className="not-italic text-gold">Can they find you?</em>
        </h1>

        {/* Sub */}
        <p className="text-blush text-lg sm:text-xl lg:text-2xl font-light mb-4 max-w-3xl mx-auto leading-relaxed">
          Most customers decide where to go before they ever leave the house.
        </p>

        {/* Support */}
        <p className="text-cream/55 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          If they can't find you online, they choose someone else.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <a
            href="sms:8142820777"
            className="btn-gold text-sm"
          >
            Text Me. I'll Show You What's Costing You Customers.
          </a>
          <a
            href="#problem"
            className="btn-outline-blush text-sm"
          >
            See the Problem
          </a>
        </div>

        {/* Scroll nudge */}
        <div className="mt-20 flex flex-col items-center gap-2 text-gold/40 animate-bounce" aria-hidden>
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="accent-hr bottom-0" aria-hidden />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PROBLEM
// ─────────────────────────────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    {
      title: 'No website',
      desc: "People assume you're out of business or not worth the risk.",
    },
    {
      title: 'Slow or broken site',
      desc: 'You get 3 seconds. After that, they\'re gone — and they\'re not coming back.',
    },
    {
      title: 'Facebook only',
      desc: "Facebook isn't findable. It's not a website. Google doesn't care about your Facebook page.",
    },
    {
      title: 'Not in local search',
      desc: 'Someone nearby is looking for exactly what you offer. They just found your competitor instead.',
    },
    {
      title: 'Broken on phones',
      desc: '7 out of 10 people search on their phone. A site that breaks on mobile loses you money daily.',
    },
    {
      title: 'No clear next step',
      desc: "If they can't find your hours, call you, or book in under 5 seconds — they leave.",
    },
  ]

  return (
    <section id="problem" className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-line mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-dark leading-tight mb-5">
            You're open. You're good at what you do.
            <br />
            <span className="text-burg">Customers just can't find you.</span>
          </h2>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Here's the reality: people don't ask around anymore — they Google.
            They look at your website for a few seconds and decide whether to show up or move on.
            If your site is slow, outdated, or missing — they choose someone else. Every time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-blush/40 p-6 hover:border-burg/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="text-burg font-bold text-base flex-shrink-0 mt-0.5 leading-none">✕</span>
                <div>
                  <h3 className="font-serif text-lg text-dark mb-1.5">{p.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote callout */}
        <div className="relative bg-dark text-center px-8 py-12 lg:py-14 overflow-hidden">
          <div className="accent-hr top-0" aria-hidden />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 100%, rgba(107,45,62,0.5), transparent)' }}
            aria-hidden
          />
          <p className="relative font-serif text-xl sm:text-2xl lg:text-3xl text-cream leading-relaxed max-w-3xl mx-auto">
            Most people decide where to spend their money before they leave the couch.
            {' '}<span className="text-gold">If you're not showing up, you're not in the running.</span>
          </p>
          <div className="accent-hr bottom-0" aria-hidden />
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SOLUTION
// ─────────────────────────────────────────────────────────────────────────────
function SolutionSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Loads Fast',
      desc: "No waiting. No spinning. Customers land on your page and see what they need — immediately.",
    },
    {
      icon: '📱',
      title: 'Looks Right on Every Phone',
      desc: "7 out of 10 people search on mobile. Your site will look great and work perfectly — guaranteed.",
    },
    {
      icon: '📍',
      title: 'Hours, Location & Contact Front and Center',
      desc: "The things customers actually need — findable in seconds, not buried three clicks deep.",
    },
    {
      icon: '🎯',
      title: 'Gets People to Call, Book, or Walk In',
      desc: "Every page is built to make the next step obvious. No confusion. No dead ends.",
    },
    {
      icon: '🔍',
      title: 'Shows Up When People Search Near You',
      desc: "Your site is built so Google knows where you are and what you do — so customers actually find you.",
    },
  ]

  return (
    <section id="solution" className="relative bg-plum py-20 lg:py-28">
      <div className="accent-hr top-0" aria-hidden />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="mb-12 lg:mb-0">
            <div className="section-line" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-cream leading-tight mb-6">
              Simple. Fast.
              <br />
              <span className="text-gold">Built to Convert.</span>
            </h2>
            <p className="text-blush/80 text-lg leading-relaxed mb-6">
              Forever Still Studio builds websites that actually work for local businesses —
              not templates that look good in demos but confuse real customers.
            </p>
            <p className="text-blush/60 text-base leading-relaxed mb-8">
              Every site is built around one goal: making it effortless for customers to find you,
              understand what you offer, and reach out. That's it. No clutter. No confusion.
            </p>
            <a href="#packages" className="btn-outline-gold text-xs">
              See Packages
            </a>
          </div>

          {/* Right: feature list */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-dark/35 border border-gold/15 p-5 hover:border-gold/35 transition-colors duration-200"
              >
                <span className="text-2xl leading-none flex-shrink-0 mt-0.5" aria-hidden>{f.icon}</span>
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">{f.title}</h3>
                  <p className="text-blush/65 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="accent-hr bottom-0" aria-hidden />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BEFORE / AFTER
// ─────────────────────────────────────────────────────────────────────────────
function BeforeAfterSection() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <div className="section-line mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-dark">
            The Difference Is Immediate
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── BEFORE ── */}
          <div className="relative">
            <div className="absolute -top-3 left-6 z-10 bg-burg text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5">
              Before
            </div>
            <div className="bg-white border-2 border-burg/25 p-7 pt-10 shadow-sm">

              {/* Mock old Facebook presence */}
              <div className="rounded-sm overflow-hidden border border-gray-200 mb-6">
                <div className="bg-gray-200 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-sm px-2 py-1 text-xs text-gray-400 truncate">
                    facebook.com/joes.coffee.titusville
                  </div>
                </div>
                <div className="bg-[#3b5998] p-4 h-28 flex flex-col justify-center">
                  <div className="bg-white/15 h-4 w-2/3 rounded mb-2" />
                  <div className="bg-white/10 h-3 w-full rounded mb-1.5" />
                  <div className="bg-white/10 h-3 w-3/4 rounded mb-4" />
                  <div className="text-white/40 text-[10px] italic">Last post: 8 months ago</div>
                </div>
              </div>

              {/* Issues */}
              <ul className="space-y-2.5 mb-6">
                {[
                  'No real website — just a Facebook page',
                  'Not showing up in Google searches',
                  'No hours or contact info easily visible',
                  'Layout breaks on mobile screens',
                  'No way to order, book, or reach out',
                  'Looks outdated and unprofessional',
                ].map((issue, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-dark/65">
                    <span className="text-burg font-bold flex-shrink-0 leading-snug">✕</span>
                    {issue}
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-burg/15">
                <p className="font-serif text-burg text-lg">
                  Outdated. Hard to find. Costing you customers every day.
                </p>
              </div>
            </div>
          </div>

          {/* ── AFTER ── */}
          <div className="relative">
            <div className="absolute -top-3 left-6 z-10 bg-gold text-dark text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5">
              After
            </div>
            <div className="bg-white border-2 border-gold/45 p-7 pt-10 shadow-lg shadow-gold/10">

              {/* Mock clean website */}
              <div className="rounded-sm overflow-hidden border border-gray-200 mb-6">
                <div className="bg-gray-200 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-sm px-2 py-1 text-xs text-gray-500 truncate">
                    joescoffee.com
                  </div>
                  <LockIcon />
                </div>
                <div className="bg-dark p-4 h-28 flex flex-col justify-center relative overflow-hidden">
                  <div className="h-1.5 w-1/3 rounded-full bg-gold/50 mb-3" />
                  <div className="bg-cream/90 h-5 w-3/4 rounded mb-1.5" />
                  <div className="bg-cream/40 h-3 w-1/2 rounded mb-4" />
                  <div className="inline-block bg-gold text-dark text-[10px] font-bold px-3 py-1.5 rounded-sm w-fit">
                    ORDER NOW
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gold/10" />
                </div>
              </div>

              {/* Benefits */}
              <ul className="space-y-2.5 mb-6">
                {[
                  'Clean site that loads in under 2 seconds',
                  'Shows up when people search nearby',
                  'Hours, menu, and location front and center',
                  'Looks perfect on every phone',
                  'Clear call-to-action on every page',
                  'Professional, trustworthy first impression',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-dark/75">
                    <span className="text-gold font-bold flex-shrink-0 leading-snug">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-gold/25">
                <p className="font-serif text-gold text-lg">
                  Fast. Clear. Easy to find. Bringing in customers 24/7.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PACKAGES
// ─────────────────────────────────────────────────────────────────────────────
function PackagesSection() {
  const packages = [
    {
      name: 'The Address',
      tagline: 'Built, hosted & maintained.',
      price: 'From $350',
      period: 'one-time',
      desc: "Your business gets a real website — clean, fast, and live. I handle everything. You just approve it.",
      features: [
        'Custom 1–3 page website',
        'Mobile-friendly design',
        'Contact info, hours & map',
        'Basic Google setup',
        '1 year of hosting included',
      ],
      highlight: false,
      cta: 'Get Started',
    },
    {
      name: 'The Presence',
      tagline: 'Website + 2 social platforms branded.',
      price: 'From $650',
      period: 'one-time',
      desc: "Your website plus a unified, professional look across Instagram and Facebook so everything works together.",
      features: [
        'Everything in The Address',
        'Instagram profile setup & branding',
        'Facebook page optimization',
        'Profile & cover photo design',
        'Bio, link, and highlight setup',
      ],
      highlight: true,
      cta: 'Get Started',
    },
    {
      name: 'The Voice',
      tagline: 'Full launch: website + socials + SEO.',
      price: 'From $1,000',
      period: 'one-time',
      desc: "A complete online launch — your site, your socials, a content roadmap, and SEO that helps people actually find you.",
      features: [
        'Everything in The Presence',
        'Local SEO setup',
        '30-day content calendar',
        'Google Business optimization',
        'Post templates & captions',
      ],
      highlight: false,
      cta: 'Get Started',
    },
    {
      name: 'The Partner',
      tagline: 'Ongoing posting, updates & strategy.',
      price: 'From $400',
      period: '/mo',
      desc: "You run your business. I post, update, and keep you visible every month — so you don't have to think about it.",
      features: [
        'Monthly site updates',
        'Social posting (2×/week)',
        'Monthly strategy check-in',
        'Priority support',
        'Performance snapshot reports',
      ],
      highlight: false,
      cta: "Let's Talk",
    },
  ]

  return (
    <section id="packages" className="relative bg-dark py-20 lg:py-28">
      <div className="accent-hr top-0" aria-hidden />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <div className="section-line mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-cream mb-4">
            Packages
          </h2>
          <p className="text-blush/60 text-lg max-w-lg mx-auto">
            Honest pricing. No hidden fees. No locked contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-7 transition-all duration-200 ${
                pkg.highlight
                  ? 'bg-burg border-2 border-gold shadow-2xl shadow-gold/15 scale-[1.02]'
                  : 'bg-plum/50 border border-gold/18 hover:border-gold/40'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-dark text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-1.5 whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-serif text-2xl text-cream mb-1">{pkg.name}</h3>
                <p className="text-gold text-[10px] tracking-[0.18em] uppercase">{pkg.tagline}</p>
              </div>

              <div className="mb-5 flex items-baseline gap-1">
                <span className="font-serif text-3xl text-cream">{pkg.price}</span>
                {pkg.period && (
                  <span className="text-blush/50 text-sm">{pkg.period}</span>
                )}
              </div>

              <p className="text-blush/65 text-sm leading-relaxed mb-6">{pkg.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-blush/80">
                    <span className="text-gold flex-shrink-0 mt-0.5 leading-none">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-5 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-gold text-dark hover:bg-[#D4B97A]'
                    : 'border border-gold text-gold hover:bg-gold hover:text-dark'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="text-center mt-10">
          <p className="text-blush/50 text-base">
            No contracts. No upfront stress.{' '}
            <span className="text-gold">I handle everything. You just approve it.</span>
          </p>
        </div>

      </div>
      <div className="accent-hr bottom-0" aria-hidden />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// WHY FOREVER STILL STUDIO
// ─────────────────────────────────────────────────────────────────────────────
function WhyUsSection() {
  const reasons = [
    {
      title: 'Local & Small Business Only',
      desc: "I don't work with corporations. I work with the restaurants, shops, and service businesses that make a community worth living in.",
    },
    {
      title: 'Plain English, Always',
      desc: "No jargon. No confusing reports. You'll know exactly what you're getting and why it matters.",
    },
    {
      title: "I Don't Vanish After Launch",
      desc: "Most designers build your site and disappear. I'm local, I'm reachable, and I make sure it keeps working.",
    },
    {
      title: 'Live in 1–2 Weeks',
      desc: "No six-month timelines. No waiting. Most sites are done and live before the end of the second week.",
    },
  ]

  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left: personal copy */}
          <div className="mb-12 lg:mb-0">
            <div className="section-line" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-dark leading-tight mb-6">
              Local. Reliable.
              <br />
              <span className="text-burg">Built to Work.</span>
            </h2>
            <p className="text-dark/65 text-lg leading-relaxed mb-5">
              I'm not an agency. I'm one person, local to Titusville, PA, building websites
              that actually bring in customers.
            </p>
            <p className="text-dark/60 text-base leading-relaxed mb-5">
              I work with small businesses — not corporations. Restaurants, shops, service
              businesses — the places that keep a town running.
            </p>
            <p className="text-dark/60 text-base leading-relaxed mb-8">
              I'm veteran-owned. That means I show up, I deliver, and I don't disappear after launch.
              Your site will be live in 1–2 weeks. No jargon. No contracts. No BS.
            </p>
            <div className="bg-dark inline-flex items-start gap-4 px-6 py-5">
              <div>
                <p className="text-gold text-[10px] tracking-[0.22em] uppercase font-semibold mb-1">
                  Veteran-Owned
                </p>
                <p className="text-cream/75 text-sm leading-relaxed">
                  I show up. I deliver. I don't disappear.<br />
                  <strong className="text-cream font-medium">— Chrissy, Forever Still Studio</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right: photo + cards */}
          <div className="space-y-5">
            {/* Photo */}
            <div className="relative overflow-hidden">
              <img
                src="/images/chrissy-working.jpg"
                alt="Chrissy at work — Forever Still Studio"
                className="w-full object-cover object-top"
                style={{ maxHeight: '340px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/60 to-transparent px-5 py-4">
                <p className="text-cream font-serif text-base">Chrissy Schroer</p>
                <p className="text-gold text-xs tracking-widest uppercase">Founder, Forever Still Studio</p>
              </div>
            </div>
            {/* Cards below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="bg-white border border-blush/40 p-5 hover:border-burg/25 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-px bg-gold mb-3" />
                  <h3 className="font-serif text-base text-dark mb-1.5">{r.title}</h3>
                  <p className="text-dark/60 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRIES / LOCAL EXAMPLES
// ─────────────────────────────────────────────────────────────────────────────
function IndustriesSection() {
  const industries = [
    {
      type: 'Restaurant',
      caption: 'A cleaner online presence for a local restaurant',
      bg: '#1A0A0A',
      accent: '#D4856A',
      mockName: "Papa's Italian Kitchen",
      mockSub: 'Dine In · Takeout · Catering',
      cta: 'VIEW MENU',
    },
    {
      type: 'Coffee Shop',
      caption: 'A faster, friendlier site for a coffee shop',
      bg: '#140E04',
      accent: '#C8A96A',
      mockName: 'Morning Light Coffee',
      mockSub: 'Open Daily 6am – 7pm',
      cta: 'ORDER AHEAD',
    },
    {
      type: 'Bar',
      caption: 'A sharp web presence for a local bar',
      bg: '#060E18',
      accent: '#6A8ED4',
      mockName: 'The Ironwood Tap',
      mockSub: 'Craft Beers · Live Music · Events',
      cta: 'SEE EVENTS',
    },
    {
      type: 'Tattoo Studio',
      caption: 'A professional mobile site for a tattoo studio',
      bg: '#0A0A0A',
      accent: '#A96AC8',
      mockName: 'Dark Matter Ink',
      mockSub: 'Custom Tattoos · Walk-Ins Welcome',
      cta: 'BOOK NOW',
    },
    {
      type: 'VFW Post',
      caption: 'A dignified online home for a VFW post',
      bg: '#050C14',
      accent: '#C8A96A',
      mockName: 'VFW Post 2586',
      mockSub: 'Titusville, PA · Est. 1946',
      cta: 'LEARN MORE',
    },
    {
      type: 'Service Business',
      caption: 'A lead-generating site for a local service business',
      bg: '#0A0A18',
      accent: '#6AC8A9',
      mockName: 'Summit Home Services',
      mockSub: 'Plumbing · Electric · HVAC',
      cta: 'GET A QUOTE',
    },
  ]

  return (
    <section className="relative bg-plum py-20 lg:py-28">
      <div className="accent-hr top-0" aria-hidden />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <div className="section-line mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-cream mb-4">
            Built for Local Businesses
          </h2>
          <p className="text-blush/65 text-lg max-w-xl mx-auto">
            If you're a local business that relies on people walking through your door, this is built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((biz, i) => (
            <div key={i} className="group">

              {/* Mock website preview card */}
              <div className="overflow-hidden border border-gold/15 group-hover:border-gold/40 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-black/20">
                {/* Browser chrome */}
                <div className="bg-[#1e1e1e] px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#28CA41]" />
                  </div>
                  <div className="flex-1 bg-[#111] rounded-sm px-2 py-1 text-[10px] text-gray-500 truncate">
                    {biz.mockName.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '').slice(0, 14)}.com
                  </div>
                  <LockIcon />
                </div>

                {/* Website body */}
                <div style={{ backgroundColor: biz.bg }} className="p-5 h-44 relative overflow-hidden">
                  {/* Nav bar */}
                  <div className="flex gap-3 mb-4 items-center">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: biz.accent + '80' }} />
                    <div className="h-1 w-6 rounded-full bg-white/25" />
                    <div className="h-1 w-6 rounded-full bg-white/15" />
                    <div className="h-1 w-6 rounded-full bg-white/15" />
                    <div className="h-1 w-6 rounded-full bg-white/15" />
                    <div className="ml-auto">
                      <div className="h-5 w-14 rounded-sm" style={{ backgroundColor: biz.accent + '40' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="h-1.5 w-1/3 rounded-full mb-2.5" style={{ backgroundColor: biz.accent + 'AA' }} />
                  <div className="text-white text-sm font-semibold mb-1 truncate leading-tight">{biz.mockName}</div>
                  <div className="text-white/45 text-[11px] mb-4">{biz.mockSub}</div>
                  <div
                    className="inline-block px-3 py-1.5 text-[10px] font-bold rounded-sm"
                    style={{ backgroundColor: biz.accent, color: '#1C0F1A' }}
                  >
                    {biz.cta}
                  </div>

                  {/* Decorative blob */}
                  <div
                    className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full opacity-8 pointer-events-none"
                    style={{ backgroundColor: biz.accent }}
                    aria-hidden
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="pt-4 px-1">
                <div className="text-gold text-[10px] tracking-[0.2em] uppercase mb-1">{biz.type}</div>
                <p className="text-blush/65 text-sm">{biz.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-blush/50 text-sm mb-5">
            Don't see your business type? I work with all local service businesses.
          </p>
          <a
            href="sms:8142820777"
            className="btn-outline-gold text-xs"
          >
            Text Me to Find Out
          </a>
        </div>

      </div>
      <div className="accent-hr bottom-0" aria-hidden />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FOUNDER QUOTE
// ─────────────────────────────────────────────────────────────────────────────
function QuoteSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="relative">
          {/* Oversized decorative quote */}
          <div
            className="font-serif text-[9rem] lg:text-[12rem] text-burg/10 absolute -top-10 -left-4 leading-none select-none pointer-events-none"
            aria-hidden
          >
            "
          </div>

          <blockquote className="relative z-10">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-dark leading-[1.35] mb-10">
              "I don't just build websites. I make sure people actually{' '}
              <span className="text-burg italic">find</span> and{' '}
              <span className="text-burg italic">choose</span>{' '}
              your business."
            </p>
            <footer className="flex items-center justify-center gap-5">
              <div className="w-14 h-px bg-gold" />
              <cite className="not-italic flex items-center gap-3">
                <img
                  src="/images/chrissy-headshot.jpg"
                  alt="Chrissy — Forever Still Studio"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-gold/40"
                />
                <div className="text-left">
                  <span className="block font-serif text-lg text-dark">Chrissy</span>
                  <span className="block text-dark/50 text-xs tracking-wider font-sans uppercase">Forever Still Studio</span>
                </div>
              </cite>
              <div className="w-14 h-px bg-gold" />
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT / FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────
function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    website: '',
    message: '',
  })

  const FORMSPREE = 'https://formspree.io/f/maqlvedv'

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const contactItems = [
    {
      href: 'sms:8142820777',
      icon: <PhoneIcon />,
      label: 'Phone / Text',
      value: '814-282-0777',
    },
    {
      href: 'mailto:chrissy@foreverstillbeauty.com',
      icon: <MailIcon />,
      label: 'Email',
      value: 'chrissy@foreverstillbeauty.com',
    },
    {
      href: undefined,
      icon: <PinIcon />,
      label: 'Location',
      value: 'Local to Titusville, PA',
    },
  ]

  return (
    <section id="contact" className="relative bg-dark py-20 lg:py-28">
      <div className="accent-hr top-0" aria-hidden />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left: copy + contact info */}
          <div className="mb-12 lg:mb-0">
            <div className="section-line" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-cream leading-tight mb-6">
              Let's Fix What's
              <br />
              <span className="text-gold">Costing You Customers</span>
            </h2>
            <p className="text-blush/75 text-lg leading-relaxed mb-5">
              Send me a quick note and I'll do a free audit of your current online presence —
              I'll tell you exactly what's working, what's not, and what it would take to fix it.
            </p>
            <p className="text-blush/50 text-sm leading-relaxed mb-10">
              No hard sell. No obligation. Just honest feedback from someone who wants to see local businesses win.
            </p>

            {/* Contact items */}
            <div className="space-y-5 mb-10">
              {contactItems.map((item, i) => {
                const inner = (
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors duration-200 text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-0.5">{item.label}</p>
                      <p className="text-cream font-serif text-lg">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={i} href={item.href}>{inner}</a>
                ) : (
                  <div key={i}>{inner}</div>
                )
              })}
            </div>

            {/* Urgency block */}
            <div className="border border-gold/25 bg-gold/5 px-5 py-4">
              <p className="text-gold text-sm font-semibold mb-1">
                Spots limited — I only take a few local businesses at a time.
              </p>
              <p className="text-blush/50 text-xs">
                Reach out soon to lock in your spot.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-cream p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-gold text-5xl mb-5">✓</div>
                <h3 className="font-serif text-2xl text-dark mb-3">Message Sent!</h3>
                <p className="text-dark/60 text-base">
                  I'll reach back out within 24 hours with your free audit.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl text-dark mb-7">Get Your Free Audit</h3>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="block text-[10px] font-bold tracking-[0.18em] text-dark/60 uppercase mb-2">
                        Your Name *
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full border border-blush/50 bg-white px-4 py-3 text-dark text-sm focus:outline-none focus:border-burg transition-colors placeholder:text-dark/30"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-[10px] font-bold tracking-[0.18em] text-dark/60 uppercase mb-2">
                        Business Name *
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Joe's Coffee"
                        className="w-full border border-blush/50 bg-white px-4 py-3 text-dark text-sm focus:outline-none focus:border-burg transition-colors placeholder:text-dark/30"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="block text-[10px] font-bold tracking-[0.18em] text-dark/60 uppercase mb-2">
                        Phone *
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(814) 000-0000"
                        className="w-full border border-blush/50 bg-white px-4 py-3 text-dark text-sm focus:outline-none focus:border-burg transition-colors placeholder:text-dark/30"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-[10px] font-bold tracking-[0.18em] text-dark/60 uppercase mb-2">
                        Email
                      </span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@yourbusiness.com"
                        className="w-full border border-blush/50 bg-white px-4 py-3 text-dark text-sm focus:outline-none focus:border-burg transition-colors placeholder:text-dark/30"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="block text-[10px] font-bold tracking-[0.18em] text-dark/60 uppercase mb-2">
                      Current Website or Facebook Page
                    </span>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={e => setFormData({ ...formData, website: e.target.value })}
                      placeholder="facebook.com/yourbusiness  —  or: none"
                      className="w-full border border-blush/50 bg-white px-4 py-3 text-dark text-sm focus:outline-none focus:border-burg transition-colors placeholder:text-dark/30"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-[10px] font-bold tracking-[0.18em] text-dark/60 uppercase mb-2">
                      What's Your Biggest Challenge Right Now?
                    </span>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="No website, outdated site, not showing up on Google..."
                      className="w-full border border-blush/50 bg-white px-4 py-3 text-dark text-sm focus:outline-none focus:border-burg transition-colors resize-none placeholder:text-dark/30"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-dark text-cream px-6 py-4 font-bold tracking-[0.15em] uppercase text-sm hover:bg-plum transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending…' : 'Send My Free Audit Request'}
                  </button>

                  {error && (
                    <p className="text-center text-burg text-xs pt-1">
                      Something went wrong — please text directly:{' '}
                      <a href="sms:8142820777" className="font-semibold underline">814-282-0777</a>
                    </p>
                  )}

                  {!error && (
                    <p className="text-center text-dark/40 text-xs pt-1">
                      Prefer to text?{' '}
                      <a href="sms:8142820777" className="text-burg font-semibold hover:underline">
                        814-282-0777
                      </a>
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FLOATING MOBILE CTA
// ─────────────────────────────────────────────────────────────────────────────
function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="sms:8142820777"
        className="flex items-center justify-center gap-3 bg-gold text-dark py-4 font-bold text-sm tracking-[0.15em] uppercase shadow-2xl shadow-black/40"
      >
        <PhoneIcon />
        Text Me — I'll Show You What's Costing You Customers
      </a>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE BUSINESS CALLOUT
// ─────────────────────────────────────────────────────────────────────────────
function GoogleSection() {
  return (
    <section className="bg-cream border-y border-blush/40 py-12">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">

          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#F0EAE0] border border-blush/50 flex items-center justify-center flex-shrink-0 text-2xl">
            📍
          </div>

          {/* Copy */}
          <div className="flex-1">
            <p className="font-serif text-xl text-dark mb-2">
              I also set up and optimize your{' '}
              <span className="text-burg">Google Business Profile</span>
            </p>
            <p className="text-dark/60 text-sm leading-relaxed max-w-2xl">
              It's the free tool most local businesses set up wrong — or skip entirely. When someone
              searches "coffee shop near me," your Google Business Profile is often the first thing
              they see. Get it right and you show up. Get it wrong and you're invisible.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#packages"
            className="flex-shrink-0 btn-outline-gold text-xs whitespace-nowrap"
          >
            See What's Included
          </a>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'How long does it take to build my site?',
      a: "Most sites are live within 1–2 weeks of kickoff. I work fast because I know you're running a business, not waiting around on a project. The timeline mostly depends on how quickly we can connect and get your info.",
    },
    {
      q: 'Do I need to write my own content?',
      a: "Nope. I'll write clear, professional copy for your site based on a short conversation about your business. You review it, we adjust anything you want, and that's it. You don't need to be a writer.",
    },
    {
      q: 'What if I want changes after the site is live?',
      a: "Every package includes a round of revisions before launch. After that, small updates are easy to handle — and if you're on The Partner plan, monthly updates are included. I don't disappear after launch.",
    },
    {
      q: 'Do I own my website?',
      a: "Yes — completely. It's your site, your domain, your content. I help you build it and keep it running, but it belongs to you. You're never locked in.",
    },
    {
      q: 'Do you work with businesses outside Titusville?',
      a: "Yes. I'm based in Titusville but I work with local businesses across northwest Pennsylvania and beyond. As long as you're a small, community-based business, we're a good fit.",
    },
    {
      q: 'What if I already have a website?',
      a: "That's fine. I'll look at what you have and give you an honest take — sometimes it just needs updates, sometimes it makes more sense to start fresh. Either way, I'll tell you the truth, not what makes me more money.",
    },
  ]

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <div className="section-line mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl text-dark mb-3">Common Questions</h2>
          <p className="text-dark/55 text-base">The things every business owner asks before getting started.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-blush/40 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#fdf9f5] transition-colors duration-150"
                aria-expanded={openIndex === i}
              >
                <span className="font-serif text-lg text-dark leading-snug">{faq.q}</span>
                <span
                  className={`text-gold flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown />
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-1 text-dark/65 text-sm leading-relaxed border-t border-blush/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ALSO FROM FOREVER STILL BANNER
// ─────────────────────────────────────────────────────────────────────────────
function AlsoFromBanner() {
  return (
    <section className="bg-[#0D0608] border-t border-plum/20 border-b border-plum/20 py-7 text-center">
      <p className="text-[10px] font-medium tracking-[0.24em] uppercase text-gold mb-3">Also from Forever Still</p>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <a href="https://www.foreverstillmusic.com" target="_blank" rel="noopener" className="font-serif text-xl text-cream hover:text-gold transition-colors">
          Forever Still <span className="text-gold">Music</span>
        </a>
        <span className="text-gold/20 text-xs">◆</span>
        <a href="https://www.foreverstillbeauty.com" target="_blank" rel="noopener" className="font-serif text-xl text-cream hover:text-gold transition-colors">
          Forever Still <span className="text-gold">Beauty</span>
        </a>
      </div>
    </section>
  )
}

// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0D0608] border-t border-plum/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-cream mb-1">Forever Still Studio</p>
            <p className="text-gold text-[9px] tracking-[0.22em] uppercase mb-5">Veteran-Owned</p>
            <p className="text-blush/40 text-sm leading-relaxed max-w-xs">
              Simple, fast websites built for local businesses in Titusville, PA and beyond.
              Clear messaging. Real results.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-5">Contact</p>
            <div className="space-y-3">
              <a
                href="sms:8142820777"
                className="flex items-center gap-2.5 text-blush/60 text-sm hover:text-gold transition-colors"
              >
                <PhoneIcon />
                814-282-0777
              </a>
              <a
                href="mailto:chrissy@foreverstillbeauty.com"
                className="flex items-center gap-2.5 text-blush/60 text-sm hover:text-gold transition-colors"
              >
                <MailIcon />
                chrissy@foreverstillbeauty.com
              </a>
              <div className="flex items-center gap-2.5 text-blush/40 text-sm">
                <PinIcon />
                Local to Titusville, PA
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-5">Navigate</p>
            <div className="space-y-2.5">
              {[
                { href: '#problem',  label: 'The Problem' },
                { href: '#solution', label: 'How It Works' },
                { href: '#packages', label: 'Packages' },
                { href: '#about',    label: 'About' },
                { href: '#contact',  label: 'Get a Free Audit' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-blush/60 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-plum/25 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blush/25 text-xs">
            © {new Date().getFullYear()} Forever Still Studio. All rights reserved.
          </p>
          <p className="text-blush/20 text-xs">
            www.foreverstillstudio.com &nbsp;·&nbsp; Titusville, PA
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <GoogleSection />
        <BeforeAfterSection />
        <PackagesSection />
        <WhyUsSection />
        <IndustriesSection />
        <QuoteSection />
        <FAQSection />
        <ContactSection />
      </main>
      <AlsoFromBanner />
      <Footer />
      <FloatingCTA />
    </>
  )
}
