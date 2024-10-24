import { useEffect, useState } from "react"
import { CarouselImages } from "../api/gamesApi";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const[isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1 ) % CarouselImages.length)
      }
    }, 3000)
    return () => clearInterval(interval);
  },[isPaused, CarouselImages.length]);
  return (
    <div className="relative w-full h-64 md:h-[70vh] overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)`}}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {CarouselImages.map((image, index) => (
          <CarouselItem key={index} imgUrl={image.src}/>
        ))}
      </div>
    </div>
  )
}

export default Carousel