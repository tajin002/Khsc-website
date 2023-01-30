import React, { useEffect, useState } from 'react';
import { useTitle } from '../../../Hooks/UseTitle';
import Images from './Images';

const Gallery = () => {
    useTitle("Gallery");
    const [images, setImage] = useState([]);
    useEffect(()=>{
        fetch('photo.json')
        .then(res=> res.json())
        .then(data =>setImage(data))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 ml-5 mr-5'>
            {
                images.map(image =><Images key={image._id} image={image} /> )
            }
        </div>
    );
};

export default Gallery;