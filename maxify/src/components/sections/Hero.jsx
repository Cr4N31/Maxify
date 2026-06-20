import { useState } from 'react'
import CTAButton from '../ui/CTAbutton'
import heroVideo from '../../assets/videos/hero-video.mp4'
import heroPoster from '../../assets/images/hero-poster.jpg'

function Hero() {
    const [videoLoaded, setVideoLoaded] = useState(false)

    return (
        <section className='relative min-h-screen flex items-center px-6 py-24 overflow-hidden'>

            {/* Video background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                poster={heroPoster}
                onCanPlay={() => setVideoLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <source src={heroVideo} type='video/mp4' />
            </video>

            {/* Fallback poster image — shown until video loads, also covers low-end devices */}
            <img
                src={heroPoster}
                alt=''
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    videoLoaded ? 'opacity-0' : 'opacity-100'
                }`}
            />

            {/* Dark overlay — keeps text readable over any frame of motion */}
            <div className='absolute inset-0 bg-[#00004E]/80' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#00004E] via-transparent to-[#00004E]/40' />

            {/* Content */}
            <div className='relative z-10 max-w-md mx-auto w-full flex flex-col items-center gap-4 text-center'>
                <span className='text-[#FF0050] text-xs font-bold tracking-[0.2em] uppercase'>
                    Daily Drops · No Stress
                </span>

                <h1 className='font-bold text-4xl sm:text-5xl text-white leading-[1.05]'>
                    Maximize Your Shopping
                </h1>

                <p className='text-base text-white/70 leading-relaxed'>
                    Join the smartest retail community in Nigeria. Hot drops, real prices, zero stress.
                </p>

                <CTAButton />

                <span className='text-white/40 text-xs tracking-widest uppercase mt-1'>
                    Free to join &nbsp;·&nbsp; Daily drops &nbsp;·&nbsp; Nationwide delivery
                </span>
            </div>

        </section>
    )
}

export default Hero