export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-5 text-center">
      <div>
        <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">404</p>
        <h1 className="font-serif text-4xl text-cream mb-4">Page not found</h1>
        <p className="text-blush/60 text-base mb-8">Let's get you back on track.</p>
        <a
          href="/"
          className="inline-block border border-gold text-gold px-8 py-3.5 text-sm tracking-wider uppercase hover:bg-gold hover:text-dark transition-all duration-200"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
