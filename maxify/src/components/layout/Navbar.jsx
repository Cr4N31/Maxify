import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import nav_img from '../../assets/images/max2.png'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sections = ['how-it-works', 'reviews', 'contact']
        const observers = sections.map((id) => {
            const el = document.getElementById(id)
            if (!el) return null
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
                { threshold: 0.4 }
            )
            observer.observe(el)
            return observer
        })
        return () => observers.forEach((obs) => obs?.disconnect())
    }, [location.pathname])

    const linkClass = (href, sectionId) => {
        const isActive = sectionId ? activeSection === sectionId : location.pathname === href
        return `relative text-sm font-medium transition-colors duration-200 pb-0.5
            after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:transition-all after:duration-300
            ${isActive
                ? 'text-white after:w-full after:bg-[#FF0050]'
                : 'text-white/50 hover:text-white/80 after:w-0 after:bg-[#FF0050]'
            }`
    }

    const links = [
        { label: 'Home',    href: '/',        sectionId: null },
        { label: 'About', href: '/about', sectionId: null },
        { label: 'Contact', href: '/support', sectionId: null },
    ]

    return (
        <nav className='fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
            bg-[#00004E] shadow-lg shadow-black/20'
            >

            <NavLink to='/'>
                <img src={nav_img} className='w-28' alt='Maxify.ng logo' />
            </NavLink>

            <ul className='flex items-center gap-8'>
                {links.map((link) => (
                    <li key={link.label}>
                        {link.sectionId ? (
                            <a href={link.href} className={linkClass(link.href, link.sectionId)}>
                                {link.label}
                            </a>
                        ) : (
                            <NavLink to={link.href} className={() => linkClass(link.href, null)}>
                                {link.label}
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Navbar