'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

const FORTRESS_URL   = 'https://subsector-botanist-karate.ngrok-free.dev/gates/push'
const FORTRESS_TOKEN = 'fss-forever-still-xK9mQpRt2026'

const inputClass =
  'w-full bg-[#2a1228] border border-[rgba(200,169,106,0.25)] text-cream font-sans text-base px-4 py-3.5 focus:outline-none focus:border-gold transition-colors placeholder:text-cream/25'
const labelClass =
  'block text-[0.72rem] font-bold tracking-[0.18em] text-cream/50 uppercase mb-2'
const sectionLabel =
  'font-sans text-[0.7rem] tracking-[0.26em] uppercase text-gold mt-10 mb-2 pb-2.5 border-b border-gold/20'
const sectionHint =
  'font-sans text-sm text-cream/50 mb-5 leading-relaxed'

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C8A96A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat' as const,
  backgroundPosition: 'right 16px center',
  paddingRight: '40px',
  cursor: 'pointer',
}

const TOTAL_STEPS = 7

// ── CHOICE CARD ──────────────────────────────────────────────────────────────
function ChoiceCard({
  emoji, title, desc, selected, onClick,
}: { emoji: string; title: string; desc: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-left p-5 border-2 transition-all ${
        selected
          ? 'border-gold bg-gold/10 text-gold'
          : 'border-gold/15 bg-[#2a1228] text-cream/80 hover:border-gold/40'
      }`}
    >
      {selected && (
        <span className="absolute top-2.5 right-3 text-gold text-xs font-bold">✓</span>
      )}
      <span className="block text-2xl mb-2">{emoji}</span>
      <span className="block font-serif text-base font-bold mb-1">{title}</span>
      <span className="block font-sans text-xs text-cream/50 leading-relaxed">{desc}</span>
    </button>
  )
}

// ── SWATCH CARD ──────────────────────────────────────────────────────────────
function SwatchCard({
  gradient, label, selected, onClick,
}: { gradient: string; label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-2 overflow-hidden transition-all ${
        selected ? 'border-gold' : 'border-gold/15 hover:border-gold/40'
      }`}
    >
      <div className="h-14 w-full" style={{ background: gradient }} />
      <div className={`py-2 px-2 font-sans text-xs text-center ${
        selected ? 'text-gold bg-gold/10' : 'text-cream/50 bg-[#2a1228]'
      }`}>
        {label}
      </div>
    </button>
  )
}

