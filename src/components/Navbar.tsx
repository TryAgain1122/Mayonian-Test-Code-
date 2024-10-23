
const Navbar = () => {
  return (
    <div className="p-4 bg-blue-900 flex justify-between items-center">
       <span className="text-white text-2xl font-anton tracking-wide">FUN88</span>
       <div className="flex flex-row gap-2">
          <button className="px-4 py-2 bg-green-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400 hover:bg-green-600">Login</button>
          <button className="px-4 py-2 bg-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-orange-400 text-white">Sign Up</button>
       </div>
    </div>
  );
};

export default Navbar;
