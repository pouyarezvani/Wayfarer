import React from 'react';

const CityHeader = ({ name, image }) => {
    return (
        <section className="city-header">
            <div className="city-image">
                <img src={image} alt="city" />
            </div>
            <div className="city-name">
                <h2>{name}</h2>
            </div>

        </section>
    );
};

export default CityHeader;