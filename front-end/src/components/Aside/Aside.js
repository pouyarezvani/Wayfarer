import React from 'react';
import { Link } from 'react-router-dom';
// interal imports
import City from '../City/City';
// styles
import './Aside.css';

const Aside = () => {
    const cities = [
        <Link path="cities/sanfrancisco">
            <City cityName="San Francisco" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/250px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg" />
        </Link >,
        <Link path="cities/austin">
            <City cityName="Austin" imageUrl="https://static.parade.com/wp-content/uploads/2018/11/austin-texas-skyline-state-flag-ftr.jpg" />
        </Link>,
        <Link path="cities/guadalajara">
            <City cityName="Guadalajara" imageUrl="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180514093837-04-guadalajara-city-guide.jpg" />
        </Link>,


    ]

    return (
        <div className="aside">
            <div className="aside-header">
                <h1>Cities</h1>
            </div>
            <div className="asides-cities">
                {cities}
            </div>

        </div>
    )
}

export default Aside;