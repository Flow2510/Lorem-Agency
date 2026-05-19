import { useParams } from "react-router-dom";
import Hero from "../components/hero/hero";
import { motion } from "motion/react";
import VideoSection from "../components/videosection/videosection";

export default function ProjectPage({ items }){
    const { id } = useParams()

    const selectedItem = items.find(item => item.slug === id )
    const splitText = selectedItem.name.split(" ")

    return(
        <motion.main
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero 
                heroTextLine={splitText}
            />
            <VideoSection 
                video={selectedItem.video}
            />
        </motion.main>
    )
}