function HowItWorks() {
    const steps = [
        { id: 1, name: 'Join the Community', desc: "Click the link and enter our active WhatsApp group instantly. No sign-up forms, no stress — just tap and you're in."},
        { id: 2, name: 'See Daily Drops', desc: "Browse fresh product drops every day — tech accessories, lifestyle gadgets, fashion picks, and more. Everything is posted in the group feed with prices and pictures."},
        { id: 3, name: 'Order & Relax', desc: "DM any admin to lock in your order. We handle packaging and logistics straight to your doorstep, anywhere in Nigeria."}
    ]

    return (
        <section className='bg-white py-20 px-6' id="how-it-works" data-aos="fade-up">
            <div className='max-w-2xl mx-auto flex flex-col items-center gap-12'>

                {/* Header */}
                <div className='text-center flex flex-col gap-2'>
                    <span className='text-[#FF0050] text-xs font-semibold tracking-widest uppercase'>How It Works</span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-[#0035D4] tracking-wide leading-tight'>
                        From Discovery to Doorstep <br className='hidden sm:block' /> in 3 Simple Steps
                    </h2>
                </div>

                {/* Steps */}
                <ul className='grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-8 w-full'>
                    {steps.map((s) => (
                        <li key={s.id} className='flex flex-col justify-center gap-3'>
                            <span className='text-4xl font-bold text-[#FF0050]/30 leading-none'>
                                {String(s.id).padStart(2, '0')}
                            </span>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-bold text-[#00004E] text-lg'>{s.name}</h3>
                                <p className='text-gray-500 text-sm leading-relaxed'>{s.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* CTA */}

            </div>
        </section>
    )
}

export default HowItWorks