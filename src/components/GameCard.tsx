import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../app/store";
import { addFavorite, removeFavorite } from "../app/features/favoriteSlice";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

interface GameCardProps {
  id: number;
  imgUrl: string;
}

const GameCard = ({ id, imgUrl }: GameCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const isFavorite = favorites.some(game => game.id === id);

  const toggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
      <img
        src={imgUrl}
        alt={imgUrl}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute top-3 right-3" onClick={toggleFavorites}>
        {isFavorite ? (
          <FaStar size={40} />
        ) : (
          <CiStar size={40} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default GameCard;
