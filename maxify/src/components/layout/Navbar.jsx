import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import nav_img from '../../assets/images/max2.png'
import { Cat, PhoneIcon } from 'lucide-react'
import CTAbutton from '../ui/CTAbutton'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
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

    // close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    // lock body scroll while menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

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
        { label: 'Drops',   href: '/#drops',  sectionId: null },
        { label: 'About',   href: '/about',   sectionId: null },
        { label: 'Contact', href: '/support', sectionId: null },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 bg-[#00004E] ${
                scrolled ? 'shadow-lg shadow-black/30 border-b border-white/5' : ''
            }`}>

                {/* Logo + divider + links */}
                <div className='flex items-center gap-6'>
                    <NavLink to='/'>
                        <img src={nav_img} className='w-24' alt='Maxify.ng logo' />
                    </NavLink>

                    <span className='hidden md:block w-px h-5 bg-white/15' />

                    <ul className='hidden md:flex items-center gap-7'>
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
                </div>

                {/* Right side */}
                <div className='flex items-center gap-4'>

                    <span className='hidden sm:inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60'>
                        <span className='w-1.5 h-1.5 rounded-full bg-[#FF0050] animate-pulse' />
                        10 drops live
                    </span>
                    <a
                    
                        href='https://wa.me/your-link-here'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Chat on WhatsApp'
                        className='hidden md:inline-flex text-white/60 hover:text-white transition-colors duration-200'
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z'/>
                            <path d='M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.535 5.856L.057 23.215a.75.75 0 0 0 .921.921l5.359-1.478A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 0 1-4.953-1.354l-.355-.213-3.655 1.007 1.007-3.655-.213-.355A9.705 9.705 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z'/>
                        </svg>
                    </a>

                    {/* Hamburger — mobile only */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        className='md:hidden relative w-6 h-5 flex flex-col justify-between'
                    >
                        <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                            menuOpen ? 'rotate-45 translate-y-[9px]' : ''
                        }`} />
                        <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                            menuOpen ? 'opacity-0' : 'opacity-100'
                        }`} />
                        <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                            menuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                        }`} />
                    </button>
                </div>

            </nav>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className='absolute inset-0 bg-black/60'
                />

                {/* Slide-in panel */}
                <div className={`absolute top-0 right-0 h-full w-72 bg-[#00004E] border-l border-white/10 pt-24 px-6 flex flex-col gap-6 transition-transform duration-300 ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <ul className='flex flex-col gap-5'>
                        {links.map((link) => (
                            <li key={link.label}>
                                {link.sectionId ? (
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className='text-white/70 hover:text-white text-base font-medium transition-colors duration-200'
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <NavLink
                                        to={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className='text-white/70 hover:text-white text-base font-medium transition-colors duration-200'
                                    >
                                        {link.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>

                    <span className='inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/60 w-fit'>
                        <span className='w-1.5 h-1.5 rounded-full bg-[#FF0050] animate-pulse' />
                        10 drops live
                    </span>

\                    <CTAbutton/>
                </div>
            </div>
        </>
    )
}

export default Navbar