import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation()

    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
    ]


return (
    <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#0f172a99',
        backdropFilter: 'blur(12px)',
        border: '1px solid #38bdf820',
        borderRadius: '50px',
        padding: '12px 32px',
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        zIndex: 100,
    }}>
        <span style={{color: '#38bdf8', fontWeight: 'bold', fontSize: '18px'}}>
            Riko
        </span>
        {links.map(link => (
            <Link
            key={link.path}
            to={link.path}
            style={{
                color: location.pathname === link.path ? '#38bdf8' : '#94a3b8',
                fontWeight: location.pathname === link.path ? 'bold' : 'normal',
                fontSize: '15px',
                transition: 'color 0.3s'            
            }}
            >
                {link.label}
            </Link>
        ))}
    </nav>
)}

export default Navbar