// ── TOGGLE CHIP ──────────────────────────────────────────────────────────────
function Chip({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 font-sans text-sm px-4 py-3 border transition-all ${
        selected
          ? 'border-gold text-gold bg-gold/5'
          : 'border-gold/25 text-cream/70 bg-[#2a1228] hover:border-gold/50'
      }`}
    >
      <span className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 ${
        selected ? 'bg-gold border-gold' : 'border-gold/40'
      }`}>
        {selected && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3l2 2 4-4" stroke="#1C0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </button>
  )
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function ClientsPage() {
  const [step, setStep]           = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [toast, setToast]         = useState<{ msg: string; error: boolean } | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  // ── STEP 1: About
  const [biz, setBiz]           = useState('')
  const [owner, setOwner]       = useState('')
  const [phone, setPhone]       = useState('')
  const [email, setEmail]       = useState('')
  const [industry, setIndustry] = useState('')
  const [address, setAddress]   = useState('')
  const [howFound, setHowFound] = useState('')

  // ── STEP 2: Online presence
  const [hasWebsite, setHasWebsite]   = useState('No')
  const [currentUrl, setCurrentUrl]   = useState('')
  const [socials, setSocials]         = useState<string[]>([])
  const [socialHandles, setSocialHandles] = useState('')
  const [hasGBP, setHasGBP]           = useState('Not sure')
  const [hasDomain, setHasDomain]     = useState('No')
  const [domainName, setDomainName]   = useState('')
  const [competitors, setCompetitors] = useState('')

  // ── STEP 3: What they need
  const [problem, setProblem]     = useState('')
  const [goal, setGoal]           = useState('')
  const [mainCta, setMainCta]     = useState('')
  const [budget, setBudget]       = useState("Not sure yet — let's talk")
  const [timeline, setTimeline]   = useState('As soon as possible')
  const [availability, setAvailability] = useState('')

  // ── STEP 4: Design preferences
  const [vibe, setVibe]       = useState('')
  const [colorFeel, setColor] = useState('')
  const [layout, setLayout]   = useState('')
  const [fontFeel, setFont]   = useState('')
  const [inspo1, setInspo1]   = useState('')
  const [inspo2, setInspo2]   = useState('')
  const [inspo3, setInspo3]   = useState('')
  const [avoid, setAvoid]     = useState('')

  // ── STEP 5: Assets
  const [hasPhotos, setHasPhotos]   = useState('')
  const [hasLogo, setHasLogo]       = useState('No')
  const [logoLink, setLogoLink]     = useState('')
  const [hasMenu, setHasMenu]       = useState('No')
  const [hasTestimonials, setHasTestimonials] = useState('No')
  const [testimonials, setTestimonials] = useState('')
  const [hasCopy, setHasCopy]       = useState('No')

  // ── STEP 6: Their customers
  const [audience, setAudience]       = useState('')
  const [customerSays, setCustomerSays] = useState('')
  const [topQuestion, setTopQuestion] = useState('')
  const [searchTerms, setSearchTerms] = useState('')

  // ── STEP 3 additions
  const [services, setServices]         = useState<string[]>([])
  const [pageCount, setPageCount]       = useState('')
  const [launchDate, setLaunchDate]     = useState('')

  // ── STEP 6 additions
  const [uniqueness, setUniqueness]     = useState('')
  const [revenueStreams, setRevenueStreams] = useState('')

  // ── STEP 7: Going forward
  const [updateSite, setUpdateSite]     = useState('')
  const [wantsManagement, setWantsManagement] = useState('')
  const [hasLicense, setHasLicense]     = useState('Not sure')
  const [takesOnlinePayments, setTakesOnlinePayments] = useState('No')
  const [needsBooking, setNeedsBooking] = useState('No')
  const [integrations, setIntegrations] = useState<string[]>([])
  const [needsHosting, setNeedsHosting] = useState('')
  const [notes, setNotes]               = useState('')

  function scrollTop() {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function showToast(msg: string, error = false) {
    setToast({ msg, error })
    setTimeout(() => setToast(null), 3200)
  }

  function next() {
    if (step === 1 && !biz.trim()) { showToast('Please enter your business name.', true); return }
    if (step === 1 && !owner.trim()) { showToast('Please enter your name.', true); return }
    setStep(s => s + 1)
    scrollTop()
  }

  function back() {
    setStep(s => s - 1)
    scrollTop()
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      const payload = {
        _subject: `New Client Portal: ${biz}`,
        // Step 1
        business_name:   biz,
        owner_name:      owner,
        phone:           phone           || 'Not provided',
        email:           email           || 'Not provided',
        industry:        industry        || 'Not specified',
        address:         address         || 'Not provided',
        how_found:       howFound        || 'Not provided',
        // Step 2
        has_website:     hasWebsite,
        current_url:     hasWebsite === 'Yes' ? (currentUrl || 'Not provided') : 'N/A',
        social_media:    socials.join(', ') || 'None',
        social_handles:  socialHandles   || 'Not provided',
        google_business: hasGBP,
        has_domain:      hasDomain,
        domain_name:     hasDomain === 'Yes' ? (domainName || 'Not provided') : 'N/A',
        competitors:     competitors     || 'None listed',
        // Step 3
        biggest_problem: problem         || 'Not provided',
        website_goal:    goal            || 'Not provided',
        main_cta:        mainCta         || 'Not selected',
        services_needed: services.join(', ') || 'Not specified',
        page_count:      pageCount       || 'Not specified',
        budget,
        timeline,
        launch_date:     launchDate      || 'No hard date',
        availability:    availability    || 'Not provided',
        // Step 4
        vibe:            vibe            || 'Not selected',
        color_feel:      colorFeel       || 'Not selected',
        layout_style:    layout          || 'Not selected',
        font_feel:       fontFeel        || 'Not selected',
        inspiration:     [inspo1, inspo2, inspo3].filter(Boolean).join(', ') || 'None',
        avoid:           avoid           || 'Nothing specified',
        // Step 5
        has_photos:      hasPhotos       || 'Not selected',
        has_logo:        hasLogo,
        logo_link:       hasLogo === 'Yes' ? (logoLink || 'Will email') : 'N/A',
        has_menu:        hasMenu,
        has_testimonials: hasTestimonials,
        testimonials:    hasTestimonials === 'Yes' ? (testimonials || 'Not provided') : 'N/A',
        has_copy:        hasCopy,
        // Step 6
        target_audience: audience        || 'Not provided',
        customers_say:   customerSays    || 'Not provided',
        top_question:    topQuestion     || 'Not provided',
        search_terms:    searchTerms     || 'Not provided',
        unique_selling_point: uniqueness || 'Not provided',
        revenue_streams: revenueStreams  || 'Not provided',
        // Step 7
        who_updates_site:      updateSite          || 'Not answered',
        wants_management:      wantsManagement     || 'Not answered',
        business_license:      hasLicense,
        online_payments:       takesOnlinePayments,
        needs_booking_system:  needsBooking,
        integrations_needed:   integrations.join(', ') || 'None specified',
        needs_hosting:         needsHosting        || 'Not answered',
        notes:                 notes               || 'None',
        _source: 'foreverstillstudio.com/clients',
      }

      const res = await fetch(FORTRESS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Fortress-Token': FORTRESS_TOKEN,
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setSubmitted(true)
        scrollTop()
      } else {
        const err = await res.json()
        showToast(err.error || 'Something went wrong. Try again.', true)
      }
    } catch {
      showToast('Network error. Check your connection.', true)
    } finally {
      setLoading(false)
    }
  }

  const ctaOptions = [
    { emoji: '📞', title: 'Call Us',              desc: 'Phone number front and center.' },
    { emoji: '📅', title: 'Book Appointment',     desc: 'Online booking or scheduling.' },
    { emoji: '🛒', title: 'Place an Order',       desc: 'Online orders or menu.' },
    { emoji: '✉️', title: 'Send a Message',       desc: 'Contact form or email.' },
    { emoji: '📍', title: 'Find Our Location',    desc: 'Map, hours, directions.' },
    { emoji: '👀', title: 'Browse Our Work',      desc: 'Portfolio, gallery, menu.' },
  ]

  return (
    <div className="min-h-screen bg-dark text-cream" ref={topRef}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-40">
          <Link href="/" aria-label="Forever Still Studio home">
            <img src="/images/logo.png" alt="Forever Still Studio" width={140} height={140} className="flex-shrink-0" />
          </Link>
          <span className="font-sans text-xs tracking-widest uppercase text-gold/60">
            Client Portal
          </span>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-52 pb-8 px-6 text-center border-b border-gold/20">
        <p className="font-serif text-3xl sm:text-4xl font-bold text-gold tracking-[0.14em]">
          Forever Still Studio
        </p>
        <p className="font-sans text-[0.75rem] tracking-[0.26em] uppercase text-cream/50 mt-2.5">
          Client Portal
        </p>
        {!submitted && (
          <p className="font-sans text-sm text-cream/60 mt-4 max-w-sm mx-auto leading-relaxed">
            Take your time — there are no wrong answers. This helps us build exactly what you need.
          </p>
        )}
      </header>

      <main className="max-w-[600px] mx-auto px-5 pb-24">

        {submitted ? (
          // ── SUCCESS ──────────────────────────────────────────────────────────
          <div className="text-center py-20">
            <div className="text-5xl mb-6">🎉</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-gold mb-4">You're all set.</h2>
            <p className="font-sans text-base text-cream/60 leading-relaxed max-w-sm mx-auto mb-8">
              Chrissy has everything she needs to get started. She'll be in touch soon to go over it all.
            </p>
            {hasLogo === 'Yes' && !logoLink && (
              <div className="bg-[#2a1228] border border-gold/25 p-5 text-left max-w-sm mx-auto">
                <p className="font-sans text-sm text-gold font-bold mb-1">One more thing</p>
                <p className="font-sans text-sm text-cream/60 leading-relaxed">
                  Please email your logo file to{' '}
                  <a href="mailto:chrissy@foreverstillstudio.com" className="text-gold underline">
                    chrissy@foreverstillstudio.com
                  </a>
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* ── PROGRESS BAR ─────────────────────────────────────────────── */}
            <div className="mt-8 mb-2">
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans text-xs text-cream/40 tracking-wide">
                  Step {step} of {TOTAL_STEPS}
                </span>
                <span className="font-sans text-xs text-gold tracking-wide">
                  {Math.round((step / TOTAL_STEPS) * 100)}% complete
                </span>
              </div>
              <div className="w-full h-0.5 bg-gold/15">
                <div
                  className="h-full bg-gold transition-all duration-500"
                  style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {['Business', 'Online', 'Goals', 'Design', 'Assets', 'Customers', 'Forward'].map((label, i) => (
                  <span
                    key={label}
                    className={`font-sans text-[0.6rem] tracking-wide uppercase hidden sm:block ${
                      i + 1 <= step ? 'text-gold' : 'text-cream/20'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── STEP 1: About Your Business ──────────────────────────────── */}
            {step === 1 && (
              <div>
                <p className={sectionLabel}>About Your Business</p>
                <p className={sectionHint}>Let's start with the basics.</p>
                <div className="space-y-5">
                  <label className="block">
                    <span className={labelClass}>Business Name *</span>
                    <input type="text" value={biz} onChange={e => setBiz(e.target.value)}
                      placeholder="e.g. Bloom Bakery" autoComplete="organization" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Your Name *</span>
                    <input type="text" value={owner} onChange={e => setOwner(e.target.value)}
                      placeholder="e.g. Sarah" autoComplete="given-name" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Phone Number</span>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                      placeholder="(555) 000-0000" autoComplete="tel" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Email Address</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com" autoComplete="email" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Type of Business</span>
                    <select value={industry} onChange={e => setIndustry(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option value="">— Pick one —</option>
                      <option>Restaurant</option>
                      <option>Coffee Shop</option>
                      <option>Bakery / Sweets</option>
                      <option>Tattoo Shop</option>
                      <option>Retail</option>
                      <option>Salon / Spa</option>
                      <option>Fitness / Wellness</option>
                      <option>Photography</option>
                      <option>Bar / Brewery</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>City / Location</span>
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)}
                      placeholder="City, State" autoComplete="address-level2" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>How did you hear about us?</span>
                    <input type="text" value={howFound} onChange={e => setHowFound(e.target.value)}
                      placeholder="e.g. Word of mouth, Google, Instagram..." className={inputClass} />
                  </label>
                </div>
              </div>
            )}

            {/* ── STEP 2: Online Presence ───────────────────────────────────── */}
            {step === 2 && (
              <div>
                <p className={sectionLabel}>Your Online World</p>
                <p className={sectionHint}>Tell us where you currently exist online — or don't. No judgement either way.</p>
                <div className="space-y-5">
                  <label className="block">
                    <span className={labelClass}>Do you have a website right now?</span>
                    <select value={hasWebsite} onChange={e => setHasWebsite(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </label>
                  {hasWebsite === 'Yes' && (
                    <label className="block">
                      <span className={labelClass}>Website URL</span>
                      <input type="url" value={currentUrl} onChange={e => setCurrentUrl(e.target.value)}
                        placeholder="https://..." className={inputClass} />
                    </label>
                  )}
                  <div>
                    <span className={labelClass}>Are you on social media? (pick all that apply)</span>
                    <div className="flex flex-wrap gap-2.5 mt-1">
                      {['Instagram', 'Facebook', 'Google Business', 'TikTok', 'LinkedIn', 'None yet'].map(p => (
                        <Chip key={p} label={p} selected={socials.includes(p)}
                          onClick={() => setSocials(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])} />
                      ))}
                    </div>
                  </div>
                  {socials.length > 0 && !socials.includes('None yet') && (
                    <label className="block">
                      <span className={labelClass}>Your social media handles / URLs</span>
                      <textarea rows={2} value={socialHandles} onChange={e => setSocialHandles(e.target.value)}
                        placeholder="e.g. instagram.com/bloombakery, facebook.com/bloombakery"
                        className={`${inputClass} resize-y`} />
                    </label>
                  )}
                  <label className="block">
                    <span className={labelClass}>Do you have a Google Business Profile?</span>
                    <select value={hasGBP} onChange={e => setHasGBP(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>Not sure</option>
                      <option>Yes — it's set up and claimed</option>
                      <option>Yes — but I haven't claimed it</option>
                      <option>No</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Do you own a domain name? (e.g. mybusiness.com)</span>
                    <select value={hasDomain} onChange={e => setHasDomain(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No</option>
                      <option>Yes</option>
                      <option>Not sure</option>
                    </select>
                  </label>
                  {hasDomain === 'Yes' && (
                    <label className="block">
                      <span className={labelClass}>What is your domain?</span>
                      <input type="text" value={domainName} onChange={e => setDomainName(e.target.value)}
                        placeholder="e.g. mybusiness.com" className={inputClass} />
                    </label>
                  )}
                  <label className="block">
                    <span className={labelClass}>Any competitors or similar businesses you know of?</span>
                    <textarea rows={2} value={competitors} onChange={e => setCompetitors(e.target.value)}
                      placeholder="Names or websites of businesses similar to yours in the area..."
                      className={`${inputClass} resize-y`} />
                    <p className="font-sans text-xs text-cream/30 mt-1.5">Helps us position your site to stand out.</p>
                  </label>
                </div>
              </div>
            )}

            {/* ── STEP 3: What They Need ────────────────────────────────────── */}
            {step === 3 && (
              <div>
                <p className={sectionLabel}>What You're Looking For</p>
                <p className={sectionHint}>Help us understand the problem you're trying to solve.</p>
                <div className="space-y-5">
                  <label className="block">
                    <span className={labelClass}>What's the biggest problem with your online presence right now?</span>
                    <textarea rows={3} value={problem} onChange={e => setProblem(e.target.value)}
                      placeholder="e.g. Nobody can find me. My Instagram is my only thing. I don't have a menu anywhere..."
                      className={`${inputClass} resize-y`} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>What would a good website do for you?</span>
                    <textarea rows={3} value={goal} onChange={e => setGoal(e.target.value)}
                      placeholder="e.g. Get more orders, let people book online, show off my work, look more professional..."
                      className={`${inputClass} resize-y`} />
                  </label>

                  <div>
                    <span className={labelClass}>What's the #1 thing you want visitors to do on your site?</span>
                    <p className={sectionHint}>Pick one.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {ctaOptions.map(opt => (
                        <ChoiceCard key={opt.title} emoji={opt.emoji} title={opt.title} desc={opt.desc}
                          selected={mainCta === opt.title} onClick={() => setMainCta(opt.title)} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className={labelClass}>Which services are you looking for? (pick all that apply)</span>
                    <div className="flex flex-wrap gap-2.5 mt-1">
                      {['Website Design', 'Brand Identity', 'Content Creation', 'Ongoing Maintenance', 'SEO'].map(s => (
                        <Chip key={s} label={s} selected={services.includes(s)}
                          onClick={() => setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])} />
                      ))}
                    </div>
                  </div>

                  <label className="block">
                    <span className={labelClass}>Do you need a full website or a single landing page?</span>
                    <select value={pageCount} onChange={e => setPageCount(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option value="">— Not sure yet —</option>
                      <option>Single landing page</option>
                      <option>2–3 pages</option>
                      <option>Full website (4+ pages)</option>
                      <option>Not sure — let's figure it out</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className={labelClass}>Budget (ballpark is fine)</span>
                    <select value={budget} onChange={e => setBudget(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>Not sure yet — let's talk</option>
                      <option>Under $500</option>
                      <option>$500–$1,000</option>
                      <option>$1,000–$3,000</option>
                      <option>$3,000+</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>How soon do you want to get started?</span>
                    <select value={timeline} onChange={e => setTimeline(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>As soon as possible</option>
                      <option>Within the next month</option>
                      <option>1–3 months</option>
                      <option>Just exploring for now</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Is there a specific date you need to be live by?</span>
                    <input type="text" value={launchDate} onChange={e => setLaunchDate(e.target.value)}
                      placeholder="e.g. Before our grand opening June 1st, before the holidays, no hard date..."
                      className={inputClass} />
                    <p className="font-sans text-xs text-cream/30 mt-1.5">Helps us block time and prioritize your project.</p>
                  </label>

                  <label className="block">
                    <span className={labelClass}>Best time to reach you?</span>
                    <input type="text" value={availability} onChange={e => setAvailability(e.target.value)}
                      placeholder="e.g. Weekday mornings, after 5pm, anytime by text..."
                      className={inputClass} />
                  </label>
                </div>
              </div>
            )}

            {/* ── STEP 4: Design Preferences ───────────────────────────────── */}
            {step === 4 && (
              <div>
                <p className={sectionLabel}>Design Preferences</p>
                <p className={sectionHint}>No design experience needed. Just pick what feels right — there are no wrong answers.</p>

                <p className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-cream/50 mb-3 mt-6">Overall Vibe</p>
                <p className={sectionHint}>If your website had a personality, which fits best?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { emoji: '✨', title: 'Clean & Modern',    desc: 'Simple, open, professional.' },
                    { emoji: '☕', title: 'Warm & Cozy',       desc: 'Inviting, personal, like home.' },
                    { emoji: '🔥', title: 'Bold & Edgy',       desc: 'Strong, confident, stands out.' },
                    { emoji: '💎', title: 'Luxury & Elegant',  desc: 'High-end, refined, premium.' },
                    { emoji: '🎨', title: 'Playful & Creative',desc: 'Fun, colorful, personality.' },
                    { emoji: '🌿', title: 'Natural & Organic', desc: 'Earthy, calm, wholesome.' },
                  ].map(o => (
                    <ChoiceCard key={o.title} {...o} selected={vibe === o.title} onClick={() => setVibe(o.title)} />
                  ))}
                </div>

                <p className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-cream/50 mb-3">Color Feel</p>
                <p className={sectionHint}>Which color mood fits your business?</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 mb-8">
                  {[
                    { gradient: 'linear-gradient(135deg,#f9f5f0,#e8ddd4,#d4c4b8)', label: 'Light & Airy' },
                    { gradient: 'linear-gradient(135deg,#1a1a2e,#2d1b3d,#4a2040)', label: 'Dark & Moody' },
                    { gradient: 'linear-gradient(135deg,#c8813a,#e8a857,#f2c97a)', label: 'Warm Tones' },
                    { gradient: 'linear-gradient(135deg,#2c5f8a,#4a90b8,#7ab8d4)', label: 'Cool Tones' },
                    { gradient: 'linear-gradient(135deg,#f4c2d0,#c8e6c9,#b3d9f7)', label: 'Soft & Pastel' },
                    { gradient: 'linear-gradient(135deg,#e63946,#f4a261,#2a9d8f)', label: 'Bold & Vibrant' },
                    { gradient: 'linear-gradient(135deg,#111,#555,#eee)',           label: 'Black & White' },
                    { gradient: 'linear-gradient(135deg,#6b4c3b,#a07850,#c4a882)', label: 'Earth Tones' },
                  ].map(s => (
                    <SwatchCard key={s.label} {...s} selected={colorFeel === s.label} onClick={() => setColor(s.label)} />
                  ))}
                </div>

                <p className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-cream/50 mb-3">Layout Style</p>
                <p className={sectionHint}>How should the page feel when someone scrolls through?</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { emoji: '◻️', title: 'Open & Spacious',     desc: 'Lots of breathing room. Clean.' },
                    { emoji: '📋', title: 'Information-Rich',    desc: 'More content, answers everything.' },
                    { emoji: '📸', title: 'Photo-Forward',       desc: 'Big images. Visuals do the talking.' },
                    { emoji: '📱', title: 'Simple & Direct',     desc: 'Just the essentials. Fast and clean.' },
                  ].map(o => (
                    <ChoiceCard key={o.title} {...o} selected={layout === o.title} onClick={() => setLayout(o.title)} />
                  ))}
                </div>

                <p className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-cream/50 mb-3">Font Feel</p>
                <p className={sectionHint}>Which text style feels most like your brand?</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { emoji: 'Aa', title: 'Classic & Elegant',    desc: 'Serif fonts. Traditional, refined.' },
                    { emoji: 'Aa', title: 'Clean & Modern',       desc: 'Sans-serif. Simple, professional.' },
                    { emoji: 'Aa', title: 'Bold & Strong',        desc: 'Heavy, impactful, hard to miss.' },
                    { emoji: 'Aa', title: 'Handwritten & Warm',   desc: 'Personal, friendly, human.' },
                  ].map(o => (
                    <ChoiceCard key={o.title} {...o} selected={fontFeel === o.title} onClick={() => setFont(o.title)} />
                  ))}
                </div>

                <p className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-cream/50 mb-2">Sites You Love</p>
                <p className={sectionHint}>Paste 1–3 websites you think look great. Any industry. (Optional but super helpful.)</p>
                <div className="space-y-3">
                  <input type="url" value={inspo1} onChange={e => setInspo1(e.target.value)}
                    placeholder="https://..." className={inputClass} />
                  <input type="url" value={inspo2} onChange={e => setInspo2(e.target.value)}
                    placeholder="https://..." className={inputClass} />
                  <input type="url" value={inspo3} onChange={e => setInspo3(e.target.value)}
                    placeholder="https://..." className={inputClass} />
                </div>

                <p className="font-sans text-[0.7rem] tracking-[0.18em] uppercase text-cream/50 mb-2 mt-7">Anything to Avoid</p>
                <p className={sectionHint}>Colors, styles, or vibes you absolutely do NOT want. (Optional.)</p>
                <textarea rows={2} value={avoid} onChange={e => setAvoid(e.target.value)}
                  placeholder="e.g. No pink. Nothing too corporate. Don't want it to look cheap..."
                  className={`${inputClass} resize-y`} />
              </div>
            )}

            {/* ── STEP 5: Assets ───────────────────────────────────────────── */}
            {step === 5 && (
              <div>
                <p className={sectionLabel}>Your Assets & Content</p>
                <p className={sectionHint}>We need to know what you have ready so we can plan the build.</p>
                <div className="space-y-6">

                  <div>
                    <span className={labelClass}>What photos do you have?</span>
                    <p className={sectionHint}>Pick one.</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { emoji: '📷', title: 'Professional Photos', desc: 'High-quality photos ready to use.' },
                        { emoji: '📱', title: 'Phone Photos',        desc: 'Phone photos — some are pretty good.' },
                        { emoji: '🤷', title: 'Not Much',            desc: 'A few photos, nothing great.' },
                        { emoji: '🚫', title: 'Nothing Yet',         desc: 'Need to get photos before launch.' },
                      ].map(o => (
                        <ChoiceCard key={o.title} {...o} selected={hasPhotos === o.title} onClick={() => setHasPhotos(o.title)} />
                      ))}
                    </div>
                  </div>

                  <label className="block">
                    <span className={labelClass}>Do you have a logo?</span>
                    <select value={hasLogo} onChange={e => setHasLogo(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No</option>
                      <option>Yes</option>
                      <option>Sort of — it needs work</option>
                    </select>
                  </label>
                  {hasLogo === 'Yes' && (
                    <label className="block">
                      <span className={labelClass}>Logo — Google Drive or Dropbox link</span>
                      <input type="url" value={logoLink} onChange={e => setLogoLink(e.target.value)}
                        placeholder="https://drive.google.com/..." className={inputClass} />
                      <p className="font-sans text-xs text-cream/30 mt-1.5">
                        Or email it to chrissy@foreverstillstudio.com after you submit.
                      </p>
                    </label>
                  )}

                  <label className="block">
                    <span className={labelClass}>Do you have a menu, price list, or service list written out?</span>
                    <select value={hasMenu} onChange={e => setHasMenu(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No</option>
                      <option>Yes — fully written</option>
                      <option>Partially — still working on it</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className={labelClass}>Do you have customer testimonials or reviews?</span>
                    <select value={hasTestimonials} onChange={e => setHasTestimonials(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No</option>
                      <option>Yes</option>
                      <option>I have Google reviews</option>
                    </select>
                  </label>
                  {hasTestimonials === 'Yes' && (
                    <label className="block">
                      <span className={labelClass}>Paste 1–2 of your best ones</span>
                      <textarea rows={3} value={testimonials} onChange={e => setTestimonials(e.target.value)}
                        placeholder="Copy and paste your favorite customer quotes here..."
                        className={`${inputClass} resize-y`} />
                    </label>
                  )}

                  <label className="block">
                    <span className={labelClass}>Do you have any copy (written text) ready for the site?</span>
                    <select value={hasCopy} onChange={e => setHasCopy(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No — I need help with writing</option>
                      <option>Yes — I have most of it written</option>
                      <option>Some — I have a rough idea</option>
                    </select>
                  </label>

                </div>
              </div>
            )}

            {/* ── STEP 6: Their Customers ───────────────────────────────────── */}
            {step === 6 && (
              <div>
                <p className={sectionLabel}>Your Customers</p>
                <p className={sectionHint}>The more we know about who you serve, the better we can write for them.</p>
                <div className="space-y-5">
                  <label className="block">
                    <span className={labelClass}>Who is your ideal customer?</span>
                    <textarea rows={3} value={audience} onChange={e => setAudience(e.target.value)}
                      placeholder="e.g. Local families, 30–50 years old, people who care about quality, regulars from the neighborhood..."
                      className={`${inputClass} resize-y`} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>What do your best customers always say about you?</span>
                    <textarea rows={3} value={customerSays} onChange={e => setCustomerSays(e.target.value)}
                      placeholder="e.g. 'Best coffee in town', 'Love the atmosphere', 'Always so friendly'..."
                      className={`${inputClass} resize-y`} />
                    <p className="font-sans text-xs text-cream/30 mt-1.5">This becomes your site copy. Real words from real customers always win.</p>
                  </label>
                  <label className="block">
                    <span className={labelClass}>What question do customers ask most before buying?</span>
                    <input type="text" value={topQuestion} onChange={e => setTopQuestion(e.target.value)}
                      placeholder="e.g. 'Do you do custom orders?', 'What are your hours?', 'Do you take walk-ins?'"
                      className={inputClass} />
                    <p className="font-sans text-xs text-cream/30 mt-1.5">We'll make sure the site answers this immediately.</p>
                  </label>
                  <label className="block">
                    <span className={labelClass}>How do people find your business right now?</span>
                    <input type="text" value={searchTerms} onChange={e => setSearchTerms(e.target.value)}
                      placeholder="e.g. Word of mouth, Google, Instagram, driving by..."
                      className={inputClass} />
                  </label>

                  <label className="block">
                    <span className={labelClass}>What makes you different from similar businesses in your area?</span>
                    <textarea rows={3} value={uniqueness} onChange={e => setUniqueness(e.target.value)}
                      placeholder="e.g. We're the only place in town that does X. We've been here 10 years. Our prices are..."
                      className={`${inputClass} resize-y`} />
                    <p className="font-sans text-xs text-cream/30 mt-1.5">This becomes your competitive edge on the site.</p>
                  </label>

                  <label className="block">
                    <span className={labelClass}>What are your main sources of revenue?</span>
                    <textarea rows={2} value={revenueStreams} onChange={e => setRevenueStreams(e.target.value)}
                      placeholder="e.g. In-person services, retail products, events, memberships..."
                      className={`${inputClass} resize-y`} />
                    <p className="font-sans text-xs text-cream/30 mt-1.5">Helps us feature what actually makes you money.</p>
                  </label>
                </div>
              </div>
            )}

            {/* ── STEP 7: Going Forward ─────────────────────────────────────── */}
            {step === 7 && (
              <div>
                <p className={sectionLabel}>Going Forward</p>
                <p className={sectionHint}>Last section. Almost done.</p>
                <div className="space-y-5">
                  <label className="block">
                    <span className={labelClass}>After the site is live, who will update it?</span>
                    <select value={updateSite} onChange={e => setUpdateSite(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option value="">— Pick one —</option>
                      <option>Me — I'll handle it</option>
                      <option>I'd like Forever Still Studio to manage it</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Are you interested in ongoing monthly social media management?</span>
                    <select value={wantsManagement} onChange={e => setWantsManagement(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option value="">— Pick one —</option>
                      <option>Yes — tell me more</option>
                      <option>Maybe — depends on the price</option>
                      <option>No — I'll handle it myself</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Do you need to accept online payments?</span>
                    <select value={takesOnlinePayments} onChange={e => setTakesOnlinePayments(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No</option>
                      <option>Yes</option>
                      <option>Maybe in the future</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Do you need online booking or scheduling?</span>
                    <select value={needsBooking} onChange={e => setNeedsBooking(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>No</option>
                      <option>Yes</option>
                      <option>Would be nice to have</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Do you have an LLC or registered business?</span>
                    <select value={hasLicense} onChange={e => setHasLicense(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option>Not sure</option>
                      <option>Yes</option>
                      <option>No — sole proprietor</option>
                    </select>
                  </label>
                  <div>
                    <span className={labelClass}>Do you need any of these built into your site? (pick all that apply)</span>
                    <div className="flex flex-wrap gap-2.5 mt-1">
                      {['Online Store', 'Email Newsletter Signup', 'Google Maps / Location', 'Social Media Feed', 'Live Chat', 'None of these'].map(s => (
                        <Chip key={s} label={s} selected={integrations.includes(s)}
                          onClick={() => setIntegrations(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])} />
                      ))}
                    </div>
                  </div>

                  <label className="block">
                    <span className={labelClass}>Will you need website hosting?</span>
                    <select value={needsHosting} onChange={e => setNeedsHosting(e.target.value)}
                      className={inputClass} style={selectStyle}>
                      <option value="">— Not sure —</option>
                      <option>Yes — I need everything set up</option>
                      <option>No — I have hosting already</option>
                      <option>Not sure — let's talk about it</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className={labelClass}>Anything else you want Chrissy to know?</span>
                    <textarea rows={4} value={notes} onChange={e => setNotes(e.target.value)}
                      placeholder="Questions, concerns, ideas, things we missed — anything at all."
                      className={`${inputClass} resize-y`} />
                    <p className="font-sans text-xs text-cream/30 mt-1.5">This goes directly to Chrissy. She reads every word.</p>
                  </label>
                </div>
              </div>
            )}

            {/* ── NAV BUTTONS ──────────────────────────────────────────────── */}
            <div className={`mt-10 flex gap-3 ${step === 1 ? 'justify-end' : 'justify-between'}`}>
              {step > 1 && (
                <button type="button" onClick={back}
                  className="font-sans text-sm font-bold tracking-widest uppercase px-6 py-4 border border-gold/30 text-gold/70 hover:border-gold hover:text-gold transition-colors">
                  ← Back
                </button>
              )}
              {step < TOTAL_STEPS ? (
                <button type="button" onClick={next}
                  className="font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 bg-gold text-dark hover:bg-[#D4B97A] transition-colors">
                  Continue →
                </button>
              ) : (
                <button type="button" onClick={handleSubmit} disabled={loading}
                  className="font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 bg-gold text-dark hover:bg-[#D4B97A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                  {loading ? 'Sending…' : 'Submit Everything →'}
                </button>
              )}
            </div>
          </>
        )}
      </main>

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 font-sans text-sm tracking-wide px-6 py-3.5 border z-50 pointer-events-none ${
          toast.error
            ? 'bg-[#2a1228] border-[#c0445a] text-[#c0445a]'
            : 'bg-[#2a1228] border-gold text-gold'
        }`}>
          {toast.msg}
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gold/10 py-8 px-5 text-center">
        <p className="font-sans text-xs text-cream/25 tracking-wide">
          Forever Still Studio &nbsp;·&nbsp; foreverstillstudio.com
        </p>
      </footer>
    </div>
  )
}
