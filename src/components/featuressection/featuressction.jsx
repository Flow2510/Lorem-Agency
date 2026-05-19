import './featuressection.scss';
import features from '../../data/features.json'
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LineReveal from '../linereveal/linereveal';
import { NavLink } from 'react-router-dom';

export default function FeaturesSection(){
    const [itemIndex, setItemIndex] = useState(null)

    return(
        <section className='features-section'>
            <div className='features-section__wrapper'>
                <div className='features-section__content'>
                    <motion.h2 
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className='features-section__content-title'
                    >
                        Features
                    </motion.h2>
                </div>
                <nav className='features-section__nav'>
                    {features.map((feature, index) => (
                        <motion.button 
                            onHoverStart={() => setItemIndex(index)}
                            onHoverEnd={() => setItemIndex(null)}
                            key={feature.name + index} 
                            style={{ color: itemIndex === null ? "#202020" : "#20202060"}}
                            className={`features-section__item${itemIndex === index ? " features-section__item--active" : ""}`}
                        >
                            <div className='features-section__item-content'>
                                <LineReveal 
                                    text={feature.name}
                                    delay={index/20}
                                />
                                <p 
                                    className={`features-section__item-subtitle${itemIndex === index ? " features-section__item-subtitle--active" : ""}`}
                                >
                                    {feature.id}
                                </p>
                            </div>
                            <AnimatePresence>
                                <motion.div 
                                    initial={{ height: 0, y: "-50%" }}
                                    animate={{ height: 200, y: "-50%" }}
                                    transition={{ duration: 0.3 }}
                                    key={itemIndex}
                                    className={`features-section__item-wrapper${itemIndex === index ? " features-section__item-wrapper--active" : ""}`}
                                >
                                    <img src={feature.image} alt={feature.alt} />
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    ))}
                </nav>
                <motion.div 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className='features-section__link-wrapper'
                >
                    <NavLink 
                        to={'/services'}
                        className='features-section__link'
                    >
                        <span>See All</span>
                        <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z" fill="currentColor"></path>
                        </svg>
                    </NavLink>
                </motion.div>
            </div>
        </section>
    )
}