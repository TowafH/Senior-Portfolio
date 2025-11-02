// Components
import ImageSlider from "./ImageSlider.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"

export default function Home() {
    // An array of slide objects
    const slides = [
        {url: '/BAI.jpg', title: 'Bloomberg Arts Internship'},
        {url: '/APPLE.jpg', title: 'NYCPS Student App Design Challenge'},
        {url: '/SKILLS.jpg', title: 'Skills USA'}
    ]

    return(
        <div>
            <div className="w-full h-100">
                <About/>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}

