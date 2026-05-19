import { motion } from "motion/react";
import Hero from "../components/hero/hero";
import LinkCta from "../components/linkcta/linkcta";

export default function ContactPage({items}){
    const heroTextLine = [
        "Contact"
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
            <LinkCta />
        </motion.main>
    )
}