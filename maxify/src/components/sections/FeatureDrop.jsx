import { useRef, useEffect } from 'react'
import { products, formatNaira } from '../../data/products'

// duplicate the list so the scroll loop feels seamless
const drops = [...products, ...products]

function FeaturedDrops() {
    const scrollRef = useRef(null)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        let frame

        const tick = () => {
            el.scrollLeft += 0.6 // scroll speed

            if (el.scrollLeft >= el.scrollWidth / 2) {
                el.scrollLeft = 0
            }

            frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <div className='w-full bg-black pb-4 py-8'>
            <div className='flex items-center justify-between px-6 max-w-2xl mx-auto mb-4'>
                <span className='text-white/40 text-xs font-semibold tracking-widest uppercase'>
                    Today's Drops
                </span>
                <span className='text-white/30 text-xs'>Live</span>
            </div>

            <ul
                ref={scrollRef}
                className='flex gap-4 overflow-x-hidden px-6 pb-2 scrollbar-hide'
            >
                {drops.map((p, i) => (
                    <li
                        key={`${p.id}-${i}`}
                        className='flex-shrink-0 w-36 bg-white/5 border border-white/10 rounded-xl overflow-hidden'
                    >
                        <div className='relative w-full aspect-square bg-white/10 flex items-center justify-center'>
                            {p.tag && (
                                <span className='absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full'>
                                    {p.tag}
                                </span>
                            )}
                            <img src={p.img} alt={p.name} className='w-full h-full object-cover' />
                        </div>
                        <div className='p-3 flex flex-col gap-0.5'>
                            <span className='text-white text-xs font-medium leading-snug line-clamp-2'>
                                {p.name}
                            </span>
                            <span className='text-orange-500 text-sm font-bold'>
                                {formatNaira(p.price)}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturedDrops