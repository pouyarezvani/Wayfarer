import React from 'react';

const CityHeader = ({ name, image }) => {
    return (
        <section className="city-header">
            <div className="city-name">
                <h2>{name}</h2>
            </div>
            <div className="city-image">
                <img src={image} alt="city" />
            </div>
        </section>
    );
};

export default CityHeader;