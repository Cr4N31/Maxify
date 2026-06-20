import { useRef, useEffect } from 'react'

const baseDrops = [
    { id: 1, name: 'Wireless Earbuds Pro', price: '₦12,500', tag: 'Hot' },
    { id: 2, name: 'Smart Watch Series X', price: '₦18,000', tag: 'New' },
    { id: 3, name: 'Portable Bluetooth Speaker', price: '₦9,800', tag: 'Hot' },
    { id: 4, name: 'Phone Ring Light Kit', price: '₦6,200', tag: null },
    { id: 5, name: 'Power Bank 20000mAh', price: '₦8,500', tag: 'New' },
    { id: 6, name: 'Wireless Phone Charger', price: '₦7,400', tag: null },
    { id: 7, name: 'Bluetooth Neckband', price: '₦8,900', tag: 'Hot' },
    { id: 8, name: 'Mini Projector HD', price: '₦24,000', tag: 'New' },
    { id: 9, name: 'Smart Fitness Band', price: '₦10,200', tag: null },
    { id: 10, name: 'USB-C Hub Adapter', price: '₦9,500', tag: null },
]

// duplicate the list so the scroll loop feels seamless
const drops = [...baseDrops, ...baseDrops]

function FeaturedDrops() {
    const scrollRef = useRef(null)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        let frame

        const tick = () => {
            el.scrollLeft += 0.6 // scroll speed

            // reset seamlessly once we've scrolled past the first set
            if (el.scrollLeft >= el.scrollWidth / 2) {
                el.scrollLeft = 0
            }

            frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <div className='w-full bg-[#00004E] pb-4 py-8'>
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
                {drops.map((d, i) => (
                    <li
                        key={`${d.id}-${i}`}
                        className='flex-shrink-0 w-36 bg-white/5 border border-white/10 rounded-xl overflow-hidden'
                    >
                        <div className='relative w-full aspect-square bg-white/10 flex items-center justify-center'>
                            {d.tag && (
                                <span className='absolute top-2 left-2 bg-[#FF0050] text-white text-[10px] font-bold px-2 py-0.5 rounded-full'>
                                    {d.tag}
                                </span>
                            )}
                            <span className='text-white/20 text-xs'>image</span>
                        </div>
                        <div className='p-3 flex flex-col gap-0.5'>
                            <span className='text-white text-xs font-medium leading-snug line-clamp-2'>
                                {d.name}
                            </span>
                            <span className='text-[#FF0050] text-sm font-bold'>
                                {d.price}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturedDrops