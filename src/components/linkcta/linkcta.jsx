import { motion } from 'motion/react';
import './linkcta.scss';

export default function LinkCta(){
    return(
        <section className='link-cta'>
            <div className='link-cta__wrapper'>
                <div className='link-cta__title-wrapper'>
                    <h2 className='link-cta__title'>
                        <span className='link-cta__title-line1' style={{overflow: "hidden", display: 'inline-block'}}>
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: "0%" }}
                                transition={{ duration: 0.4 }}
                                viewport={{once: true}}
                                style={{display: 'inline-block'}}
                            >Start Your</motion.span>
                        </span>
                        <motion.div className='link-cta__title-line2'>                            
                            <motion.img 
                                initial={{ width: 0 }}
                                whileInView={{ width: 140 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{once: true}}
                                src="/public/images/work.jpg" 
                                alt="" 
                            />
                            <span style={{overflow: "hidden"}}>
                                <motion.span
                                    style={{display: 'inline-block'}}
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{once: true}}
                                >Project</motion.span>
                            </span>
                        </motion.div>
                    </h2>
                </div>
                <div className='link-cta__content'>
                    <div className='link-cta__text-wrapper'>
                        <p className='link-cta__text'>
                            Let’s build your next digital presence together. Bring your ideas to life with modern and tailored solutions.
                        </p>
                    </div>
                    <div className='link-cta__button-wrapper'>
                        <motion.button 
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className='link-cta__button'
                        >
                            <span>Contact Us</span>
                            <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z" fill="currentColor"></path>
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}