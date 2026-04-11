'use client'

import { useState } from 'react'
import Link from 'next/link'

// Dedicated Formspree endpoint for the intake form (Gates pipeline)
const FORMSPREE = 'https://formspree.io/f/mykbqenb'

const inputClass =
  'w-full bg-[#2a1228] border border-[rgba(200,169,106,0.25)] text-cream font-sans text-base px-4 py-3.5 focus:outline-none focus:border-gold transition-colors placeholder:text-cream/25'

const labelClass =
  'block text-[0.72rem] font-bold tracking-[0.18em] text-cream/50 uppercase mb-2'

export default function IntakePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [toast, setToast]         = useState<{ msg: string; error: boolean } | null>(null)

  const [formData, setFormData] = useState({
    business_name:   '',
    owner_name:      '',
    phone:           '',
    email:           '',
    industry:        '',
    address:         '',
    has_website:     'No',
    current_url:     '',
    biggest_problem: '',
    website_goal:    '',
    budget:          'Not sure yet — let\'s talk',
    timeline:        'As soon as possible',
    notes:           '',
  })

  const [socials, setSocials] = useState<string[]>([])

  function set(field: keyof typeof formData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  function toggleSocial(platform: string) {
    setSocials(prev =>
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    )
  }

  function showToast(msg: string, error = false) {
    setToast({ msg, error })
    setTimeout(() => setToast(null), 3000)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formData.business_name.trim()) {
      showToast('Please enter your business name.', true); return
    }
    if (!formData.owner_name.trim()) {
      showToast('Please enter your name.', true); return
    }
    setLoading(true)
    try {
      const payload = {
        _subject:        `New Intake: ${formData.business_name}`,
        business_name:   formData.business_name,
        owner_name:      formData.owner_name,
        phone:           formData.phone           || 'Not provided',
        email:           formData.email           || 'Not provided',
        industry:        formData.industry        || 'Not specified',
        address:         formData.address         || 'Not provided',
        has_website:     formData.has_website,
        current_url:     formData.has_website === 'Yes' ? (formData.current_url || 'Not provided') : 'N/A',
        social_media:    socials.length ? socials.join(', ') : 'None',
        biggest_problem: formData.biggest_problem || 'Not provided',
        website_goal:    formData.website_goal    || 'Not provided',
        budget:          formData.budget,
        timeline:        formData.timeline,
        notes:           formData.notes           || 'None',
        _source:         'foreverstillstudio.com/intake',
      }
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const err = await res.json()
        showToast(err.error || 'Something went wrong. Try again.', true)
      }
    } catch {
      showToast('Network error. Check your connection and try again.', true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark text-cream">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <Link href="/" aria-label="Forever Still Studio home">
            <img src="/images/logo.png" alt="Forever Still Studio" width={80} height={80} className="flex-shrink-0" />
          </Link>
          <Link
            href="/packages"
            className="font-sans text-xs tracking-widest uppercase text-gold hover:text-cream transition-colors"
          >
            View Packages
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-28 pb-10 px-6 text-center border-b border-gold/20">
        <p className="font-serif text-3xl sm:text-4xl font-bold text-gold tracking-[0.14em]">
          Forever Still Studio
        </p>
        <p className="font-sans text-[0.75rem] tracking-[0.26em] uppercase text-cream/50 mt-2.5">
          Client Intake Form
        </p>
        <p className="font-sans text-base text-cream/80 mt-5 max-w-sm mx-auto leading-relaxed">
          Fill this out and hit submit — Chrissy will be in touch shortly to go over everything.
        </p>
      </header>

      {/* Form / Success */}
      <main className="max-w-[540px] mx-auto px-5 pb-20">

        {submitted ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-6">✓</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-gold mb-4">You're all set.</h2>
            <p className="font-sans text-base text-cream/60 leading-relaxed max-w-xs mx-auto">
              Chrissy got your info and will reach out soon to talk through everything. Talk soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>

            {/* ── About Your Business ── */}
            <p className="font-sans text-[0.7rem] tracking-[0.26em] uppercase text-gold mt-10 mb-5 pb-2.5 border-b border-gold/20">
              About Your Business
            </p>

            <div className="space-y-5">
              <label className="block">
                <span className={labelClass}>Business Name *</span>
                <input
                  type="text"
                  value={formData.business_name}
                  onChange={e => set('business_name', e.target.value)}
                  placeholder="e.g. Bloom Bakery"
                  autoComplete="organization"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>Your Name *</span>
                <input
                  type="text"
                  value={formData.owner_name}
                  onChange={e => set('owner_name', e.target.value)}
                  placeholder="e.g. Sarah"
                  autoComplete="given-name"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>Phone Number</span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => set('phone', e.target.value)}
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>Email Address</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => set('email', e.target.value)}
                  placeholder="you@yourbusiness.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>What type of business?</span>
                <select
                  value={formData.industry}
                  onChange={e => set('industry', e.target.value)}
                  className={inputClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C8A96A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '40px', cursor: 'pointer' }}
                >
                  <option value="">— Pick one —</option>
                  <option>Restaurant</option>
                  <option>Coffee Shop</option>
                  <option>Tattoo Shop</option>
                  <option>Bakery / Sweets</option>
                  <option>Retail</option>
                  <option>Salon / Spa</option>
                  <option>Fitness / Wellness</option>
                  <option>Photography</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block">
                <span className={labelClass}>City / Location</span>
                <input
                  type="text"
                  value={formData.address}
                  onChange={e => set('address', e.target.value)}
                  placeholder="City, State"
                  autoComplete="address-level2"
                  className={inputClass}
                />
              </label>
            </div>

            {/* ── Online Presence ── */}
            <p className="font-sans text-[0.7rem] tracking-[0.26em] uppercase text-gold mt-10 mb-5 pb-2.5 border-b border-gold/20">
              Your Online Presence
            </p>

            <div className="space-y-5">
              <label className="block">
                <span className={labelClass}>Do you have a website right now?</span>
                <select
                  value={formData.has_website}
                  onChange={e => set('has_website', e.target.value)}
                  className={inputClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C8A96A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '40px', cursor: 'pointer' }}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </label>

              {formData.has_website === 'Yes' && (
                <label className="block">
                  <span className={labelClass}>Website URL</span>
                  <input
                    type="url"
                    value={formData.current_url}
                    onChange={e => set('current_url', e.target.value)}
                    placeholder="https://..."
                    className={inputClass}
                  />
                </label>
              )}

              <div>
                <span className={labelClass}>Are you on social media? (pick all that apply)</span>
                <div className="flex flex-wrap gap-2.5 mt-1">
                  {['Instagram', 'Facebook', 'Google Business', 'TikTok', 'None yet'].map(platform => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => toggleSocial(platform)}
                      className={`flex items-center gap-2 font-sans text-sm px-4 py-3 border transition-all ${
                        socials.includes(platform)
                          ? 'border-gold text-gold bg-gold/5'
                          : 'border-gold/25 text-cream/70 bg-[#2a1228] hover:border-gold/50'
                      }`}
                    >
                      <span className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 ${
                        socials.includes(platform) ? 'bg-gold border-gold' : 'border-gold/40'
                      }`}>
                        {socials.includes(platform) && (
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3l2 2 4-4" stroke="#1C0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── What You're Looking For ── */}
            <p className="font-sans text-[0.7rem] tracking-[0.26em] uppercase text-gold mt-10 mb-5 pb-2.5 border-b border-gold/20">
              What You're Looking For
            </p>

            <div className="space-y-5">
              <label className="block">
                <span className={labelClass}>What's the biggest problem right now?</span>
                <textarea
                  rows={3}
                  value={formData.biggest_problem}
                  onChange={e => set('biggest_problem', e.target.value)}
                  placeholder="e.g. Nobody can find me online. My Instagram is my only thing. I don't have a menu anywhere..."
                  className={`${inputClass} resize-y`}
                />
              </label>

              <label className="block">
                <span className={labelClass}>What would a good website do for you?</span>
                <textarea
                  rows={3}
                  value={formData.website_goal}
                  onChange={e => set('website_goal', e.target.value)}
                  placeholder="e.g. Get more orders, let people book online, show off my work..."
                  className={`${inputClass} resize-y`}
                />
              </label>

              <label className="block">
                <span className={labelClass}>Budget (ballpark is fine)</span>
                <select
                  value={formData.budget}
                  onChange={e => set('budget', e.target.value)}
                  className={inputClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C8A96A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '40px', cursor: 'pointer' }}
                >
                  <option>Not sure yet — let's talk</option>
                  <option>Under $500</option>
                  <option>$500–$1,000</option>
                  <option>$1,000–$3,000</option>
                  <option>$3,000+</option>
                </select>
              </label>

              <label className="block">
                <span className={labelClass}>How soon do you want to get started?</span>
                <select
                  value={formData.timeline}
                  onChange={e => set('timeline', e.target.value)}
                  className={inputClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C8A96A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '40px', cursor: 'pointer' }}
                >
                  <option>As soon as possible</option>
                  <option>Within the next month</option>
                  <option>1–3 months</option>
                  <option>Just exploring for now</option>
                </select>
              </label>

              <label className="block">
                <span className={labelClass}>Anything else you want Chrissy to know?</span>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={e => set('notes', e.target.value)}
                  placeholder="Questions, concerns, ideas — anything at all."
                  className={`${inputClass} resize-y`}
                />
                <p className="font-sans text-xs text-cream/40 mt-1.5 leading-relaxed">
                  This goes directly to Chrissy. She'll read every word.
                </p>
              </label>
            </div>

            {/* Submit */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-dark font-sans text-sm font-bold tracking-[0.16em] uppercase py-5 hover:bg-[#D4B97A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Send to Forever Still Studio'}
              </button>
            </div>

          </form>
        )}
      </main>

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 font-sans text-sm tracking-wide px-6 py-3.5 border z-50 pointer-events-none transition-all ${
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
