import Carousel from "../components/Carousel"
import Categories from "../components/Categories"
import GameList from "../components/GameList"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Categories />
        <GameList />
    </div>
  )
}

export default Home