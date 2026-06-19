import hero_bg from '../../assets/images/max1.png'
import CTAButton from '../ui/CTAbutton'
function Hero() {
    return (
        <section className='min-h-screen bg-[#00004E] flex flex-col justify-center items-center text-center px-6 py-20' data-aos="fade-up">
            
            <div className='flex flex-col items-center gap-4 max-w-md mx-auto'>
                <img 
                    className='w-md object-contain' 
                    src={hero_bg} 
                    alt="Maxify.ng logo"
                />

                <h1 className='font-bold text-3xl text-white leading-tight'>
                    Maximize Your Shopping
                </h1>

                <p className='text-base sm:text-lg text-white/70 leading-relaxed'>
                    Join the Smartest Retail Community in Nigeria
                </p>

                <CTAButton/>

                <span className='text-white/40 text-xs tracking-widest uppercase mt-1'>
                    Free to join &nbsp;·&nbsp; Daily drops &nbsp;·&nbsp; Nationwide delivery
                </span>
            </div>

        </section>
    )
}

export default Hero