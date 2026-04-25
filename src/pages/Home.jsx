import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import logoRT from '../assets/RT.png'
import { useLang } from '../context/LanguageContext'

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { t, lang } = useLang()
  const h = t.home

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '100px 24px 60px' : '0 40px',
      paddingTop: isMobile ? '100px' : '80px',
    }}>
      <div style={{
        maxWidth: '900px',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '40px' : '60px',
      }}>

        {/* Logo mobile */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logoRT}
              alt="Riko Tronic Logo"
              style={{ width: '160px', filter: 'drop-shadow(0 0 20px #000000)' }}
            />
          </motion.div>
        )}

        {/* Kiri - teks */}
        <div style={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
          width: '100%',
        }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              border: '1px solid #38bdf8',
              borderRadius: '50px',
              padding: '6px 20px',
              color: '#38bdf8',
              fontSize: '14px',
              marginBottom: '24px',
            }}
          >
            {h.badge}
          </motion.div>

          {/* Nama */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: isMobile ? '40px' : '56px', lineHeight: 1.2, marginBottom: '16px' }}
          >
            {h.greeting}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Riko Tronic
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ fontSize: '17px', color: '#94a3b8', marginBottom: '40px', lineHeight: 1.7 }}
          >
            {h.subtitle}{' '}
            <span style={{ color: '#818cf8' }}>{h.web3}</span>{' '}
            {lang === 'id' ? 'dan' : 'and'}{' '}
            <span style={{ color: '#38bdf8' }}>{h.blockchain}</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              marginBottom: '40px',
              justifyContent: isMobile ? 'center' : 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <motion.a href="/projects"
              whileHover={{ backgroundColor: '#0ea5e9', boxShadow: '0 0 25px #38bdf840', scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: '#38bdf8',
                color: '#0a0f1e',
                padding: '14px 32px',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {h.btnProjects}
            </motion.a>

            <motion.a href="/about"
              whileHover={{ backgroundColor: '#38bdf815', boxShadow: '0 0 20px #38bdf830', scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                border: '1px solid #38bdf8',
                color: '#38bdf8',
                padding: '14px 32px',
                borderRadius: '50px',
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {h.btnAbout}
            </motion.a>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            {h.tags.map(tag => (
              <span key={tag} style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '14px',
                color: '#94a3b8',
              }}>
                {tag}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Kanan - Logo desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ flexShrink: 0 }}
          >
            <img
              src={logoRT}
              alt="Riko Tronic Logo"
              style={{ width: '280px', filter: 'drop-shadow(0 0 20px #000000)' }}
            />
          </motion.div>
        )}

      </div>
    </div>
  )
}

export default Home
