import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import '../style/pages/_housing.scss';

const Housing = () => {
    const [houseDetails, setHouseDetails] = useState(null); // useState parce que c'est un état => asynchrone = on a pas tout tout de suite, ça évolue

    useEffect(() => {
        fetch('/data/logements.json')
            .then((response) => response.json())
            //  J'utilise find pour mettre a jour ton state
            //Je recherche dans le tableau houseDetails parmi l'element, l'id de l'element correspond à houseId et je le récupère.
            .then((houseDetails) => setHouseDetails(houseDetails.find((element) => element.id === houseId))); // ici on redéfini houses avec le résultat du fichier appelé
    });
    // Le useParams renvoie un objet de paires clé/valeur des paramètres dynamiques de l'URL actuelle qui ont été mis
    // en correspondance par le <Route path>. Les routes enfants héritent de tous les paramètres de leurs routes parentes.
    //Je créé une variable pour récupérer l'id des apparts.
    const { houseId } = useParams();
    //La maison actuelle correspond aux details de la maison que j'ai récupéré auparavant.
    const currentHouse = houseDetails;

    return (
        <div className="house">
            {/* Ceci evite que le code ne rompe. */}
            {houseDetails && (
                <>
                    {/* Ceci évite une balise qui serai presente dans le HTML, ca me permet de faire un wrap qui est necessaire ici. */}
                    <div className="body">
                        <Slideshow pictures={currentHouse.pictures} />
                        <div className="content">
                            <div className="title">
                                <h2>{currentHouse.title}</h2>
                                <h3>{currentHouse.location}</h3>
                                {houseDetails && <Tags tags={currentHouse.tags} />}
                            </div>
                            <div className="infos">
                                <div className="owner">
                                    <span className="host-name">{currentHouse.host.name}</span>
                                    <img src={currentHouse.host.picture} alt={currentHouse.host.name} />
                                </div>
                                <Rating rating={currentHouse.rating} />
                            </div>
                        </div>
                        <div className="house-description">
                            <Collapse title="Description" content={currentHouse.description} />
                            <Collapse title="Équipements" content={currentHouse.equipments} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Housing;
