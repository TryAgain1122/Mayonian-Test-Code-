import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface GameCardProps {
  imgUrl: string;
  title: string;
  isFavorite: boolean; // Prop to check if this game is favorited
  onFavoriteClick: () => void; // Callback to toggle favorite
}

const GameCard = ({ imgUrl, title, isFavorite, onFavoriteClick }: GameCardProps) => {
  return (
    <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
      <img
        src={imgUrl}
        alt={`Game image for ${title}`}
        className="w-full h-full object-cover rounded-lg"
      />
      <div
        className="absolute top-3 right-3 transition duration-300"
        onClick={onFavoriteClick} // Toggle favorite when clicked
      >
        {isFavorite ? (
          <FaStar size={40} className="text-yellow-500" />
        ) : (
          <CiStar size={40} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default GameCard;
