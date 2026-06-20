import wireless_earbuds from '../assets/product-img/wirelessearbuds.jpg'
import smart_watch from '../assets/product-img/smartwatch.jpg'
import mini_projector from '../assets/product-img/miniprojector.jpg'

export const products = [
    {
        id: 1,
        name: 'Wireless Earbuds Pro',
        price: 12500,
        tag: 'Hot',
        img: wireless_earbuds,
        description: 'Crisp sound, all-day battery, and a snug fit. One of our most enquired drops every week.',
    },
    {
        id: 2,
        name: 'Smart Watch Series X',
        price: 18000,
        tag: 'New',
        img: smart_watch,
        description: 'Track steps, heart rate, and notifications, all from your wrist. Pairs with both Android and iOS.',
    },
    {
        id: 3,
        name: 'Portable Bluetooth Speaker',
        price: 9800,
        tag: 'Hot',
        img: null,
        description: 'Loud, compact, and built for all-day play. Perfect for outdoor hangouts or the gym.',
    },
    {
        id: 4,
        name: 'Phone Ring Light Kit',
        price: 6200,
        tag: null,
        img: null,
        description: 'Adjustable brightness ring light with phone clip — built for content creators and live calls.',
    },
    {
        id: 5,
        name: 'Power Bank 20000mAh',
        price: 8500,
        tag: 'New',
        img: null,
        description: 'High-capacity power bank that charges your phone multiple times over before needing a recharge.',
    },
    {
        id: 6,
        name: 'Wireless Phone Charger',
        price: 7400,
        tag: null,
        img: null,
        description: 'Drop your phone, it charges. No cables, no fuss, fast-charging compatible.',
    },
    {
        id: 7,
        name: 'Bluetooth Neckband',
        price: 8900,
        tag: 'Hot',
        img: null,
        description: 'Lightweight neckband earphones with magnetic buds and strong battery life.',
    },
    {
        id: 8,
        name: 'Mini Projector HD',
        price: 24000,
        tag: 'New',
        img: mini_projector,
        description: 'Turn any wall into a screen. Compact, sharp, and ready to ship straight to your door.',
    },
    {
        id: 9,
        name: 'Smart Fitness Band',
        price: 10200,
        tag: null,
        img: null,
        description: 'Tracks steps, sleep, and workouts in a slim, lightweight band.',
    },
    {
        id: 10,
        name: 'USB-C Hub Adapter',
        price: 9500,
        tag: null,
        img: null,
        description: 'Expand one USB-C port into HDMI, USB-A, and SD card slots — built for laptops on the go.',
    },
]

export const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/your-group-link-here'

export function formatNaira(amount) {
    return `₦${amount.toLocaleString()}`
}

export function buildEnquiryMessage(product) {
    return `Hi, I'd like to make an enquiry on ${product.name} for ${formatNaira(product.price)}.`
}