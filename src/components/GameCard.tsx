import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface GameCardProps {
  imgUrl: string;
}

const GameCard = ({ imgUrl }: GameCardProps) => {
  const [favorites, setFavorites] = useState(false);

  const toggleFavorites = () => {
    setFavorites((prev) => !prev);
  };
  return (
    <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
      <img
        src={imgUrl}
        alt={imgUrl}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute top-3 right-3" onClick={toggleFavorites}>
        {favorites ? (
          <FaStar size={40} />
        ) : (
          <CiStar size={40} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default GameCard;
