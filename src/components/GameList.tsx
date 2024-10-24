import { useEffect, useState } from "react";
import { mockData } from "../api/gamesApi";
import GameCard from "./GameCard";
import Loading from "./Loading";
import { GameType } from "../types/apiTypes";

interface GameListProps {
  selectedCategory: string;
  favorites: GameType[];
  onToggleFavorite: (game: GameType) => void;
  searchTerm: string;
}

const GameList = ({ selectedCategory, favorites, onToggleFavorite, searchTerm }: GameListProps) => {
  const [games, setGames] = useState<GameType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGames = async () => {
      if (selectedCategory !== "FAVORITES") {
        setLoading(true)
      }
      
      try {
        if (selectedCategory === "FAVORITES") {
          setGames(favorites);
        } else {
          const fetchedGames = await new Promise<GameType[]>((resolve) => {
            setTimeout(() => {
              resolve(mockData[selectedCategory as keyof typeof mockData] || []);
            }, 1000);
          });
          setGames(fetchedGames);
        }
      } catch (error) {
        console.error("Error fetching games: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [selectedCategory, favorites]);

  // Filter the games based on the searchTerm
  const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) {
    return <Loading />;
  }

  if (filteredGames.length === 0) {
    return <div className="text-center p-4 text-2xl font-semibold">Game list is empty</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredGames.map((game) => (
          <div key={game.id} className="w-full flex justify-center overflow-hidden rounded-lg">
            <GameCard
              imgUrl={game.url}
              title={game.title}
              isFavorite={favorites.some(fav => fav.id === game.id)}
              onFavoriteClick={() => onToggleFavorite(game)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
