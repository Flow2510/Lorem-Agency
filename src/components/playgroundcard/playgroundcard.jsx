import { motion } from 'motion/react';
import './playgroundcard.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function PlaygroundCard({ item }){
    const [isHover, setIsHover] = useState(false)

    return(
        <motion.button className={`playground-card${isHover? " playground-card--active" : ""}`} onHoverEnd={() => setIsHover(prev => !prev)} onHoverStart={() => setIsHover(prev => !prev)}>
            <NavLink 
                to={`${item.name}`}
                className='playground-card__wrapper'
            >
                <div className='playground-card__image-wrapper'>
                    <img className='playground-card__image' src={item.image.url} alt={item.image.alt} 
                        style={{ 
                            filter: isHover ? "blur(5px)" : "blur(0px)",
                            scale: isHover ? 1.1 : 1
                         }}
                    />
                </div>
                <div className={`playground-card__content${isHover ? " playground-card__content--active" : ""}`}>
                    <video className='playground-card__content-video' src={item.video} autoPlay muted loop preload="none">
                        
                    </video>
                </div>
            </NavLink>
        </motion.button>
    )
}