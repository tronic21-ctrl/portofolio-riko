import { motion } from 'framer-motion'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function SocialLinks() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) return null  // sembunyiin di mobile

    const socials = [
        { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/rikotronic'},
        { icon: <FaTiktok size={20} />, url: 'https://www.tiktok.com/@rikotoatubun2104'},
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
                key={social.label}
                href={social.url}
                target="_blank"
                whileHover={{ scale: 1.2, color: '#38bdf8' }}
                transition={{ duration: 0.2 }}
                style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    writingMode: 'vertical-rl',
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