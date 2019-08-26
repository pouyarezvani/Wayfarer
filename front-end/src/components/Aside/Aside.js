import React from 'react';
import { Link } from 'react-router-dom';
// interal imports
import City from '../City/City';
// styles
import './Aside.css';

const Aside = ({ cities }) => {
    const citiesArr = cities.map(city => {
        return (
            <Link key={city._id} to={`/cities/${city.slug}`} >
                <City key={city._id} cityName={city.name} image={city.image} />
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