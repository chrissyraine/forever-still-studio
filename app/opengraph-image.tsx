import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Forever Still Studio — Web Design for Local Businesses in Titusville, PA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/images/logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1C0F1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Gold top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: '#C8A96A' }} />

        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background:
              'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(107,45,62,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 30%, rgba(61,26,58,0.3) 0%, transparent 65%)',
          }}
        />

        {/* Rose logo */}
        <img
          src={logoSrc}
          width={110}
          height={110}
          style={{ borderRadius: '50%', marginBottom: 28 }}
        />

        {/* Business name */}
        <div
          style={{
            color: '#FAF7F2',
            fontSize: 58,
            fontWeight: 700,
            marginBottom: 16,
            textAlign: 'center',
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
          }}
        >
          Forever Still Studio
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#C8A96A',
            fontSize: 24,
            marginBottom: 20,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Get More Customers — Without Lifting a Finger Online.
        </div>

        {/* Divider */}
        <div style={{ width: 80, height: 1, background: '#C8A96A', marginBottom: 20, opacity: 0.6 }} />

        {/* Sub */}
        <div
          style={{
            color: 'rgba(232,196,203,0.65)',
            fontSize: 16,
            textAlign: 'center',
            letterSpacing: '0.04em',
          }}
        >
          Web Design for Local Businesses · foreverstillstudio.com · 814-282-0777
        </div>

        {/* Gold bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, background: '#C8A96A' }} />
      </div>
    ),
    { ...size }
  )
}
