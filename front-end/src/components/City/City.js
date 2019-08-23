import React from 'react';
// styles
import './City.css'

const City = ({ cityName, image }) => {
    return (
        <div className="city-card">
            <div >
                <p>Name:<strong>{cityName}</strong></p>
            </div>
            <img src={image} alt="city-container" />
        </div>
    )
}

export default City