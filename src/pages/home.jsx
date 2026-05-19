import { motion } from "motion/react";
import ClientSection from "../components/clientsection/clientsection";
import Cta from "../components/cta/cta";
import FeaturesSection from "../components/featuressection/featuressction";
import Hero from "../components/hero/hero";
import LinkCta from "../components/linkcta/linkcta";
import Playground from "../components/playground/playground";
import VideoSection from "../components/videosection/videosection";

export default function Home({ items }) {
    const heroTextLine = [
        "We Build",
        "digital",
        "Experiences"
    ]

    return(
        <motion.main
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero 
                heroTextLine={heroTextLine}
                video={'/video/cursor.mp4'}
            />
            <VideoSection 
                video={'/video/introvideo.mp4'}
            />
            <Cta />
            <Playground items={items}/>
            <FeaturesSection />
            <ClientSection />
            <LinkCta />
        </motion.main>
    )
}