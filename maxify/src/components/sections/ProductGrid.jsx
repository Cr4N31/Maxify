import { Link } from 'react-router-dom'
import { products, formatNaira } from '../../data/products'

function ProductGrid() {
    return (
        <section id='drops' className='bg-black py-20 px-6'>
            <div className='max-w-5xl mx-auto flex flex-col gap-10'>

                <div className='flex items-end justify-between flex-wrap gap-4'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-orange-500 text-xs font-semibold tracking-widest uppercase'>
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

                <div className='w-full columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4'>
                    {products.map((p, i) => {
                        const heightClass = ['h-56', 'h-72', 'h-64', 'h-80'][i % 4]

                        return (
                            <Link
                                key={p.id}
                                to={`/product/${p.id}`}
                                className='group relative block w-full break-inside-avoid rounded-xl overflow-hidden bg-white/5  transition-colors duration-300'
                            >
                                <div className={`relative w-full ${heightClass} flex items-center justify-center`}>
                                    {p.tag && (
                                        <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${
                                            p.tag === 'Hot' ? 'bg-orange-500' : 'bg-orange-700'
                                        }`}>
                                            {p.tag}
                                        </span>
                                    )}
                                    {p.img ? (
                                        <img src={p.img} alt={p.name} className='w-full h-full object-cover' />
                                    ) : (
                                        <span className='text-gray-300 text-sm'>product image</span>
                                    )}
                                </div>

                                <div className='p-3 flex flex-col gap-0.5 bg-white/5'>
                                    <span className='text-white text-xs font-medium leading-snug line-clamp-1'>
                                        {p.name}
                                    </span>
                                    <span className='text-orange-500 text-sm font-bold'>
                                        {formatNaira(p.price)}
                                    </span>
                                </div>

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