import React from 'react';
// styles
import './City.css'

const City = props => {
    return (
        <div className="city-card">
            <div>
                <p>Name:<strong>{props.cityName}</strong></p>
            </div>
            <img src={props.imageUrl} alt="city-container" />
        </div>
    )
}

export default City