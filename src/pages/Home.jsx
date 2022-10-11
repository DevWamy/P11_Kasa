import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import bannerImg from '../assets/home_banner.jpg';
import '../style/pages/_home.scss';

const Home = () => {
    const [houses, setHouses] = useState(null); // useState parce que c'est un état => asynchrone = on a pas tout tout de suite, ça évolue

    useEffect(() => {
        fetch('/data/logements.json')
            .then(response => response.json())
            .then(houses => setHouses(houses)); // ici on redéfini houses avec le résultat du fichier appelé
    }, []); // tableau de dépendance à vide pour appeler 

    return (
        <div className="home">
            <Banner text="Chez vous, partout et ailleurs" picture={bannerImg} />
            {houses && <div className="cards_container"> {/* attention, sécurisation pour pas que le JS casse si houses est null */}
                {houses.map((house) => (
                    <Cards cover={house.cover} title={house.title} id={house.id} key={house.id} />
                ))}
            </div>}
        </div>
    );
};

export default Home;
