import { useParams, Link } from 'react-router-dom'
import { products, formatNaira, buildEnquiryMessage } from '../data/products'
import CTAbutton from '../components/ui/CTAbutton'

function ProductDetail() {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))

    if (!product) {
        return (
            <section className='min-h-screen flex flex-col items-center justify-center gap-4 px-6'>
                <p className='text-gray-500'>Product not found.</p>
                <Link to='/' className='text-orange-500 text-sm font-medium'>
                    ← Back to home
                </Link>
            </section>
        )
    }

    return (
        <section className='min-h-screen pt-28 pb-20 px-6 bg-black'>
            <div className='max-w-2xl mx-auto flex flex-col gap-8'>

                <Link to='/#drops' className='text-orange-500 text-sm font-medium w-fit'>
                    ← Back to drops
                </Link>

                {/* Image */}
                <div className='relative w-fit rounded-2xl flex items-center justify-center overflow-hidden'>
                    {product.tag && (
                        <span className={`absolute top-4 left-4 z-10 text-white text-xs font-bold px-3 py-1 rounded-full ${
                            product.tag === 'Hot' ? 'bg-orange-500' : 'bg-orange-700'
                        }`}>
                            {product.tag}
                        </span>
                    )}
                    {product.img ? (
                        <img src={product.img} alt={product.name} className='w-full h-full object-contain' />
                    ) : (
                        <span className='text-gray-400 text-sm'>product image</span>
                    )}
                </div>

                {/* Details */}
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold text-white'>{product.name}</h1>
                    <span className='text-orange-500 text-2xl font-bold'>{formatNaira(product.price)}</span>
                    <p className='text-white/60 leading-relaxed'>{product.description}</p>
                </div>

                <CTAButton/>
            </div>
        </section>
    )
}

export default ProductDetail