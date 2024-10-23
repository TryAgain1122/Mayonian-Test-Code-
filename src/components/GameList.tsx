import { mockData } from "../api/gamesApi";
import GameCard from "./GameCard";

interface GameListProps {
  filteredGames: { id: number; url: string }[]; // Update the type based on your data structure
}

const GameList = ({ filteredGames }: GameListProps) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredGames.length > 0 ? (
          filteredGames.map((data) => (
            <div key={data.id} className="w-full flex justify-center overflow-hidden rounded-lg">
              <GameCard id={data.id} imgUrl={data.url} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center mt-4">No games found.</div> // Message when no games are found
        )}
      </div>
    </div>
  );
};

export default GameList;
