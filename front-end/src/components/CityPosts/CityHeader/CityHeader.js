import React from 'react';

const CityHeader = ({ name, image, description }) => {
    return (
        <section className="city-header">
            <div className="city-name">
                <h2>{name}</h2>
                <h5>{description}</h5>
            </div>
            <div className="city-image">
                <img src={image} alt="city" />
            </div>
        </section>
    );
};

export default CityHeader;