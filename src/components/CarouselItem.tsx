interface CarouselItemProps {
  imgUrl: string;
}
const CarouselItem = ({imgUrl}:CarouselItemProps) => {
  return (
    <div className="w-full h-full flex flex-shrink-0">
      <img 
        src={imgUrl} 
        alt={imgUrl}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default CarouselItem