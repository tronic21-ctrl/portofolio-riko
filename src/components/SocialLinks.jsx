import { motion } from 'framer-motion'
import { FaInstagram, FaXTwitter, FaGithub } from 'react-icons/fa6'
import { useState, useEffect } from 'react'

function SocialLinks() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) return null

    const socials = [
        { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/rikotronic', label: 'Instagram' },
        { icon: <FaXTwitter size={20} />, url: 'https://x.com/rikotronic', label: 'Twitter' },
        { icon: <FaGithub size={20} />, url: 'https://github.com/tronic21-ctrl', label: 'GitHub' },
    ]

    return (
        <div style={{
            position: 'fixed',
            left: '24px',
            top: '45%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 50,
        }}>
            {socials.map(social =>(
                <motion.a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                whileHover={{ scale: 1.2, color: '#38bdf8' }}
                transition={{ duration: 0.2 }}
                style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                    {social.icon}
                </motion.a>
            ))}

            {/* Garis Bawah */}
            <div style={{
                width: '1px',
                height: '60px',
                backgroundColor: '#38bdf840',
                margin: '0 auto',
            }} />
        </div>
    )
}

export default SocialLinks