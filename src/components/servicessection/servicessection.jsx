import TextWrapper from '../textwrapper/textwrapper'
import './servicessection.scss'

export default function ServicesSection({features}){
    return(
        <section className='services-section'>
            <div className='services-section__content'>
                <h2 className='services-section__content-title'>Our Services</h2>
            </div>
            <div className='services-section__gallery'>
                {features.map((feature, index) => (
                    <div
                        className='services-section__gallery-item'
                        key={feature.name + index}
                    >
                        <TextWrapper                            
                            feature={feature}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}