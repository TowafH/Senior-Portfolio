// Components
import ImageSlider from "./ImageSlider.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"

export default function Home() {
    // An array of slide objects
    const slides = [
        {url: '/BAI.jpg', title: 'cat1'},
        {url: '/APPLE.jpg', title: 'cat2'},
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

