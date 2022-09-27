import Banner from '../components/Banner';
import Cards from '../components/Cards';
import bannerImg from '../assets/home_banner.jpg';
import '../style/pages/_home.scss';

const Home = () => {
    return (
        <div className="home">
            <Banner text="Chez vous, partout et ailleurs" picture={bannerImg} />
            <div className="cards_container">
                <Cards className="cards" />
            </div>
        </div>
    );
};

export default Home;
