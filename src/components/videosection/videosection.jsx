import './videosection.scss';

export default function VideoSection({ video }) {
    return(
        <section className='video-section'>
            <video className='video-section__video' autoPlay loop muted preload="none">
                <source src={video} />
            </video>
        </section>
    )
}