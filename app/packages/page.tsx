import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Packages & Pricing | Forever Still Studio',
  description: 'Simple, transparent pricing for local business websites. From a clean 5-page site to full social media management — no surprises, no jargon.',
}

const packages = [
  {
    name: 'The Address',
    tagline: 'You exist online. Professionally.',
    price: 'from $350',
    cadence: 'one-time',
    ideal: 'Businesses that have nothing online, or a site so outdated it\'s embarrassing.',
    highlight: false,
    sections: [
      {
        title: 'Discovery & Setup',
        items: [
          'Intake form or 30-min call to gather your info',
          'Domain connection or guidance to purchase one',
          'Hosting setup — you never touch a server',
        ],
      },
      {
        title: 'The Build',
        items: [
          'Up to 5 pages: Home, About, Services, Contact, Gallery',
          'Mobile-first — looks right on every phone screen',
          'Your brand colors, logo, and photos built in',
          'Clear calls to action on every page',
          'Google Maps embed so customers find you instantly',
          'Contact form that sends inquiries to your email',
          'Business hours displayed prominently',
          'Social media links connected',
        ],
      },
      {
        title: 'Launch',
        items: [
          'Tested on mobile, tablet, and desktop before go-live',
          'Live within 2 weeks of receiving your content',
          '30-day post-launch support window',
        ],
      },
      {
        title: 'Ongoing (included)',
        items: [
          'Hosting covered for the first year',
          'Security updates handled',
          'Basic content updates — up to 1 hr/month',
        ],
      },
    ],
  },
  {
    name: 'The Presence',
    tagline: 'A website and social media, done right.',
    price: 'from $650',
    cadence: 'one-time',
    ideal: 'Businesses that need a website AND want to show up on social media — but don\'t have time to manage it.',
    highlight: false,
    sections: [
      {
        title: 'Everything in The Address, plus:',
        items: [],
      },
      {
        title: 'Social Media Setup (2 platforms)',
        items: [
          'Facebook, Instagram, Google Business, TikTok, or LinkedIn',
          'Full profile setup or cleanup of existing accounts',
          'Profile photo and cover image sized for each platform',
          'Bio written to attract local customers',
          'Hours, location, contact info all filled in',
          'Pinned welcome post created and published',
          'Call-to-action button set up (Call, Directions, Book)',
        ],
      },
      {
        title: 'Google Business Profile',
        items: [
          'Claim and verify your listing if not done',
          'Full profile — photos, hours, services, description',
          'This is what makes you show up on Google Maps',
        ],
      },
      {
        title: 'Content Starter Kit',
        items: [
          '3 ready-to-post captions per platform',
          'Hashtag set for your niche and location',
          'Simple one-page posting guide — no jargon',
        ],
      },
    ],
  },
  {
    name: 'The Voice',
    tagline: 'Come out of the gate strong.',
    price: 'from $1,000',
    cadence: 'one-time',
    ideal: 'Businesses that want website, socials, search visibility, and a content plan so they keep showing up.',
    highlight: true,
    sections: [
      {
        title: 'Everything in The Presence, plus:',
        items: [],
      },
      {
        title: 'SEO Foundations',
        items: [
          'Keyword research for your business type and location',
          'SEO titles and meta descriptions for every page',
          'Image alt text added throughout',
          'Site speed check and basic optimization',
          'Google Search Console setup',
          'Google Analytics connected',
        ],
      },
      {
        title: '30-Day Content Starter Pack',
        items: [
          '30 days of post ideas on a simple content calendar',
          '12 fully written captions — copy, paste, done',
          'Content themes tailored to your business',
          'Hashtag strategy document',
          'Best times to post guide',
        ],
      },
      {
        title: 'Brand Consistency Kit',
        items: [
          '3 branded post templates (Instagram/Facebook size)',
          'Editable in Canva — no designer needed going forward',
          'Brand font and color guide document',
        ],
      },
      {
        title: 'Launch Strategy Call',
        items: [
          '30-min call after go-live to walk through everything',
          'What you have, how to use it, what to focus on first',
        ],
      },
    ],
  },
  {
    name: 'The Partner',
    tagline: 'You run the business. We handle everything else.',
    price: 'from $400',
    cadence: '/month',
    ideal: 'Business owners who want zero involvement in their online presence.',
    highlight: false,
    sections: [
      {
        title: 'Social Media Management',
        items: [
          '3–5 posts per week across your active platforms',
          'Captions written, images sourced or created',
          'Content calendar planned in advance',
          'Seasonal and promotional content built in',
          'Basic comment responses and engagement monitoring',
        ],
      },
      {
        title: 'Website Maintenance',
        items: [
          'Monthly content updates — menu changes, new photos, hours',
          'Plugin and security updates handled',
          'Monthly performance check',
          'Uptime monitoring — we know before you do',
        ],
      },
      {
        title: 'Monthly Reporting',
        items: [
          'One-page recap: visitors, top pages, social reach',
          'No jargon — just the numbers that matter',
          'One recommendation per month on what to improve',
        ],
      },
      {
        title: 'Priority Support',
        items: [
          'Text/email response within 24 hours',
          'Emergency fixes handled same day',
        ],
      },
    ],
  },
]

