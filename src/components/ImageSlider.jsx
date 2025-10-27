import { useState } from "react"

export default function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        position: 'relative'
    }

    const slidesContainerStyles = {
        display: 'flex',
        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
        transform: `translateX(-${currentIndex * 100}%)`,
        height: '100%'
    }

    const slideStyles = {
        minWidth: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        left: '32px',
        fontSize: '65px',
        color: '#181A18',
        zIndex: 1,
        cursor: 'pointer',
        transform: 'translateY(-50%)'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        right: '32px',
        fontSize: '65px',
        color: '#181A18',
        zIndex: 1,
        cursor: 'pointer',
        transform: 'translateY(-50%)'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>‹</div>
            <div style={rightArrowStyles} onClick={goToNext}>›</div>
            <div style={slidesContainerStyles}>
                {slides.map((slide, index) => (
                    // .map() loops through the slides array
                    // 'slide' is the current object in the array (e.g., {url: '\BAI.jpg', title: 'BAI'})
                    // 'index' is the position of the object (0, 1, 2)
                    <div key={index} style={{
                        // 'key' is a special prop React uses to track each element in a list. It helps React efficiently update the UI and is required when mapping.    
                        ...slideStyles,
                        // ... --> 'spread operator' that allows an iterable (array, string, or object) into individual elements
                        backgroundImage: `linear-gradient(to top, rgba(24,26,24,0.7) 5%, rgba(0,0,0,0) 25%), url(${slide.url})`}}
                    />
                ))}
            </div>
        </div>
    )
}