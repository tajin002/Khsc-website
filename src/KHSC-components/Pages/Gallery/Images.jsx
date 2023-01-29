import React from 'react';

const Images = ({image}) => {
    const {img} = image
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Images;