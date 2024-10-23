import React from 'react';

interface CategoryItemProps {
  Icon: string;
  label: string;
  isActive: boolean; // New prop for active state
  onClick: () => void; // New prop for click handler
}

const CategoryItem: React.FC<CategoryItemProps> = ({ Icon, label, isActive, onClick }) => {
  return (
    <div 
      className={`flex flex-col items-center p-2 cursor-pointer ${isActive ? 'underline' : ''}`} 
      onClick={onClick} // Attach click handler
    >
      <img 
        alt={Icon}
        src={Icon}
        className="w-11 h-11"
      />
      <div className="text-sm font-semibold">{label}</div>
    </div>
  );
};

export default CategoryItem;
