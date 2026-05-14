import { AnimatePresence, motion } from 'motion/react';
import PlaygroundCard from '../playgroundcard/playgroundcard';
import './playground.scss';
import LineReveal from '../linereveal/linereveal';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Playground({ items }){
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cardHover, setCardHover] = useState(undefined);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const animationList = [
        {
            rotateZ: -20, 
            x: -200, 
            y: 200,
            scale: 0.7
        },
        {
            rotateZ: 20, 
            x: 200, 
            y: 200,
            scale: 0.7
        },
        {
            rotateZ: -20, 
            x: -200, 
            y: 200,
            scale: 0.7
        },
        {
            rotateZ: 20, 
            x: 200, 
            y: 200,
            scale: 0.7
        }
    ]

    return(
        <section className='playground'>
            <AnimatePresence>
                <motion.div 
                    className={`cursor cursor__playground${cardHover == null ? "" : " cursor__playground--active"}`}
                    key={cardHover}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    style={{ 
                        left: `${position.x + 20}px`,
                        top: `${position.y + 20}px`,
                        rotateZ: -10
                    }}
                >
                    {cardHover !== undefined && 
                        <p>{items[cardHover].name}</p>
                    }
                </motion.div>
            </AnimatePresence>
            <div className='playground__wrapper'>
                <div className='playground__content'>
                    <motion.h2 
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className='playground__content-title'
                    >
                        Creative Direction & Development
                    </motion.h2>
                    <NavLink 
                        to={'/services'}
                        className='playground__content-subtitle'>
                        <LineReveal 
                            delay={0.2}
                            text={"Services"}
                        />
                    </NavLink>
                </div>
                <div className='playground__gallery'>
                    {items.map((item, index) => (
                        <motion.div
                            onHoverStart={() => setCardHover(index)}
                            onHoverEnd={() => setCardHover(undefined)}
                            className='playground__gallery-item'
                            initial={ animationList[index] }
                            whileInView={{ rotateZ: 0, x: 0, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            key={item.name + index}
                        >
                            <PlaygroundCard item={item}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}