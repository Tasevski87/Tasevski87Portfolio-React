import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Gallery(props ) {
    const { currentCategory } = props;
    return (
        <section>
            <h1>Gallery</h1>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}
export default Gallery;