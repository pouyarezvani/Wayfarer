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
                username: "Eduardo",
                imageUrl: "https://i.stack.imgur.com/34AD2.jpg"
            }
        ]
        ,
        cities: [
            {
                name: "San Francisco",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/250px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg",
            }
        ],
        posts: [
            {
                name: 'San Francisco',
                title: "Fun time in San Francisco",
                user: this.state.user[0]
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