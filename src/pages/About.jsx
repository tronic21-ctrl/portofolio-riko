import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { t } = useLang()
  const a = t.about

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const skills = [
    { icon: '⚛️', name: 'React', level: 'Intermediate' },
    { icon: '🌐', name: 'JavaScript', level: 'Intermediate' },
    { icon: '🎨', name: 'HTML & CSS', level: 'Intermediate' },
    { icon: '💠', name: 'Solidity', level: 'Intermediate' },
    { icon: '🔗', name: 'Blockchain', level: 'Intermediate' },
    { icon: '🏦', name: 'DeFi', level: 'Intermediate' },
    { icon: '📊', name: 'Ekonomi', level: 'Advanced' },
    { icon: '📈', name: 'Market Analysis', level: 'Intermediate' },
    { icon: '💻', name: 'Web3', level: 'Intermediate' },
    { icon: '⛑️', name: 'Hardhat', level: 'Beginner' },
    { icon: '🌈', name: 'RainbowKit', level: 'Beginner' },
    { icon: '📦', name: 'IPFS', level: 'Beginner' },
    { icon: '⚡', name: 'Vite', level: 'Intermediate' },
    { icon: '🎭', name: 'Framer Motion', level: 'Intermediate' },
  ]

  return (
    <div style={{ minHeight: '100vh', padding: '120px 40px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '20px' }}
        >
          {a.title}
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '60px', maxWidth: '700px' }}
        >
          {a.bio1}{' '}
          <span style={{ color: '#38bdf8' }}>{a.bio2}</span>{' '}
          {a.bio3}{' '}
          <span style={{ color: '#38bdf8' }}>{a.bio4}</span>{' '}
          {a.bio5}{' '}
          <span style={{ color: '#818cf8' }}>{a.bio6}</span>{' '}
          {a.bio7}
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#f1f5f9' }}>
            {a.skillsTitle}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ borderColor: '#38bdf8', scale: 1.03 }}
                transition={{ duration: 0.2 }}
                style={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '28px' }}>{skill.icon}</span>
                <span style={{ color: '#f1f5f9', fontWeight: 'bold', fontSize: '15px' }}>
                  {skill.name}
                </span>
                <span style={{
                  color: skill.level === 'Advanced' ? '#38bdf8' :
                    skill.level === 'Intermediate' ? '#818cf8' : '#94a3b8',
                  fontSize: '13px',
                }}>
                  {a.skillLevels[skill.level]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 style={{ fontSize: '28px', marginBottom: '32px', color: '#f1f5f9' }}>
            {a.journeyTitle}
          </h2>

          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            <div style={{
              position: 'absolute',
              left: '6px',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: '#1e293b',
            }} />

            {a.journey.map((item, index) => {
              const color = index % 2 === 0 ? '#38bdf8' : '#818cf8'
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: 'relative', marginBottom: '32px', paddingLeft: '24px' }}
                >
                  <div style={{
                    position: 'absolute',
                    left: '-28px',
                    top: '6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    boxShadow: `0 0 8px ${color}`,
                  }} />
                  <span style={{ color, fontSize: '13px', fontWeight: 'bold' }}>{item.year}</span>
                  <h3 style={{ color: '#f1f5f9', fontSize: '17px', margin: '4px 0' }}>{item.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About
