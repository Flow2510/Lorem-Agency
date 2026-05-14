import { AnimatePresence, motion } from 'motion/react'
import './header.scss'
import { useState } from 'react'
import Menu from '../menu/menu'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return(
        <div className='header__wrapper'>
            <motion.header 
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8 }}
                className='header'
            >
                <NavLink
                    to={'/'}
                    className='header__logo'
                    onClick={() => setMenuIsOpen(false)}
                >
                    Lorem Agency
                </NavLink>
                <button
                    onClick={() => setMenuIsOpen(prev => !prev)}
                >
                    <AnimatePresence mode='wait'>
                        {menuIsOpen ? 
                            <motion.span
                                key={menuIsOpen}
                                initial={{ y: "-100%", x: "-20%" }}
                                animate={{ y: "0%", x: "0%"}}
                                exit={{ y: "100%", x: "20%" }}
                                transition={{ duration: 0.3 }}
                            >
                                Close
                            </motion.span>
                            :
                            <motion.span
                                key={menuIsOpen}
                                initial={{ y: "-100%", x: "-20%" }}
                                animate={{ y: "0%", x: "0%"}}
                                transition={{ duration: 0.3 }}
                                exit={{ y: "100%", x: "20%" }}
                            >
                                Menu
                            </motion.span>
                        }
                    </AnimatePresence>
                </button>
            </motion.header>
            <Menu 
                menuIsOpen={menuIsOpen}
                setMenuIsOpen={setMenuIsOpen}
            />
        </div>
    )
}