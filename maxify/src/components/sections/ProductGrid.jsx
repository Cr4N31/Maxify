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

const WHATSAPP_NUMBER = 'your-number-here'

function formatNaira(amount) {
    return `₦${amount.toLocaleString()}`
}

function buildEnquiryLink(product) {
    const message = `Hi, I'd like to make an enquiry on ${product.name} for ${formatNaira(product.price)}.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function ProductGrid() {
    return (
        <section className='bg-white py-20 px-6'>
            <div className='max-w-5xl mx-auto flex flex-col items-center gap-12'>

                {/* Header */}
                <div className='text-center flex flex-col gap-2'>
                    <span className='text-[#FF0050] text-xs font-semibold tracking-widest uppercase'>
                        Today's Drops
                    </span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-[#00004E] leading-tight'>
                        Tap Any Product to Enquire
                    </h2>
                    <p className='text-gray-500 text-sm mt-1'>
                        Sends a pre-filled message straight to our WhatsApp community.
                    </p>
                </div>

                {/* Masonry grid */}
                <div className='w-full columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4'>
                    {products.map((p, i) => {
                        // vary height per item to create the masonry effect
                        const heightClass = ['h-56', 'h-72', 'h-64', 'h-80'][i % 4]

                        return (
                            <a
                                key={p.id}
                                href={buildEnquiryLink(p)}
                                target='_blank'
                                rel='noreferrer'
                                className='group relative block w-full break-inside-avoid rounded-xl overflow-hidden bg-gray-200'
                            >
                                {/* Image placeholder */}
                                <div className={`relative w-full ${heightClass} bg-gray-200 flex items-center justify-center`}>
                                    {p.tag && (
                                        <span className='absolute top-2 left-2 z-10 bg-[#FF0050] text-white text-[10px] font-bold px-2 py-0.5 rounded-full'>
                                            {p.tag}
                                        </span>
                                    )}
                                    <span className='text-gray-400 text-xs'>image</span>
                                </div>

                                {/* Hover overlay with details */}
                                <div className='absolute inset-0 bg-[#00004E]/0 group-hover:bg-[#00004E]/80 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100'>
                                    <span className='text-white text-sm font-semibold leading-snug line-clamp-2'>
                                        {p.name}
                                    </span>
                                    <span className='text-[#FF0050] text-base font-bold mt-1'>
                                        {formatNaira(p.price)}
                                    </span>
                                    <span className='text-white/60 text-[10px] mt-1'>
                                        Tap to enquire →
                                    </span>
                                </div>
                            </a>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default ProductGrid