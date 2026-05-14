import { useEffect, useState } from 'react';
import LineReveal from '../linereveal/linereveal'
import './hero.scss'
import { motion } from 'motion/react';

export default function Hero({ heroTextLine, video }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
        };

        globalThis.addEventListener("mousemove", handleMouseMove);

        return () => {
        globalThis.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return(
        <section className="hero">
            {video && 
                <div 
                    className='cursor cursor__hero'
                    style={{ 
                    left: `${position.x + 40}px`,
                    top: `${position.y + 40}px`,
                    }}
                >
                    <video src={video} autoPlay loop muted preload="none"></video>
                </div>
            }
            <h1>
                {heroTextLine.map((line, index) => (
                    <LineReveal 
                        key={line + index}
                        text={line}
                        delay={0.5 + ( index / 5 )}
                    />
                ))}             
            </h1>
            <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }} 
                className='hero__scroll'
            >
                [ scroll ]
            </motion.p>
        </section>
    )
}