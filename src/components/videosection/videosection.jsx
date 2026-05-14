import './videosection.scss';

export default function VideoSection() {
    return(
        <section className='video-section'>
            <video className='video-section__video' autoPlay loop muted preload="none">
                <source src='/public/video/introvideo.mp4' />
            </video>
        </section>
    )
}