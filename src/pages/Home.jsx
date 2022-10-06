import Banner from '../components/Banner';
import Cards from '../components/Cards';
import bannerImg from '../assets/home_banner.jpg';
import '../style/pages/_home.scss';

const house = [
    {
        id: 'c67ab8a7',
        title: 'Appartement cosy',
        cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
        pictures: [
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
        ],
        description:
            "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
        host: {
            name: 'Nathalie Jean',
            picture:
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg',
        },
        rating: '5',
        location: 'Ile de France - Paris 17e',
        equipments: ['Équipements de base', 'Micro-Ondes', 'Douche italienne', 'Frigo', 'WIFI'],
        tags: ['Batignolle', 'Montmartre'],
    },
    {
        id: 'b9123946',
        title: 'Magnifique appartement proche Canal Saint Martin',
        cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg',
        pictures: [
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg',
        ],
        description:
            "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
        host: {
            name: 'Della Case',
            picture:
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg',
        },
        rating: '4',
        location: 'Ile de France - Paris 10e',
        equipments: ['Parking', 'Sèche Cheveux', 'Machine à laver', 'Wi-fi', 'Cuisine équipée', 'Télévision'],
        tags: ['Canal Saint Martin', 'République', 'Appartement'],
    },
    {
        id: '46d188c5',
        title: 'Studio de charme - Buttes Chaumont',
        cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg',
        pictures: [
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg',
        ],
        description:
            'À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.',
        host: {
            name: 'Franck Maher',
            picture:
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg',
        },
        rating: '3',
        location: 'Ile de France - Paris 20e',
        equipments: ['Wi-fi', 'Cuisine équipée', 'Télévision', 'Sèche Cheveux'],
        tags: ['Buttes Chaumont', 'Laumière', 'Studio'],
    },
    {
        id: '7af00cd6',
        title: 'Nid douillet au coeur du 11ème',
        cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg',
        pictures: [
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg',
        ],
        description:
            "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
        host: {
            name: 'Della Case',
            picture:
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg',
        },
        rating: '3',
        location: 'Ile de France - Paris 11e',
        equipments: ['Micro-Ondes', 'Wi-fi', 'Chambre Séparée', 'Climatisation', 'Télévision'],
        tags: ['Parmentier', 'Marais', 'Parc', 'Night Life'],
    },
    {
        id: '0979876d',
        title: 'Appartement de Standing - 10e',
        cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg',
        pictures: [
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-2.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-4.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-5.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-6.jpg',
        ],
        description:
            "Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d'enfant.",
        host: {
            name: 'Franck Maher',
            picture:
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg',
        },
        rating: '5',
        location: 'Ile de France - Paris 10e',
        equipments: ['Frigo Américain', 'Sèche Cheveux', 'Wi-fi', 'Chambre Séparée', 'Parking'],
        tags: ['Goncourt', 'Proche commerces'],
    },
    {
        id: 'f72a452f',
        title: "Studio d'artiste",
        cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg',
        pictures: [
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-2.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-3.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-4.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-5.jpg',
        ],
        description:
            "Venez vous imprégner de la culture parisienne dans cet ancien studio d'artiste décoré avec goût, au coeur de Montmartre.",
        host: {
            name: 'Line Rolland',
            picture:
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg',
        },
        rating: '5',
        location: 'Ile de France - Paris 18e',
        equipments: ['Chambre Séparée', 'Parking'],
        tags: ['Montmartre', 'Culture', 'Charme'],
    },
    {
        id: 'b4c67936',
        title: 'Cheap - Studio 18ème',
        cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg',
        pictures: [
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-2.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-3.jpg',
            'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-4.jpg',
        ],
        description:
            'Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accéderez très rapidement à tous les points touristiques de Paris.',
        host: {
            name: 'Hugo Perrier',
            picture:
                'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg',
        },
        rating: '3',
        location: 'Ile de France - Paris 18e',
        equipments: ['Salle de bains', 'Frigo', 'Wi-fi', 'Sèche Cheveux', 'Bureau', 'Parking'],
        tags: ['Transports', 'Cheap', '18ème'],
    },
];

const Home = () => {
    return (
        <div className="home">
            <Banner text="Chez vous, partout et ailleurs" picture={bannerImg} />
            <div className="cards_container">
                {house.map((house) => (
                    <Cards cover={house.cover} title={house.title} id={house.id} key={house.id} />
                ))}
            </div>
        </div>
    );
};

export default Home;
