import wireless_earbuds from '../assets/product-img/wirelessearbuds.jpg'
import smart_watch from '../assets/product-img/smartwatch.jpg'
import mini_projector from '../assets/product-img/miniprojector.jpg'
import power_bank from '../assets/product-img/powerbank.jpg'
import bluetooth from '../assets/product-img/btspeaker.jpg'
import wireless_charger from '../assets/product-img/wireless.webp'
import neckband from '../assets/product-img/neckband.jfif'
import usbC from '../assets/product-img/usbc.jfif'
import smart_fitness from '../assets/product-img/smart.jfif'

export const products = [
    {
        id: 1,
        name: 'Wireless Earbuds Pro',
        price: 200000,
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
        price: 150000,
        tag: 'Hot',
        img: bluetooth,
        description: 'Loud, compact, and built for all-day play. Perfect for outdoor hangouts or the gym.',
    },
    {
        id: 4,
        name: 'Power Bank 20000mAh',
        price: 30000,
        tag: 'New',
        img: power_bank,
        description: 'High-capacity power bank that charges your phone multiple times over before needing a recharge.',
    },
    {
        id: 5,
        name: 'Wireless Phone Charger',
        price: 20000,
        tag: null,
        img: wireless_charger,
        description: 'Drop your phone, it charges. No cables, no fuss, fast-charging compatible.',
    },
    {
        id: 6,
        name: 'Bluetooth Neckband',
        price: 15000,
        tag: 'Hot',
        img: neckband,
        description: 'Lightweight neckband earphones with magnetic buds and strong battery life.',
    },
    {
        id: 7,
        name: 'Mini Projector HD',
        price: 24000,
        tag: 'New',
        img: mini_projector,
        description: 'Turn any wall into a screen. Compact, sharp, and ready to ship straight to your door.',
    },
    {
        id: 8,
        name: 'Smart Fitness Band',
        price: 10200,
        tag: null,
        img: smart_fitness,
        description: 'Tracks steps, sleep, and workouts in a slim, lightweight band.',
    },
    {
        id: 9,
        name: 'USB-C Hub Adapter',
        price: 10000,
        tag: null,
        img: usbC,
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