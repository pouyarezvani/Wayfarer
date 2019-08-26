import React, { Component } from 'react';
// internal components
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import './Home.css';

class Home extends Component {
    images = [
        {
            url: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
            alt: 'New York City'
        },
        {
            url: 'https://images.unsplash.com/photo-1493540554008-8e3008329feb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            alt: 'Chicago'
        },
        {
            url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            alt: 'Los Angeles'
        }
    ];

    state = {
        index: 0,
    };

    carouselTimer = undefined;

    componentDidMount() {
        this.setBackgroundImage()
    };

    componentWillUnmount() {
        clearInterval(this.carouselTimer)
    };


    setBackgroundImage = () => {
        this.carouselTimer = setInterval(this.incrementCarousel, 3000);
    };

    incrementCarousel = () => {
        const nextIndex = this.state.index + 1;
        const hasPassedLastIndex = nextIndex >= this.images.length;
        this.setState({ index: hasPassedLastIndex ? 0 : nextIndex });
    };

    decrementCarousel = () => {
        const prevIndex = this.state.index - 1;
        const hasGoneNegative = prevIndex < 0;
        this.setState({ index: hasGoneNegative ? this.images.length - 1 : prevIndex });
    }

    render() {
        return (
            <div className="home-body">
                <section className="home-carousel">
                    <div className="carousel-image-container">
                        <img className="carousel-image" src={this.images[this.state.index].url} alt={this.images[this.state.index].alt} />
                        <i onClick={this.decrementCarousel} className="arrow left" ></i>
                        <i onClick={() => this.incrementCarousel()} className="arrow right" ></i>
                    </div>
                </section>
                {this.props.login
                    ? <Login />
                    : null
                }
                {this.props.register && <Register />}
                <div className="main">
                    <h3>Wayferer is..</h3>
                    <section className="home-content">
                        <div className="home-card">
                            <h4>Topic</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus facilis nostrum vero ipsum unde, odit magni consequatur in sed tempora vitae nulla laudantium ullam accusamus sit optio corporis et.</p>
                        </div>
                        <div className="home-card">
                            <h4>Topic</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus facilis nostrum vero ipsum unde, odit magni consequatur in sed tempora vitae nulla laudantium ullam accusamus sit optio corporis et.</p>
                        </div>
                        <div className="home-card">
                            <h4>Topic</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus facilis nostrum vero ipsum unde, odit magni consequatur in sed tempora vitae nulla laudantium ullam accusamus sit optio corporis et.</p>
                        </div>
                    </section>
                </div>

                <section className="home-footer">

                </section>
            </div>
        )
    }
}

export default Home;
