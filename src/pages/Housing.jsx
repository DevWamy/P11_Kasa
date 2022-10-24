import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom'; //Je dois ajouter le Navigate
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import '../style/pages/_housing.scss';

const Housing = () => {
    const [houseDetails, setHouseDetails] = useState(null); // useState parce que c'est un état => asynchrone = on a pas tout tout de suite, ça évolue
    const [isLoading, setIsLoading] = useState(true);
    //useParams nous aide à accéder au paramètre passé dans l'URL sans utiliser l'objet props.
    //Je créé une variable pour récupérer l'id des apparts.
    const { houseId } = useParams();
    useEffect(() => {
        //useEffect permet de déclencher une fonction de manière asynchrone lorsque l'état du composant change
        fetch('/data/logements.json')
            .then((response) => response.json())
            //  J'utilise find pour mettre à jour ton state
            //Je recherche dans le tableau houseDetails parmi l'element, l'id de l'element correspond à houseId et je le récupère.
            .then((houseDetails) => {
                setHouseDetails(houseDetails.find((element) => element.id === houseId));
                setIsLoading(false);
            }); // ici on redéfini houses avec le résultat du fichier appelé
    });
    if (isLoading === false && houseDetails === undefined) {
        return <Navigate to="/Error" />;
    }
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
                                <Tags tags={currentHouse.tags} />
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
