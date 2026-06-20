import { useState, useEffect } from 'react'
import { CheckIcon, VanIcon, Flame } from 'lucide-react'

const icons = {
    check: <CheckIcon className='w-4 h-4 text-white' />,
    van: <VanIcon className='w-4 h-4 text-white' />,
    flame: <Flame className='w-4 h-4 text-white' />,
}

const messages = [
    { icon: icons.flame, text: 'New drops every single day' },
    { icon: icons.van, text: 'Nationwide delivery, anywhere in Nigeria' },
    { icon: icons.check, text: '2,400+ orders delivered and counting' },
]

function UtilityBanner() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='w-full absolute mt-12 bg-[#FF0050] text-white text-xs font-semibold text-center py-2 px-4 overflow-hidden'>
            <span key={index} className='flex justify-center gap-2 animate-fade-in'>
                {messages[index].icon} {messages[index].text}
            </span>
        </div>
    )
}

export default UtilityBanner