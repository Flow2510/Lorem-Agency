import { NavLink } from 'react-router-dom';
import './projectslist.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function ProjectsList({ items }) {
    const [projectIndex, setProjectIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [activeCursor, setActiveCursor] = useState(false);

    useEffect(() => {
         const handleMouseMove = (e) => {
            setCursorPosition({
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
        <section className='projects-list'>
            <AnimatePresence>
                <motion.div 
                    style={{ top: cursorPosition.y + 20, left: cursorPosition.x + 20, rotateZ: -10 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    key={activeCursor}
                    className={`cursor cursor__projectslist${activeCursor ? " cursor__projectslist--active" : ""}`}
                >
                    <p>
                        View Project
                    </p>
                </motion.div>
            </AnimatePresence>
            <h2 className='projects-list__title'>
                Recent Projects [{items.length}]
            </h2>
            {isDesktop ?
                <motion.div 
                    onHoverStart={() => setActiveCursor(true)}
                    onHoverEnd={() => setActiveCursor(false)}
                    className='projects-list__wrapper'
                >
                    {items.map((item, index) => (
                        <motion.div
                            className='projects-list__item'
                            key={item.id + index}
                            onHoverStart={() => setProjectIndex(index)}
                        >
                            <NavLink
                                className='projects-list__item-link'
                                to={`/${item.slug}`}
                            >
                                <h3
                                    className={`projects-list__item-title${projectIndex === index ? " projects-list__item-title--active" : ""}`}
                                >
                                    {item.name}
                                </h3>
                                <AnimatePresence mode='wait'>
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        animate={{ height: 300 }}
                                        key={projectIndex}
                                        className={`projects-list__item-wrapper${projectIndex === index ? " projects-list__item-wrapper--active" : ""}`}>
                                        <img
                                            className='projects-list__item-image'
                                            src={item.image.url} 
                                            alt={item.image.alt} 
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            :
                <div className='projects-list-mobile__wrapper'>
                    {items.map((item, index) => (
                        <motion.div
                            className='projects-list-mobile__item'
                            key={item.id + index}
                            onHoverStart={() => setProjectIndex(index)}
                        >
                            <NavLink
                                className='projects-list-mobile__item-link'
                                to={`/${item.slug}`}
                            >
                                <h3
                                    className='projects-list-mobile__item-title'
                                >
                                    {item.name}
                                </h3>
                                <div 
                                    className='projects-list-mobile__item-wrapper'
                                >
                                    <img 
                                        src={item.image.url} 
                                        alt={item.image.alt} 
                                        className='projects-list-mobile__item-image'
                                    />
                                </div>
                            </NavLink>
                        </motion.div>
                    ))}
                </div>
            }
        </section>
    )
}