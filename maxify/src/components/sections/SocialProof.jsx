const stats = [
    { id: 1, value: '2,400+', label: 'Orders Delivered' },
    { id: 2, value: '4.9★', label: 'Average Rating' },
    { id: 3, value: '36', label: 'States Covered' },
]

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
    return (
        <section className='bg-black py-20 px-6' id="reviews" data-aos="fade-up">
            <div className='max-w-5xl mx-auto flex flex-col gap-10'>

                {/* Header */}
                <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-orange-500 text-xs font-semibold tracking-widest uppercase'>
                            Real People. Real Orders.
                        </span>
                        <h2 className='text-3xl sm:text-4xl font-bold text-white leading-tight'>
                            See What Our Community Is Saying
                        </h2>
                    </div>

                    {/* Stat strip — now sits beside the header, store-data style */}
                    <ul className='flex items-center gap-6 sm:gap-8'>
                        {stats.map((s) => (
                            <li key={s.id} className='flex flex-col gap-0.5'>
                                <span className='text-orange-500 font-bold text-xl'>{s.value}</span>
                                <span className='text-gray-400 text-[10px] tracking-wide uppercase'>{s.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Horizontal scroll strip — dbrand style */}
                <ul className='flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 custom-scrollbar -mx-6 px-6'>
                    {reviews.map((r) => (
                        <li
                            key={r.id}
                            className='snap-start flex-shrink-0 w-72 bg-black/50 backdrop-blur-xl  rounded-2xl p-5 flex flex-col gap-3'
                        >
                            <div className='text-orange-500 text-sm'>★★★★★</div>

                            <p className='text-white/80 text-sm leading-relaxed line-clamp-4'>
                                "{r.text}"
                            </p>

                            <div className='flex items-center gap-3 mt-auto pt-2'>
                                <div className='w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                                    {r.initial}
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white font-semibold text-sm'>{r.name}</span>
                                    <span className='text-white/60 text-xs'>{r.location}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <span className='text-gray-400 text-xs text-center'>
                    Swipe to see more reviews →
                </span>

            </div>
        </section>
    )
}

export default SocialProof