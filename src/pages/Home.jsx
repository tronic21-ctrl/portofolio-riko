import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import logoRT from '../assets/RT.png'

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

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

        {/* Logo - mobile: atas, desktop: kanan */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={logoRT} 
              alt="Riko Tronic Logo"
              style={{ 
                width: '160px',
                filter: 'drop-shadow(0 0 20px #000000)'
              }}
            />
          </motion.div>
        )}

        {/* KIRI - semua teks */}
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
              marginBottom: '24px'
            }}
          >
            Economics x Web3
          </motion.div>

          {/* Nama */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              fontSize: isMobile ? '40px' : '56px', 
              lineHeight: 1.2, 
              marginBottom: '16px' 
            }}
          >
            hi, i'm{' '}
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
            style={{
              fontSize: '17px',
              color: '#94a3b8',
              marginBottom: '40px',
              lineHeight: 1.7,
            }}
          >
            Undergraduate in Economics | Currently diving deep into {' '}
            <span style={{ color: '#818cf8' }}>Web3</span> and{' '}
            <span style={{ color: '#38bdf8' }}>Blockchain Technology</span>.
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
              Lihat Projects →
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
              Tentang Saya
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
            {['Economics', 'Web3', 'DeFi', 'React', 'Blockchain'].map(tag => (
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

        {/* KANAN - Logo (desktop only) */}
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
              style={{ 
                width: '280px',
                filter: 'drop-shadow(0 0 20px #000000)'
              }}
            />
          </motion.div>
        )}

      </div>
    </div>
  )
}

export default Home