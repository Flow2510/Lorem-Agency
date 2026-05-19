import { motion } from 'motion/react';
import './intro.scss';

export default function Intro({ features, text, text2, title }) {
    const splitText = text.split(" ")
    const splitText2 = text2.split(" ")

    return(
        <section className='intro'>
            <div className='intro__wrapper'>
                <div className='intro__content'>
                    <h2 className='intro__content-title'> 
                        {title}
                    </h2>
                    <div className='intro__content-wrapper'>
                        <p className='intro__content-text'>
                            {splitText.map((word, index) => (
                                <span
                                    style={{ overflow: 'hidden', display: "inline-block", marginRight: "0.3rem"}}
                                    key={word + index}
                                >
                                    <motion.span
                                        style={{ display: "inline-block" }}
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: "0%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: (index / 50) }}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </p>
                        <p className='intro__content-text'>
                            {splitText2.map((word, index) => (
                                <span
                                    style={{ overflow: 'hidden', display: "inline-block", marginRight: "0.3rem"}}
                                    key={word + index}
                                >
                                    <motion.span
                                        style={{ display: "inline-block" }}
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: "0%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.8 + (index / 50) }}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                {features &&
                    <div className='intro__gallery'>
                        {features.slice(0, 3).map((item, index) => (
                            <motion.div 
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ duration: 0.5, delay: index / 10}}
                                viewport={{ once: true }}
                                className='intro__item'
                                key={item.name + index}
                            >
                                <img 
                                    className='intro__item-image'
                                    src={item.image} 
                                    alt={item.alt} 
                                />
                            </motion.div>
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}