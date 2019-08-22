import React, { Component } from 'react';
// internal components
import Aside from '../../components/Aside/Aside';
import CityPosts from '../../components/CityPosts/CityPosts';
// styles
import './CitiesContainer.css'

class CitiesContainer extends Component {
    state = {
        users: [
            {
                id: 1,
                username: "Eduardo",
                imageUrl: "https://i.stack.imgur.com/34AD2.jpg"
            }
        ]
        ,
        cities: [
            {
                id: 1,
                name: "San Francisco",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/250px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg",
            },
            {
                id: 2,
                name: "Austin",
                imageUrl: "https://static.parade.com/wp-content/uploads/2018/11/austin-texas-skyline-state-flag-ftr.jpg"
            },
            {
                id: 3,
                name: "Guadalajara",
                imageUrl: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180514093837-04-guadalajara-city-guide.jpg"
            }
        ],
        posts: [
            {
                id: 1,
                name: 'San Francisco',
                content: "Fun time in San Francisco",
                imageUrl: "https://i.stack.imgur.com/34AD2.jpg"
            },
            {
                id: 2,
                name: 'Austin',
                content: "I had some good ass food in Texas bro",
                imageUrl: "https://i.stack.imgur.com/34AD2.jpg"
            },
            {
                id: 3,
                name: 'Seattle',
                content: "It was raining too much :(",
                imageUrl: "https://i.stack.imgur.com/34AD2.jpg"
            }
        ]
    }


    render() {
        return (
            <div className="cities-container">
                <div className="aside">
                    <Aside cities={this.state.cities} />
                </div>
                <div className="city-posts">
                    <CityPosts posts={this.state.posts} cities={this.state.cities} users={this.state.users} />
                </div>

            </div>
        )
    }
}

export default CitiesContainer