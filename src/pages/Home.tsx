import { useState } from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import GameList from "../components/GameList";
import Navbar from "../components/Navbar";
import { GameType, CategoryKey } from "../api/gamesApi"; // Import necessary types

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("ALL");
  const [favorites, setFavorites] = useState<GameType[]>([]); // New state for favorites
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectCategory = (category: CategoryKey) => {
    setSelectedCategory(category);
  };

  // Function to toggle favorites
  const handleToggleFavorite = (game: GameType) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.id === game.id);
      if (isAlreadyFavorite) {
        // Remove the game from favorites
        return prevFavorites.filter(fav => fav.id !== game.id);
      } else {
        // Add the game to favorites
        return [...prevFavorites, game];
      }
    });
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Carousel />
      <Categories onSelectedCategory={handleSelectCategory} activeCategory={selectedCategory} onSearch={handleSearch}/>
     <GameList
        selectedCategory={selectedCategory}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite} // Pass the function to GameList
        searchTerm={searchTerm}
      />
    
    </div>
  );
};

export default Home;
