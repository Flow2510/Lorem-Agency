import './clientsection.scss';

export default function ClientSection() {
    const brands = [
        {
            image: '/public/images/brand1.png',
            alt: "description brand1"
        },
        {
            image: '/public/images/brand3.png',
            alt: "description brand2"
        },
        {
            image: '/public/images/brand2.png',
            alt: "description brand3"
        },
        {
            image: '/public/images/brand4.png',
            alt: "description brand4"
        },
        {
            image: '/public/images/brand5.png',
            alt: "description brand5"
        }
    ]

    return(
        <section className='client-section'>
            <div className='client-section__wrapper'>
                {brands.map((brand, index) => (
                    <div 
                        className='client-section__logo'
                        key={index + brand.alt}
                    >
                        <img 
                            src={brand.image} 
                            alt="" 
                            className='client-section__logo-image'
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}