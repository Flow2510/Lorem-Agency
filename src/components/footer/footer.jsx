import { NavLink } from 'react-router-dom';
import './footer.scss';
import { motion } from 'motion/react';
import LineReveal from '../linereveal/linereveal';

export default function Footer(){

    const medias = [
        "/video/cursor.mp4",
        "/video/introvideo.mp4",
        "/video/motion.mp4",
        "/video/motion2.mp4",
        "/video/motion3.mp4",
        "/video/motion4.mp4"
    ]

    const links = [
        "Creative Process",
        "Digital Strategy",
        "Brand Identity"
    ]

    const links2 = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Services",
            link: "/services"
        },
        {
            text: "Works",
            link: "/works"
        },
        {
            text: "About",
            link: "/about"
        },
        {
            text: "Contact Us",
            link: "/contact"
        }
    ]

    return(
        <footer className='footer'>
            <div className='footer__wrapper'>
                <div className='footer__medias'>
                    {medias.map((media, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: index / 20 }}
                            key={media + index}
                            viewport={{once: true}}
                            className={`footer__medias-wrapper${index >= 3 ? " footer__medias-wrapper--desktop" : ""}`}
                        >
                            <video src={media}
                                autoPlay
                                loop
                                muted
                                preload="none"
                            >

                            </video>
                        </motion.div>
                    ))}
                </div>
                <div className='footer__content-wrapper'>
                    <nav className='footer__menu'>
                        <div className='footer__menu-list'>
                            {links.map((link, index) => (
                                <NavLink 
                                    key={index + link}
                                    className={"footer__menu-link"}
                                >{link}</NavLink>
                            ))}
                            
                        </div>
                        <div className='footer__menu-list'>
                            {links2.map((link, index) => (
                                <NavLink 
                                    key={index + link.text}
                                    className={"footer__menu-link"} 
                                    to={link.link}
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </div>
                    </nav>
                    <div className='footer__content'>
                        <p>
                            We create thoughtful digital experiences for brands looking to grow with clarity and impact.
                        </p>
                        <p>
                            Design, strategy and innovation combined to build strong and lasting online presence.
                        </p>
                        <p>
                            Let’s Connect
                        </p>
                        <p>hello@loremagency.com</p>
                        <div>
                            <p>Copyright 2026</p>
                            <p>Lorem Agency</p>
                        </div>
                    </div>
                </div>
                <h1 className='footer__title'>
                    <LineReveal 
                        text={"Lorem"}
                        delay={0.2}
                    />
                </h1>
            </div>
        </footer>
    )
}