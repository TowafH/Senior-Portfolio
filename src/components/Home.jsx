// Components
import ImageSlider from "./ImageSlider.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"

export default function Home() {
    // An array of slide objects
    const slides = [
        {url: '/AMAZON.jpeg', title: 'Amazon Future Engineer'},
        {url: '/CONGRESS.jpg', title: 'Congressional App Challenge NY-06 Winner'},
        {url: '/APPLE.jpg', title: 'NYCPS Student App Design Challenge'},
        {url: '/BAI.jpg', title: 'Bloomberg Arts Internship'},
        {url: '/SKILLS.jpg', title: 'Skills USA'},
        {url: '/AWARDS.jpg', title: 'Senior Awards Night'},
        {url: '/NTHS.jpg', title: 'National Technical Honor Society Induction Ceremony'}
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

