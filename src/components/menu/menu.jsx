import { NavLink } from 'react-router-dom'
import './menu.scss'
import { AnimatePresence, motion } from 'motion/react'

export default function Menu({ menuIsOpen, setMenuIsOpen }){
    const menu = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Services",
            link: "/services"
        },
        {
            text: "About",
            link: "/about"
        },
        {
            text: "Contact",
            link: "/contact"
        },
    ]

    return(
        <AnimatePresence>
            {menuIsOpen &&
                <motion.div className={`menu`}
                    key={menuIsOpen}
                    initial={{ y: "-200%", rotateZ: 20, width: "150%" }}
                    animate={{ y: "0%", rotateZ: 0, width: "100%" }}
                    exit={{ y: "-200%", rotateZ: 20, width: "150%" }}
                    transition={{ duration: 1 }}
                >
                    <div className='menu__wrapper'>
                        <motion.nav 
                            className='menu__nav' 
                            key={menuIsOpen} 
                            animate={{ scale: 1, rotateZ: 0 }}
                            exit={{ scale: 1.8, rotateZ: -30, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {menu.map((m, index) => (
                                <NavLink
                                    key={m.text + index}
                                    className='menu__nav-link'
                                    to={m.link}
                                    onClick={() => setMenuIsOpen(prev => !prev)}
                                >
                                    <div style={{ overflow: "hidden", display: "inline-block" }}>
                                        <img src="" alt="" />
                                        <motion.span
                                            style={{ display: 'inline-block'}}
                                            initial={{ y: "-110%" }}
                                            animate={{ y: "0%"}}
                                            transition={{ duration: 0.5, delay: 0.7 + (index / 20)}}
                                        >
                                            {m.text}
                                        </motion.span>
                                    </div>
                                </NavLink>
                            ))}
                        </motion.nav>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}