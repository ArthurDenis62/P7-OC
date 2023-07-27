import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Logement from "./Logement";
import bannerimg from "../img/bgAccueil.svg";
import '../font/font.module.scss';

const Home = () => {
    return (
        <div>
            <Banner image={bannerimg} altText={`Banner Accueil`} textContent={'Chez vous, partout et ailleurs'} />
            <Gallery />
            <Logement />
        </div>
    )
}

export default Home;