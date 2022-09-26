import Banner from '../components/Banner';
import Cards from '../components/Cards';
import bannerImg from '../assets/home_banner.jpg';
import '../style/pages/home.css';

const Home = () => {
    return (
        <div className="home">
            <Banner text="Chez vous, partout et ailleurs" picture={bannerImg} />
            <Cards className="cards" />
        </div>
    );
};

export default Home;
