import { motion } from 'motion/react';
import './ctatitle.scss';

export default function CtaTitle({ textLine1, textLine2, textLine3, image, alt}) {
    return(
        <section className='cta-title'>
            <div className='cta-title__wrapper'>
                <h2 className='cta-title__title'>
                    <span className='cta-title__title-line'>
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                        >
                            {textLine1}
                        </motion.span>
                    </span>
                    <span className='cta-title__title-line'>
                        <motion.img 
                            initial={{ width: 0 }}
                            whileInView={{ width: 180 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className='cta-title__image' src={image} alt={alt} 
                        />
                        <span>
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                            >
                                {textLine2}
                            </motion.span>
                        </span>
                    </span>
                    <span className='cta-title__title-line'>
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                        >
                            {textLine3}
                        </motion.span>
                    </span>
                </h2>
            </div>
        </section>
    )
}