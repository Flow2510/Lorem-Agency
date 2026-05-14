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
        "web studio",
        "digital lab",
        "creative"
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
                video={'/public/video/cursor.mp4'}
            />
            <VideoSection />
            <Cta />
            <Playground items={items}/>
            <FeaturesSection />
            <ClientSection />
            <LinkCta />
        </motion.main>
    )
}