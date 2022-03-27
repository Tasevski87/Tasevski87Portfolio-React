import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Portfolio',
            category: 'projects',
            description:
            <a href="https://github.com/Tasevski87/Portfolio">Html and Css Portfolio</a> 
        },
        {
            name: 'Social Network Api',
            category: 'projects',
            description:
            <a href="https://github.com/Tasevski87/Social-Network-API"> NoSQL Social Network API</a>
        },
        {
            name: 'Group Project 1',
            category: 'projects',
            description: 
            <a href="https://github.com/Shy-F/ruff-ruff">Group Project 1 Dog App for people who travel</a>
        },
        {
            name: 'Group Project 2',
            category: 'projects',
            description:
            <a href="https://github.com/Tasevski87/project-management-app"> Interactive Full-Stack Project Overseer</a> 
        },
        {
            name: 'Budget Tracker',
            category: 'projects',
            description:
            <a href="https://github.com/Tasevski87/Budget-Tracker"> Progressive Web Application Budget Tracker</a>
        },
        {
            name: 'Tech Blog',
            category: 'projects',
            description:
            <a href="https://github.com/Tasevski87/Tech-Blog"> Model-View-Controler Tech Blog</a>
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};


export default PhotoList;
