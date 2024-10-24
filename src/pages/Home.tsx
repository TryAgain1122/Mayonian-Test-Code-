// src/pages/Home.tsx
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import GameList from '../components/GameList';
import Navbar from '../components/Navbar';
import { CategoryKey } from '../api/gamesApi'; // Import necessary types
import { RootState } from '../store/store';
import { setSearchTerm, setSelectedCategory, toggleFavorite } from '../store/gameSlice';
import { GameType } from '../types/apiTypes';

const Home = () => {
  const dispatch = useDispatch();
  const { selectedCategory, favorites, searchTerm } = useSelector((state: RootState) => state.games);

  const handleSelectCategory = (category: CategoryKey) => {
    dispatch(setSelectedCategory(category));
  };

  const handleToggleFavorite = (game: GameType) => {
    dispatch(toggleFavorite(game));
  };

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Carousel />
      <Categories 
        onSelectedCategory={handleSelectCategory} 
        activeCategory={selectedCategory as CategoryKey} // Cast to CategoryKey if necessary
        onSearch={handleSearch}
      />
      <GameList
        selectedCategory={selectedCategory}
        favorites={favorites as GameType[]} // Cast to GameType[] if necessary
        onToggleFavorite={handleToggleFavorite}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Home;
