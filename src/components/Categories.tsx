import { CategoriesLabels } from "../api/gamesApi";
import CategoryItem from "./CategoryItem";
import SearchBar from "./SearchBar";

const Categories = () => {
  return (
    <div className="w-full p-4 overflow-hidden">
      <div className="flex md:flex-row flex-col justify-between items-center gap-2">
        <div className="w-full md:w-[70%] overflow-x-auto">
          <div className="flex justify-between gap-3"> 
            {CategoriesLabels.map((category, index) => (
              <CategoryItem key={index} Icon={category.logo} label={category.category} />
            ))}
          </div>
        </div>
        <div className="w-full md:flex-1">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Categories;
