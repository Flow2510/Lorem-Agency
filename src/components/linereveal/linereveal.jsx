import { motion } from 'motion/react';
import './linereveal.scss';

export default function LineReveal({text, delay}) {
    const letters = text.split("");
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.02,
                delayChildren: delay
            }
        }
    };

    const letter = {
        hidden: {
            y: "100%"
        },
        show: {
            y: "0%",
            transition: {
                duration: 0.6,
                type: "tween"
            }
        }
    };

    return(
        <span className="line-reveal">
            <motion.span
                className="line-reveal__wrapper"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {letters.map((letterItem, index) => (
                    <motion.span
                        key={letterItem + index}
                        className="line-reveal__letter"
                        variants={letter}
                    >
                        {letterItem === " " ? "\u00A0" : letterItem}
                    </motion.span>
                ))}
            </motion.span>
        </span>
    )
}