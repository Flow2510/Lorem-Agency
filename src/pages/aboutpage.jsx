import { motion } from "motion/react";
import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";
import LinkCta from "../components/linkcta/linkcta";

export default function AboutPage({items}){
    const heroTextLine = [
        "Behind",
        "The Work"
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
            <Intro 
                title={"About"}
                text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam tenetur repellat sequi ex quis laudantium, reiciendis modi atque accusantium eaque debitis vero, fugit ea deserunt veritatis recusandae magni quasi."}
                text2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam tenetur repellat sequi ex quis laudantium, reiciendis modi atque accusantium eaque debitis vero, fugit ea deserunt veritatis recusandae magni quasi."}
            />
            <LinkCta />
        </motion.main>
    )
}