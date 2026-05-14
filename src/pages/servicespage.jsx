import { motion } from "motion/react";
import Hero from "../components/hero/hero";

export default function ServicesPage({items}){
    const heroTextLine = [
        "Services"
    ]

    return(
        <motion.main
            initial={{ x: "-100%", y: "100%" }}
            animate={{ x: "0%", y: "0%" }}
            exit={{ x: "100%", y: "-100%" }}
            transition={{ duration: 0.5 }}
        >
            <Hero 
                heroTextLine={heroTextLine}
            />
        </motion.main>
    )
}