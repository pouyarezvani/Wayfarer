import React from 'react';
// styles
import './City.css'

const City = ({ name, image }) => {
    return (
        <div className="city-card">
            <div>
                <p>Name:<strong>{name}</strong></p>
            </div>
            <img src={image} alt="city-container" />
        </div>
    )
}

export default City