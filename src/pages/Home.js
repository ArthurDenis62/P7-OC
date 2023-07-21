import Banner from "../components/Banner/Banner"
import bannerimg from "../img/bgAccueil.svg"

const Home = () => {
    return (
        <div>
            <Banner image={bannerimg} altText={`Banner Accueil`} textContent={'Chez vous, partout et ailleurs'} />
        </div>
    )
}

export default Home;