const addons = [
  { name: 'Logo Design', description: 'Simple, clean logo in 3 variations (full, icon, text)', price: '$100–$175' },
  { name: 'Google Business Setup only', description: 'Claim, verify, and fully optimize their listing', price: '$75' },
  { name: 'Extra social platform', description: 'Add a 3rd platform to any package', price: '+$100' },
  { name: 'Rush delivery', description: 'Site live in 7 days instead of 14', price: '+$100' },
  { name: 'Photo coordination', description: 'Source and organize existing photos, resize and optimize for web', price: '$50' },
  { name: 'Email newsletter setup', description: 'Mailchimp or similar — list, template, first send', price: '$150' },
  { name: 'Menu / PDF design', description: 'Nicely formatted digital menu for your website', price: '$75' },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#1C0F1A] text-[#FAF7F2]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C0F1A]/95 backdrop-blur-md border-b border-[#C8A96A]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <Link href="/" aria-label="Forever Still Studio home">
            <img src="/images/logo.png" alt="Forever Still Studio" width={80} height={80} className="flex-shrink-0" />
          </Link>
          <Link
            href="/#contact"
            className="font-sans text-sm font-medium tracking-widest uppercase text-[#1C0F1A] bg-[#C8A96A] px-6 py-2.5 hover:bg-[#D4B97A] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-5 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-[#C8A96A] mb-5">
            Forever Still Studio
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#FAF7F2] leading-tight mb-6">
            What We Build.<br />
            <em className="text-[#C8A96A]">What It Costs.</em>
          </h1>
          <p className="font-sans text-base text-[#E8C4CB]/70 leading-relaxed max-w-xl mx-auto mb-10">
            No retainers for things you don't need. No surprise invoices.
            Pick the package that matches where you are — and what you actually want.
          </p>
          <div className="w-12 h-px bg-[#C8A96A] mx-auto" />
        </div>
      </section>

      {/* Packages */}
      <section className="pb-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col border ${
                pkg.highlight
                  ? 'border-[#C8A96A] bg-[#C8A96A]/5'
                  : 'border-[#C8A96A]/20 bg-[#3D1A3A]/20'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C8A96A] text-[#1C0F1A] font-sans text-[9px] font-bold tracking-[0.25em] uppercase px-4 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package header */}
              <div className="p-8 pb-6 border-b border-[#C8A96A]/20">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-serif text-3xl font-light text-[#FAF7F2]">{pkg.name}</h2>
                  <div className="text-right flex-shrink-0">
                    <div className="font-serif text-2xl text-[#C8A96A]">{pkg.price}</div>
                    <div className="font-sans text-[10px] tracking-widest uppercase text-[#E8C4CB]/50">{pkg.cadence}</div>
                  </div>
                </div>
                <p className="font-sans text-sm text-[#C8A96A] italic mb-3">{pkg.tagline}</p>
                <p className="font-sans text-xs text-[#E8C4CB]/60 leading-relaxed">
                  <span className="text-[#E8C4CB]/40 uppercase tracking-widest text-[9px]">Best for: </span>
                  {pkg.ideal}
                </p>
              </div>

              {/* Package body */}
              <div className="p-8 pt-6 flex flex-col gap-6 flex-1">
                {pkg.sections.map((section) => (
                  <div key={section.title}>
                    <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C8A96A] mb-3">
                      {section.title}
                    </p>
                    {section.items.length > 0 && (
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-[#E8C4CB]/80 leading-relaxed">
                            <span className="text-[#C8A96A] mt-0.5 flex-shrink-0">◆</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="mt-auto pt-6">
                  <Link
                    href="/#contact"
                    className={`w-full block text-center font-sans text-sm font-medium tracking-widest uppercase py-4 transition-colors ${
                      pkg.highlight
                        ? 'bg-[#C8A96A] text-[#1C0F1A] hover:bg-[#D4B97A]'
                        : 'border border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#1C0F1A]'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-5 sm:px-8 bg-[#3D1A3A]/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-[#C8A96A] mb-4">À La Carte</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#FAF7F2]">Add-Ons</h2>
            <p className="font-sans text-sm text-[#E8C4CB]/60 mt-4">Stack any of these onto any package — or order them on their own.</p>
          </div>

          <div className="divide-y divide-[#C8A96A]/15">
            {addons.map((addon) => (
              <div key={addon.name} className="flex items-start justify-between gap-6 py-5">
                <div className="flex-1">
                  <p className="font-sans text-sm font-medium text-[#FAF7F2] mb-1">{addon.name}</p>
                  <p className="font-sans text-xs text-[#E8C4CB]/55 leading-relaxed">{addon.description}</p>
                </div>
                <div className="font-serif text-xl text-[#C8A96A] flex-shrink-0">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 sm:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-[#C8A96A] mx-auto mb-10" />
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#FAF7F2] mb-6">
            Not sure which one fits?
          </h2>
          <p className="font-sans text-sm text-[#E8C4CB]/60 leading-relaxed mb-10">
            Tell us where you are and what you're trying to fix.
            We'll tell you exactly what you need — no upsell, no pressure.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#C8A96A] text-[#1C0F1A] font-sans text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#D4B97A] transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C8A96A]/10 py-8 px-5 sm:px-8 text-center">
        <p className="font-sans text-xs text-[#E8C4CB]/30 tracking-wide">
          © 2026 Forever Still Studio · Veteran-Owned · Titusville, PA ·{' '}
          <a href="mailto:chrissy@foreverstillbeauty.com" className="hover:text-[#C8A96A] transition-colors">
            chrissy@foreverstillbeauty.com
          </a>
        </p>
      </footer>

    </div>
  )
}
