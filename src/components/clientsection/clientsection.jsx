import { motion } from 'motion/react';
import './clientsection.scss';

export default function ClientSection() {
    const brands = [
        {
            image: '/images/brand1.png',
            alt: "description brand1"
        },
        {
            image: '/images/brand3.png',
            alt: "description brand2"
        },
        {
            image: '/images/brand2.png',
            alt: "description brand3"
        },
        {
            image: '/images/brand4.png',
            alt: "description brand4"
        },
        {
            image: '/images/brand5.png',
            alt: "description brand5"
        }
    ]

    return(
        <section className='client-section'>
            <div className='client-section__wrapper'>
                {brands.map((brand, index) => (
                    <motion.div 
                        className='client-section__logo'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index / 10}}
                        key={index + brand.alt}
                    >
                        <img 
                            src={brand.image} 
                            alt="" 
                            className='client-section__logo-image'
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}