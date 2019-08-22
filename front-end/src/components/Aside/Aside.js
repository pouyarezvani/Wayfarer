import React from 'react';
import { Link } from 'react-router-dom';
// interal imports
import City from '../City/City';
// styles
import './Aside.css';

const Aside = ({ cities }) => {
    const citiesArr = cities.map(city => {
        return (
            <Link key={city.id} to={`/cities/${city.name}`} >
                <City key={city.id} name={city.name} image={city.imageUrl} />
            </Link>
        )
    })

    return (
        <div className="aside">
            <div className="aside-header">
                <h1>Cities</h1>
            </div>
            <div className="asides-cities">
                {citiesArr}
            </div>

        </div>
    )
}

export default Aside;