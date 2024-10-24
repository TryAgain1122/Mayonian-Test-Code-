import { useState } from "react";
import { CategoriesLabels, CategoryKey, mockData } from "../api/gamesApi"; // Import CategoryKey
import CategoryItem from "./CategoryItem";
import SearchBar from "./SearchBar";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface CategoriesProps {
  onSelectedCategory: (category: CategoryKey) => void;
  activeCategory: CategoryKey; // Add a prop for the active category
  onSearch: (searchTerm: string) => void;
}

const Categories = ({
  onSelectedCategory,
  activeCategory,
  onSearch,
}: CategoriesProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryClick = (category: CategoryKey) => {
    onSelectedCategory(category); // Trigger the callback when a category is clicked
  };

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCloseButton = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full p-4 overflow-hidden">
      <div className="flex md:flex-row flex-col justify-between items-center gap-2">
        {/* Categories List */}
        <div className="w-full md:w-[70%] overflow-x-auto">
          <div className="flex justify-between gap-3">
            {CategoriesLabels.map((category, index) => {
              const isActive = activeCategory === category.category;
              return (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category.category as CategoryKey)}
                  className={`cursor-pointer ${
                    isActive ? "border-b-2 border-blue-500" : ""
                  } hover:border-b-2 hover:border-gray-300`}
                >
                  <CategoryItem
                    Icon={category.logo}
                    label={category.category}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Search Bar with Menu Icon */}
        <div className="w-full md:w-[30%] flex items-center justify-between gap-4 mt-2 md:mt-0">
          <div className="flex-grow">
            <SearchBar onSearch={onSearch} />
          </div>
          <MdOutlineMenuOpen
            className="text-gray-600 cursor-pointer"
            size={30}
            onClick={toggleDropdown}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-4 bottom-32 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto z-50 w-full md:w-[300px]">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg mb-2">All Providers</div>
            <IoMdClose size={30} className="cursor-pointer" onClick={toggleCloseButton} />
          </div>

          <ul>
            {Object.keys(mockData).map((categoryKey, index) => {
              const games = mockData[categoryKey];

              if (!Array.isArray(games)) return null;

              const gameProviders = Array.from(new Set(games.map(game => game.gameProvider)));

              return (
                <li key={index} className="border-b border-gray-200 mb-2">
                  <div className="font-semibold text-lg">{categoryKey}</div> {/* Display the category name */}
                  {gameProviders.map((provider, providerIndex) => (
                    <div
                      key={providerIndex} // Use index here, assuming provider names are unique
                      className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCategoryClick(categoryKey as CategoryKey)} // Optionally handle category click
                    >
                      <span>{provider}</span> {/* Display the game provider */}
                    </div>
                  ))}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
