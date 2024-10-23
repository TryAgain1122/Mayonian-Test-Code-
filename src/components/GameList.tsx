import { mockData } from "../api/gamesApi";
import GameCard from "./GameCard";

const GameList = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {mockData.map((data, index) => (
          <div key={index} className="w-full flex justify-center overflow-hidden rounded-lg"> {/* Centering the GameCard */}
            <GameCard imgUrl={data.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
