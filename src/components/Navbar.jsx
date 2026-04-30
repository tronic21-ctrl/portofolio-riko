import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

// Color Palette - Now uses CSS Variables (dynamic theme)
const COLORS = {
  primary: 'var(--blue-primary)',
  text: {
    muted: 'var(--text-secondary)',
    active: 'var(--blue-primary)',
  },
  bg: {
    navbar: 'var(--navbar-bg)',
    button: 'var(--blue-glow)',
    border: 'var(--blue-glow)',
  },
}

// Reusable Styles
const navbarStyles = {
  container: (isMobile) => ({
    position: 'fixed',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: COLORS.bg.navbar,
    backdropFilter: 'blur(12px)',
    border: `1px solid ${COLORS.bg.border}`,
    borderRadius: '50px',
    padding: isMobile ? '10px 16px' : '12px 32px',
    display: 'flex',
    gap: isMobile ? '12px' : '32px',
    alignItems: 'center',
    zIndex: 100,
    width: isMobile ? 'calc(100vw - 24px)' : 'auto',
    maxWidth: '600px',
    justifyContent: isMobile ? 'space-between' : 'flex-start',
    boxSizing: 'border-box',
  }),
  logo: (isMobile) => ({
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: isMobile ? '15px' : '18px',
    flexShrink: 0,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  }),
  link: (isActive, isMobile) => ({
    color: isActive ? COLORS.text.active : COLORS.text.muted,
    fontWeight: isActive ? '600' : '400',
    fontSize: isMobile ? '13px' : '15px',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    position: 'relative',
    paddingBottom: '4px',
  }),
  linkUnderline: (isActive) => ({
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: isActive ? '100%' : '0%',
    height: '2px',
    backgroundColor: COLORS.primary,
    transition: 'width 0.3s ease',
  }),
  langButton: (isMobile) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${COLORS.bg.border}`,
    borderRadius: '50px',
    padding: isMobile ? '4px 10px' : '5px 14px',
    color: COLORS.primary,
    fontSize: isMobile ? '11px' : '13px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.05em',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  }),
}

function Navbar() {
  const location = useLocation()
  const { lang, toggleLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const links = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/projects', label: t.nav.projects },
  ]

  return (
    <nav 
      style={navbarStyles.container(isMobile)}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo - Clickable */}
      <Link
        to="/"
        style={navbarStyles.logo(isMobile)}
        aria-label="Riko - Back to home"
        title="Back to home"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        Riko
      </Link>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: isMobile ? '12px' : '32px', alignItems: 'center' }}>
        {links.map(link => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              style={navbarStyles.link(isActive, isMobile)}
              aria-current={isActive ? 'page' : undefined}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = COLORS.primary
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = COLORS.text.muted
                }
              }}
            >
              {link.label}
              <span 
                style={{
                  ...navbarStyles.linkUnderline(isActive),
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: isActive ? '100%' : '0%',
                  height: '2px',
                  backgroundColor: COLORS.primary,
                  transition: 'width 0.3s ease',
                }}
              />
            </Link>
          )
        })}
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={navbarStyles.langButton(isMobile)}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        title={`Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--blue-glow)'
          e.currentTarget.style.borderColor = 'var(--blue-primary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.borderColor = 'var(--blue-glow)'
        }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>

      {/* Language Toggle Button */}
      <button
        onClick={toggleLang}
        style={navbarStyles.langButton(isMobile)}
        aria-label={`Switch language to ${lang === 'en' ? 'Indonesian' : 'English'}`}
        title={`Language: ${lang === 'en' ? 'English' : 'Indonesian'}`}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--blue-glow)'
          e.currentTarget.style.borderColor = 'var(--blue-primary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.borderColor = 'var(--blue-glow)'
        }}
      >
        {lang === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
      </button>
    </nav>
  )
}

export default Navbar
