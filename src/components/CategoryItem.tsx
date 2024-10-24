interface CategoryItemProps {
  Icon: string;
  label: string
}
const CategoryItem = ({Icon, label}:CategoryItemProps) => {
return (
  <div className="flex flex-col items-center p-2">
      <img 
          alt={Icon}
          src={Icon}
          className="w-11 h-11"
          />
      <div className="text-sm font-semibold">{label}</div>
  </div>
)
}
export default CategoryItem