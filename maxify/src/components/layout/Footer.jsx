import footer_img from '../../assets/images/max2.png'
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className='bg-black border-t border-white/10 px-6 py-12'>
            <div className='max-w-2xl mx-auto flex flex-col items-center gap-8'>

                {/* Brand */}
                <div className='flex flex-col items-center gap-2 text-center'>
                    {/* Logo */}
                    <img src={footer_img} className='w-28' alt='nav-img'/>
                    <p className='text-white/40 text-xs leading-relaxed max-w-xs'>
                        Nigeria's smartest shopping community. Daily drops, fast delivery, zero stress.
                    </p>
                </div>

                {/* Links */}
                <ul className='flex items-center gap-6 flex-wrap justify-center'>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className='text-white/50 hover:text-white text-sm transition-colors duration-200'
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                <div className='w-full border-t border-white/10' />

                {/* Bottom row */}
                <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-2'>
                    <span className='text-white/30 text-xs'>
                        © {year} Maxify.ng. All rights reserved.
                    </span>
                    <div className='flex items-center gap-4'>
                        <a href='https://instagram.com/maxify.ng' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='w-4 h-4 text-white/30 hover:text-white transition-colors duration-200'/>
                        </a>
                        <a href='https://tiktok.com/@maxify.ng' target='_blank' rel='noopener noreferrer'>
                            <FaTiktok className='w-4 h-4 text-white/30 hover:text-white transition-colors duration-200'/>
                        </a>
                        <a href='https://facebook.com/maxify.ng' target='_blank' rel='noopener noreferrer'>
                            <FaFacebookF className='w-4 h-4 text-white/30 hover:text-white transition-colors duration-200'/>
                        </a>
                    </div>
                    <a
                        href='mailto:maxify.ng@gmail.com'
                        className='text-white/30 hover:text-white/60 text-xs transition-colors duration-200'
                    >
                        maxify.ng@gmail.com
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer