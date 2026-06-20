import { MessageCircle, MailIcon, Clock } from "lucide-react"
function ContactSupport() {
    const icons = {
        chat: <MessageCircle size={24} className="text-orange-500" />,
        email: <MailIcon size={24} className="text-orange-500" />,
        hours: <Clock size={24} className="text-orange-500" />
    }

    const cards = [
        {
            id: 1,
            icon: icons.chat,
            title: 'Chat With Support',
            desc: 'Got an issue with an order? Hit us directly on WhatsApp and an admin will respond promptly.',
            action: { label: 'Open Support Chat', href: 'https://whatsapp.com/channel/0029VbCZTo0FSAswZ4hzNB2E' }
        },
        {
            id: 2,
            icon: icons.email,
            title: 'Send Us an Email',
            desc: 'Prefer email? We respond to all messages within 24 hours on business days.',
            action: { label: 'support@maxify.ng', href: 'mailto:support@maxify.ng' }
        },
        {
            id: 3,
            icon: icons.hours,
            title: 'We\'re Active',
            desc: 'Outside these hours? Drop a message — we\'ll get back to you first thing.',
            hours: 'Monday – Saturday · 8:00 AM – 6:00 PM (WAT)'
        }
    ]

    return (
        <section className='bg-black py-20 px-6' data-aos="fade-up">
            <div className='max-w-2xl mx-auto flex flex-col items-center gap-12'>

                {/* Header */}
                <div className='text-center flex flex-col gap-2'>
                    <span className='text-orange-500 text-xs font-semibold tracking-widest uppercase'>
                        Support
                    </span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-white leading-tight'>
                        We're Here to Help
                    </h2>
                    <p className='text-gray-500 text-sm mt-1'>
                        Real humans run Maxify.ng. Reach out and we'll sort it quickly.
                    </p>
                </div>

                {/* Cards */}
                <ul className='flex flex-col gap-4 w-full'>
                    {cards.map((c) => (
                        <li
                            key={c.id}
                            className='rounded-2xl p-6 flex flex-col gap-3'
                        >
                                <div className='text-4xl'>{c.icon}</div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-bold text-orange-500 text-lg'>{c.title}</h3>
                                <p className='text-gray-500 text-sm leading-relaxed'>{c.desc}</p>
                                {c.hours && (
                                    <p className='text-orange-500 font-semibold text-sm mt-1'>{c.hours}</p>
                                )}
                            </div>
                            {c.action && (
                                <a
                                    href={c.action.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='self-start mt-1 inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-700 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200'
                                >
                                    {c.action.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default ContactSupport