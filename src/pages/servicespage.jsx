import { motion } from "motion/react";
import Hero from "../components/hero/hero";
import LinkCta from "../components/linkcta/linkcta";
import ServicesSection from "../components/servicessection/servicessection";
import IntroServices from "../components/intro/intro";
import CtaTitle from "../components/ctatitle/ctatitle";

export default function ServicesPage({features, items}){
    const heroTextLine = [
        "Creative",
        "Solutions"
    ]

    return(
        <motion.main
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero 
                heroTextLine={heroTextLine}
            />
            <IntroServices
                title={"Digital Experiences"}
                features={features}
                text={"We create thoughtful digital experiences that combine strategy, design, and innovation. From web design and interactive interfaces to motion graphics and brand identity, every service is built to help your business stand out and connect with the right audience."}
                text2={"Our approach focuses on creating meaningful visuals, seamless user experiences, and strong digital solutions that bring your ideas to life and support long-term growth."}
            />
            <CtaTitle
                textLine1={"Let’s Create"}
                textLine2={"Your"}
                textLine3={"Next Project"}
                image={"/images/work.jpg"}
                alt={""}
            />
            <ServicesSection 
                features={features}
            />
            <LinkCta />
        </motion.main>
    )
}