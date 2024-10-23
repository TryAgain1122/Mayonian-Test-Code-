import { useState, useEffect } from 'react';
import { CategoriesLabels } from "../api/gamesApi";
import CategoryItem from "./CategoryItem";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from 'react-redux';
import { filterGames } from '../app/features/favoriteSlice';
import GameList from './GameList'; // Import the GameList component
import { RootState } from '../app/store'; // Adjust import for RootState as needed

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dispatch = useDispatch();
  const filteredGames = useSelector((state: RootState) => state.favorites.filteredGames);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    dispatch(filterGames(category));
  };

  return (
    <div className="w-full p-4 overflow-hidden">
      <div className="flex md:flex-row flex-col justify-between items-center gap-2">
        <div className="w-full md:w-[70%] overflow-x-auto">
          <div className="flex justify-between gap-3"> 
            {CategoriesLabels.map((category, index) => (
              <CategoryItem 
                key={index} 
                Icon={category.logo} 
                label={category.category} 
                isActive={activeCategory === category.category}
                onClick={() => handleCategoryClick(category.category)}
              />
            ))}
          </div>
          {/* Pass the filtered games to the GameList component */}
          <GameList filteredGames={filteredGames} />
        </div>
        <div className="w-full md:flex-1">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Categories;
