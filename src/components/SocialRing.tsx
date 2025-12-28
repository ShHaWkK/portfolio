import { Share2 } from 'lucide-react'
import { siInstagram, siLinkedin, siGithub } from 'simple-icons/icons'
import React, { useState } from 'react'

type SocialItem = {
  href: string
  ariaLabel: string
  icon: { path: string; hex: string }
}

const items: SocialItem[] = [
  { href: 'https://www.instagram.com/alexandre.uzan/', ariaLabel: 'Instagram', icon: siInstagram },
  { href: 'https://github.com/ShHaWkK', ariaLabel: 'GitHub', icon: siGithub },
  { href: 'https://linkedin.com/in/alexandre-uzan', ariaLabel: 'LinkedIn', icon: siLinkedin },
]

const size = 44
const radius = 110

const SocialRing = () => {
  const [isOpen, setIsOpen] = useState(false)
  const n = items.length

  return (
    <div className="w-full flex items-center justify-center">
      <nav aria-label="Réseaux sociaux">
        <div className="relative" style={{ width: radius * 2 + size, height: radius * 2 + size }}>
          <button
            type="button"
            aria-label={isOpen ? 'Fermer les liens sociaux' : 'Ouvrir les liens sociaux'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-alt rounded-full w-20 h-20 shadow-inner border border-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-neon-green ${isOpen ? 'glow-effect' : ''}`}
          >
            <span className={isOpen ? 'spin-slow' : ''}>
              <Share2 className="w-8 h-8 text-neon-blue" aria-hidden="true" />
            </span>
          </button>
          {items.map((item, i) => {
            const angle = (2 * Math.PI * i) / n
            const x = (isOpen ? radius : 0) * Math.cos(angle)
            const y = (isOpen ? radius : 0) * Math.sin(angle)
            const delay = `${i * 90}ms`
            const style: React.CSSProperties = {
              transform: `translate(-50%,-50%) translate(${x}px, ${y}px)`,
              width: size,
              height: size,
              transition: 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms ease-out',
              transitionDelay: `${delay}, ${delay}`,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? 'auto' : 'none',
            }
            return (
              <a
                key={item.ariaLabel}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="group absolute left-1/2 top-1/2 inline-flex items-center justify-center rounded-full bg-background border border-gray-800 hover:border-neon-green transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-neon-green"
                style={style}
              >
                <span className={`transition-transform duration-200 ease-out group-hover:scale-105 ${isOpen ? 'spin-subtle' : ''}`}>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d={item.icon.path} fill={`#${item.icon.hex}`} />
                  </svg>
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default SocialRing
