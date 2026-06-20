import { useState, useEffect } from 'react'
import { PhoneIcon } from 'lucide-react'
import wireless_earbuds from '../../assets/product-img/wirelessearbuds.webp'
import smart_watch from '../../assets/product-img/smartwatch.webp'
import mini_projector from '../../assets/product-img/miniprojector.webp'
import { formatNaira, WHATSAPP_GROUP_LINK, buildEnquiryMessage } from '../../data/products'


const featuredProducts = [
    {
        id: 1,
        tag: 'Hot',
        img: wireless_earbuds,
        name: 'Wireless Earbuds Pro',
        price: 12500,
        blurb: 'Crisp sound, all-day battery — our most enquired drop this week.',
    },
    {
        id: 2,
        tag: 'New',
        img: smart_watch,
        name: 'Smart Watch Series X',
        price: 18000,
        blurb: 'Track steps, heart rate, and notifications, all from your wrist.',
    },
    {
        id: 3,
        tag: 'Hot',
        img: mini_projector,
        name: 'Mini Projector HD',
        price: 24000,
        blurb: 'Turn any wall into a screen. Compact, sharp, and ready to ship.',
    },
]


function handleEnquire() {
    const message = buildEnquiryMessage(product)
    navigator.clipboard.writeText(message).catch(() => {})
    window.open(WHATSAPP_GROUP_LINK, '_blank', 'noopener,noreferrer')
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
}

function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % featuredProducts.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const product = featuredProducts[current]

    return (
        <section className='relative min-h-[85vh] flex items-center px-6 pt-28 pb-12 bg-black overflow-hidden'>

            <div className='relative z-10 max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center'>

                {/* Image side — white card, swaps per slide */}
                <div key={product.id} className='order-1 rounded-2xl flex items-center justify-center relative animate-fade-in'>
                    {product.tag && (
                        <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full ${
                            product.tag === 'Hot' ? 'bg-orange-400' : 'bg-orange-700'
                        }`}>
                            {product.tag}
                        </span>
                    )}
                    <img src={product.img} alt={product.name} className='w-full aspect-video object-cover' />
                </div>

                {/* Copy side — swaps per slide */}
                <div key={`copy-${product.id}`} className='order-2 flex flex-col items-start gap-4 text-left animate-fade-in'>
                    <span className='text-orange-400 text-xs font-bold tracking-[0.2em] uppercase'>
                        Today's Featured Drop
                    </span>

                    <h1 className='font-bold text-3xl sm:text-4xl text-white leading-[1.1]'>
                        {product.name}
                    </h1>

                    <span className='text-white text-2xl font-bold'>
                        {formatNaira(product.price)}
                    </span>

                    <p className='text-white/60 text-sm leading-relaxed max-w-xs'>
                        {product.blurb}
                    </p>

                    <button
                        onClick={handleEnquire}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 mt-1'
                    >
                        <PhoneIcon className='w-4 h-4' />
                        Enquire on This Drop
                    </button>

                    <span className='text-white/30 text-xs tracking-widest uppercase mt-2'>
                        Free to join &nbsp;·&nbsp; Daily drops &nbsp;·&nbsp; Nationwide delivery
                    </span>
                </div>

            </div>

            {/* Dot indicators */}
            <div className='absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2'>
                {featuredProducts.map((p, i) => (
                    <button
                        key={p.id}
                        onClick={() => setCurrent(i)}
                        aria-label={`View ${p.name}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === current ? 'w-6 bg-orange-500' : 'w-2 bg-white/30'
                        }`}
                    />
                ))}
            </div>

            {/* Store-strip teaser */}
            <a
                href='#drops'
                className='absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-2 py-3 bg-white/5 backdrop-blur-sm border-t border-white/10 text-white/50 hover:text-white text-xs font-medium tracking-wide transition-colors duration-200'
            >
                <span className='w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse' />
                10 products live right now — view all drops ↓
            </a>

        </section>
    )
}

export default Hero