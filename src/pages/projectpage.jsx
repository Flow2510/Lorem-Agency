import { useParams } from "react-router-dom";
import Hero from "../components/hero/hero";
import { motion } from "motion/react";

export default function ProjectPage({ items }){
    const { id } = useParams()

    const selectedItem = items.find(item => item.name === id )
    const splitText = selectedItem.name.split(" ")

    return(
        <motion.main
            initial={{ x: "-100%", y: "100%" }}
            animate={{ x: "0%", y: "0%" }}
            exit={{ x: "100%", y: "-100%" }}
            transition={{ duration: 0.5 }}
        >
            <Hero 
                heroTextLine={splitText}
            />
        </motion.main>
    )
}