import { motion } from 'motion/react';
import './textwrapper.scss'

export default function TextWrapper({ feature }){
    const splitText = feature.text.split(" ");

    return(
            <div className='text-wrapper'>
                <div className='text-wrapper__content'>
                    <h2
                        className='text-wrapper__content-title'
                    >
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{ display: "inline-block"}}
                        >
                            {feature.name}
                        </motion.span>
                    </h2>
                    <p
                        className='text-wrapper__content-text'
                    >
                        {splitText.map((word, index) => (
                            <span
                                className='text-wrapper__word-wrapper'
                                key={word + index}
                            >
                                <motion.span
                                    className='text-wrapper__word'
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index / 30 }}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </p>
                    <ul className='text-wrapper__list'>
                        {feature.list.map((item, index) => (
                            <li 
                                className='text-wrapper__list-item'
                                key={item + index}
                            >
                                <motion.span
                                    style={{ display: 'inline-block' }}
                                    initial={{ y: "100%", x: "10%" }}
                                    whileInView={{ y: "0%", x: "0%" }}
                                    viewport={{ once: true}}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {item}
                                </motion.span>
                            </li>
                        ))}
                    </ul>
                </div>  
                <motion.div 
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='text-wrapper__image-wrapper'>
                    <video 
                        className='text-wrapper__image'
                        muted
                        autoPlay
                        loop
                        preload='none'
                        src={feature.video}
                    ></video>
                </motion.div>
            </div>
    )
}