import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

function Navbar() {
  const location = useLocation()
  const { lang, toggleLang, t } = useLang()
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
    <nav style={{
      position: 'fixed',
      top: '12px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#0f172a99',
      backdropFilter: 'blur(12px)',
      border: '1px solid #38bdf820',
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
    }}>
      <span style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: isMobile ? '15px' : '18px', flexShrink: 0 }}>
        Riko
      </span>

      {links.map(link => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            color: location.pathname === link.path ? '#38bdf8' : '#94a3b8',
            fontWeight: location.pathname === link.path ? 'bold' : 'normal',
            fontSize: isMobile ? '13px' : '15px',
            transition: 'color 0.3s',
            whiteSpace: 'nowrap',
          }}
        >
          {link.label}
        </Link>
      ))}

      {/* Language Toggle */}
      <button
        onClick={toggleLang}
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #38bdf840',
          borderRadius: '50px',
          padding: isMobile ? '4px 10px' : '5px 14px',
          color: '#38bdf8',
          fontSize: isMobile ? '11px' : '13px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s',
          letterSpacing: '0.05em',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#38bdf815'
          e.currentTarget.style.borderColor = '#38bdf8'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.borderColor = '#38bdf840'
        }}
      >
        {lang === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
      </button>
    </nav>
  )
}

export default Navbar
