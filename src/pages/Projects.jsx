import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import { FaGithub } from 'react-icons/fa6'

import previewTroniclens from '../assets/preview-troniclens.png'
import previewCrypto from '../assets/preview-crypto.png'
import previewPortfolio from '../assets/preview-portfolio.png'
import previewDefi from '../assets/preview-defi.png'

function Projects() {
  const { t } = useLang()
  const p = t.projects

  const projectsMeta = [
    {
      image: previewTroniclens,
      tech: ['The Graph', 'Chainlink', '0G Storage', '0G Compute', 'React', 'Vite', 'Solidity'],
      live: null,
      github: 'https://github.com/tronic21-ctrl/foundry-troniclens',
      status: 'In Progress',
      event: 'ETHOnline 2026',
    },
    {
      image: previewDefi,
      tech: ['React', 'RainbowKit', 'wagmi', 'ethers.js', 'The Graph', 'Dune Analytics', 'IPFS', 'Vite'],
      live: 'https://defi-dashboard-pi.vercel.app/',
      github: 'https://github.com/tronic21-ctrl/defi-dashboard',
      status: 'Live',
    },
    {
      image: previewCrypto,
      tech: ['React', 'JavaScript', 'Fetch API', 'Vite', 'Framer Motion', 'Recharts'],
      live: 'https://crypto-tracker-pi-silk.vercel.app',
      github: 'https://github.com/tronic21-ctrl/crypto-tracker',
      status: 'Live',
    },
    {
      image: previewPortfolio,
      tech: ['React', 'Framer Motion', 'React Router', 'Vite'],
      live: null,
      github: 'https://github.com/tronic21-ctrl/portofolio-riko',
      status: 'Live',
    },
  ]

  const projects = p.items.map((item, i) => ({ ...item, ...projectsMeta[i] }))

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ minHeight: '100vh', padding: '120px 40px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <h1 style={{ fontSize: '42px', marginBottom: '12px', color: 'var(--text-heading)' }}>
            {p.title}
          </h1>
          <p style={{ color: 'var(--text-primary)', fontSize: '17px' }}>
            {p.subtitle}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '24px',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ borderColor: 'var(--blue-primary)', y: -6 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Preview Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    border: '1px solid var(--border)',
                  }}
                />
              )}

              {/* Top row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h2 style={{ color: 'var(--text-heading)', fontSize: '20px' }}>
                    {project.title}
                  </h2>
                  {project.event && (
                    <span style={{
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '50px',
                      backgroundColor: '#78350f20',
                      color: '#f59e0b',
                      border: '1px solid #f59e0b50',
                      width: 'fit-content',
                    }}>
                      🏆 {project.event}
                    </span>
                  )}
                </div>

                <span style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  backgroundColor: project.status === 'Live'
                    ? 'var(--blue-glow)'
                    : project.status === 'In Progress'
                    ? '#78350f20'
                    : '#1e293b',
                  color: project.status === 'Live'
                    ? 'var(--blue-primary)'
                    : project.status === 'In Progress'
                    ? '#f59e0b'
                    : 'var(--text-secondary)',
                  border: `1px solid ${project.status === 'Live'
                    ? 'var(--blue-primary)'
                    : project.status === 'In Progress'
                    ? '#f59e0b'
                    : 'var(--border)'}`,
                }}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p style={{
                color: 'var(--text-primary)',
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '16px'
              }}>
                {project.desc}
              </p>

              {/* Tech tags */}
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '20px'
              }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: 'var(--bg-card2)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '4px 12px',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ color: 'var(--blue-primary)', scale: 1.05 }}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '15px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{ fontSize: '18px' }}>🔗</span>
                    Live Demo
                  </motion.a>
                )}

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ color: 'var(--blue-primary)', scale: 1.05 }}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '15px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <FaGithub size={18} />
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects