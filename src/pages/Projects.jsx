import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import previewCrypto from '../assets/preview-crypto.png'
import previewPortfolio from '../assets/preview-portfolio.png'
import previewDefi from '../assets/preview-defi.png'

function Projects() {
  const { t } = useLang()
  const p = t.projects

  const projectsMeta = [
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
    {
      image: previewDefi,
      tech: ['React', 'RainbowKit', 'wagmi', 'ethers.js', 'IPFS', 'Vite'],
      live: 'https://defi-dashboard-pi.vercel.app/',
      github: 'https://github.com/tronic21-ctrl/defi-dashboard',
      status: 'Live',
    },
  ]

  const projects = p.items.map((item, i) => ({ ...item, ...projectsMeta[i] }))

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
          <h1 style={{ fontSize: '42px', marginBottom: '12px', color: '#f1f5f9' }}>
            {p.title}
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '17px' }}>
            {p.subtitle}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ borderColor: '#38bdf8', x: 6 }}
              style={{
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '16px',
                padding: '28px',
              }}
            >
              {/* Preview Image */}
              {project.image && (
                <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  border: '1px solid #1e293b',
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
                <h2 style={{ color: '#f1f5f9', fontSize: '20px' }}>{project.title}</h2>
                <span style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  backgroundColor: project.status === 'Live' ? '#38bdf820' : project.status === 'In Progress' ? '#818cf820' : '#1e293b',
                  color: project.status === 'Live' ? '#38bdf8' : project.status === 'In Progress' ? '#818cf8' : '#94a3b8',
                  border: `1px solid ${project.status === 'Live' ? '#38bdf840' : project.status === 'In Progress' ? '#818cf840' : '#334155'}`,
                }}>
                  {project.status}
                </span>
              </div>

              {/* Desc */}
              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                {project.desc}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    fontSize: '13px',
                    color: '#94a3b8',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ color: '#38bdf8' }}
                    style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}
                  >
                    {p.liveDemo}
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ color: '#38bdf8' }}
                    style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}
                  >
                    {p.github}
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
