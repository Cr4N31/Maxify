import { useState, useEffect } from "react"
import CTAButton from "../ui/CTAbutton"

const reviews = [
    { id: 1, name: 'Chioma A.', location: 'Lagos', text: "Ordered a Bluetooth speaker on Monday, it landed at my door by Wednesday. The product was exactly as shown. These guys are legit 🙌", initial: 'C' },
    { id: 2, name: 'Emeka T.', location: 'Abuja', text: "I was skeptical at first but the community is very active and the admins respond fast. Already made 3 orders and no issues whatsoever.", initial: 'E' },
    { id: 3, name: 'Blessing O.', location: 'Port Harcourt', text: "The prices are mad cheap compared to regular stores. Delivery to PH was smooth. Will definitely keep buying 🔥", initial: 'B' },
    { id: 4, name: 'Tunde M.', location: 'Ibadan', text: "Got my earbuds in 2 days. Sound quality is crazy for that price. The admin even followed up to make sure I received it. 10/10 service 👏", initial: 'T' },
    { id: 5, name: 'Amaka N.', location: 'Enugu', text: "Been in the group for 2 months now. Every drop is legit and prices are always better than what I see on Jumia. No dulling here 😂✅", initial: 'A' },
    { id: 6, name: 'Seun K.', location: 'Lagos', text: "My phone case arrived well packaged and exactly as described. Fast delivery to Lekki. Already told my friends to join the group!", initial: 'S' },
    { id: 7, name: 'Fatima I.', location: 'Kano', text: "I ordered a smartwatch and it came with everything intact. Admin was patient with my questions. Very trustworthy community 🤝", initial: 'F' },
    { id: 8, name: 'Chukwudi B.', location: 'Onitsha', text: "Bro I was doubting but my guy vouched and I ordered. Came in 3 days to Onitsha. The product is 🔥. I'm a loyal customer now.", initial: 'C' },
    { id: 9, name: 'Yetunde A.', location: 'Abeokuta', text: "Ordered a kitchen gadget I saw dropped in the group. Arrived well packaged, works perfectly. Maxify.ng no dey disappoint 💯", initial: 'Y' },
    { id: 10, name: 'Rotimi F.', location: 'Benin City', text: "Third order and counting. They always deliver on time and the products match what was posted. This community is the real deal 🙏", initial: 'R' },
]

function SocialProof() {
    const [current, setCurrent] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % reviews.length)
                setVisible(true)
            }, 400)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    const r = reviews[current]

    return (
        <section className='bg-[#00004E] py-20 px-6' id="reviews">
            <div className='max-w-2xl mx-auto flex flex-col items-center gap-12'>

                {/* Header */}
                <div className='text-center flex flex-col gap-2'>
                    <span className='text-[#FF0050] text-xs font-semibold tracking-widest uppercase'>
                        Real People. Real Orders.
                    </span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-white leading-tight'>
                        See What Our Community <br className='hidden sm:block' /> Is Saying
                    </h2>
                    <p className='text-white/50 text-sm mt-1'>
                        Thousands of shoppers across Nigeria trust Maxify.ng for their daily finds.
                    </p>
                </div>

                {/* Carousel Card */}
                <div
                    className='w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4'
                    style={{
                        opacity: visible ? 1 : 0,
                        transition: 'opacity 0.4s ease-in-out'
                    }}
                >
                    <div className='flex items-center justify-between'>
                        <div className='text-[#FF0050] text-sm'>★★★★★</div>
                        <span className='text-white/20 text-xs'>{current + 1} / {reviews.length}</span>
                    </div>

                    <p className='text-white/80 text-sm leading-relaxed'>
                        "{r.text}"
                    </p>

                    <div className='flex items-center gap-3'>
                        <div className='w-9 h-9 rounded-full bg-[#0035D4] flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                            {r.initial}
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white font-semibold text-sm'>{r.name}</span>
                            <span className='text-white/40 text-xs'>{r.location}</span>
                        </div>
                    </div>
                </div>

                {/* Dot indicators */}
                <div className='flex gap-2 -mt-6 flex-wrap justify-center'>
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setVisible(false)
                                setTimeout(() => {
                                    setCurrent(i)
                                    setVisible(true)
                                }, 400)
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === current ? 'w-6 bg-[#FF0050]' : 'w-2 bg-white/20'
                            }`}
                        />
                    ))}
                </div>

                <CTAButton />
            </div>
        </section>
    )
}

export default SocialProof