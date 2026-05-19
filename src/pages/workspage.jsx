import { motion } from "motion/react";
import Hero from "../components/hero/hero";
import Playground from "../components/playground/playground";
import LinkCta from "../components/linkcta/linkcta";
import CtaTitle from "../components/ctatitle/ctatitle";
import ProjectsList from "../components/projectsList/projectslist";

export default function WorksPage({ items }){
    const heroTextLine = [
        "Creative",
        "Portfolio"
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
            <Playground items={items}/>
            <CtaTitle
                textLine1={"Let's Build"}
                textLine2={"Something"}
                textLine3={"Exceptional"}
                image={"/public/images/work.jpg"}
                alt={""}
            />
            <ProjectsList 
                items={items}
            />
            <LinkCta />
        </motion.main>
    )
}