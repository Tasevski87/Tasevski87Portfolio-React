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
                'My portfolio created with HTML'
        },
        {
            name: 'Social Network Api',
            category: 'projects',
            description:
                'Social Network Api project backend'
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
                'Group Project 2 Project managment app'
        },
        {
            name: 'Budget Tracker',
            category: 'projects',
            description:
                'Finance tracking Application eith ability to work offline '
        },
        {
            name: 'Tech Blog',
            category: 'projects',
            description:
                'Blog app '
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
