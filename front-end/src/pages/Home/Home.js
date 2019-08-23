import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    state = {
        index: 0,
    }

    componentDidMount() {
        this.setBackgroundImage()
    }

    images = [
        'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1556767302-9cc8328e12f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80'
    ]
    setBackgroundImage = () => {
        let i = 0;
        setInterval(() => {
            this.setState({
                index: i++,
            })
            if (i >= this.images.length) {
                i = 0
            }
        }, 3000)
    }
    render() {
        console.log(this.state.index)
        return (
            <div className="home-body">
                <section className="home-carousel">
                    <div className="carousel-image-container">
                        <img className="carousel-image" src={this.images[this.state.index]} alt="picture of city" />
                        <button>Prev</button>
                        <button>Next</button>
                    </div>


                </section>
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