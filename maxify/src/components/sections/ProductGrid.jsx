import { Link } from 'react-router-dom'

const products = [
    { id: 1, name: 'Wireless Earbuds Pro', price: 12500, tag: 'Hot' },
    { id: 2, name: 'Smart Watch Series X', price: 18000, tag: 'New' },
    { id: 3, name: 'Portable Bluetooth Speaker', price: 9800, tag: 'Hot' },
    { id: 4, name: 'Phone Ring Light Kit', price: 6200, tag: null },
    { id: 5, name: 'Power Bank 20000mAh', price: 8500, tag: 'New' },
    { id: 6, name: 'Wireless Phone Charger', price: 7400, tag: null },
    { id: 7, name: 'Bluetooth Neckband', price: 8900, tag: 'Hot' },
    { id: 8, name: 'Mini Projector HD', price: 24000, tag: 'New' },
    { id: 9, name: 'Smart Fitness Band', price: 10200, tag: null },
    { id: 10, name: 'USB-C Hub Adapter', price: 9500, tag: null },
]

function formatNaira(amount) {
    return `₦${amount.toLocaleString()}`
}

function ProductGrid() {
    return (
        <section id='drops' className='bg-[#0a0a2e] py-20 px-6'>
            <div className='max-w-5xl mx-auto flex flex-col gap-10'>

                {/* Header — store-style, left aligned, count + filter feel */}
                <div className='flex items-end justify-between flex-wrap gap-4'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-[#FF0050] text-xs font-semibold tracking-widest uppercase'>
                            Today's Drops
                        </span>
                        <h2 className='text-3xl sm:text-4xl font-bold text-white leading-tight'>
                            Live Inventory
                        </h2>
                    </div>
                    <span className='text-white/40 text-sm'>
                        Showing {products.length} of {products.length} drops
                    </span>
                </div>

                {/* Masonry grid */}
                <div className='w-full columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4'>
                    {products.map((p, i) => {
                        const heightClass = ['h-56', 'h-72', 'h-64', 'h-80'][i % 4]

                        return (
                            <Link
                                key={p.id}
                                to={`/product/${p.id}`}
                                className='group relative block w-full break-inside-avoid rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300'
                            >
                                <div className={`relative w-full ${heightClass} bg-white/10 flex items-center justify-center`}>
                                    {p.tag && (
                                        <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${
                                            p.tag === 'Hot' ? 'bg-[#FF0050]' : 'bg-[#0035D4]'
                                        }`}>
                                            {p.tag}
                                        </span>
                                    )}
                                    <span className='text-white/20 text-xs'>image</span>
                                </div>

                                {/* Always-visible price strip — Ogabassey style, not hover-only */}
                                <div className='p-3 flex flex-col gap-0.5 bg-white/5'>
                                    <span className='text-white text-xs font-medium leading-snug line-clamp-1'>
                                        {p.name}
                                    </span>
                                    <span className='text-[#FF0050] text-sm font-bold'>
                                        {formatNaira(p.price)}
                                    </span>
                                </div>

                                {/* Hover overlay — dbrand style detail reveal */}
                                <div className='absolute inset-0 bg-[#00004E]/0 group-hover:bg-[#00004E]/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                                    <span className='text-white text-xs font-semibold tracking-wide border border-white/40 rounded-full px-4 py-1.5'>
                                        View Details
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default ProductGrid