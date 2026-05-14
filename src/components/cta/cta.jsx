import { motion } from 'motion/react';
import './cta.scss';
import LineReveal from '../linereveal/linereveal';

export default function Cta() {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <motion.h2 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className='cta__content-title'
                >
                    let’s create your next digital experience together
                </motion.h2>

                <p className='cta__content-text'>
                    <LineReveal 
                        text={"Modern design."}
                        delay={0}
                    />
                    <LineReveal 
                        text={"digital strategy."}
                        delay={0}
                    />
                    <LineReveal 
                        text={"custom solutions built"}
                        delay={0}
                    />
                    <LineReveal 
                        text={"to strengthen "}
                        delay={0}
                    />
                    <LineReveal 
                        text={"your brand image."}
                        delay={0}
                    />
                    <LineReveal 
                        text={"lasting impact."}
                        delay={0}
                    />
                    <LineReveal 
                        text={"real results."}
                        delay={0}
                    />
                </p>
            </div>
        </section>
    )
}