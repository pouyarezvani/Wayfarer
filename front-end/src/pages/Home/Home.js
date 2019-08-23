import React, { Component } from 'react';
// internal components
import Login from '../../components/Auth/Login/Login';
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
        'https://images.unsplash.com/photo-1493540554008-8e3008329feb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
    setBackgroundImage = () => {
        let i = this.state.index;
        setInterval(() => {
            this.setState({
                index: i++,
            })
            if (i >= this.images.length) {
                i = 0
            }
        }, 3000)
    }

    incrementCarousel = () => {
        if (this.state.index !== this.images.length - 1) {
            clearInterval()
            this.setState((prevstate) => { index: prevstate.index++ }, () => {
                this.forceUpdate()
            })
        } else {
            this.setState({ index: 0 }, () => this.forceUpdate());
        }

    }
    decrementCarousel = () => {
        if (this.state.index !== -1) {
            this.setState({ index: this.state.index-- })
        } else {
            this.state.index = this.images.length - 1;
        }

    }
    render() {
        console.log('rerender?');
        return (
            <div className="home-body">
                <section className="home-carousel">
                    <div className="carousel-image-container">
                        <img className="carousel-image" src={this.images[this.state.index]} alt="picture of city" />
                        <button onClick={this.decrementCarousel} >Prev</button>
                        <button onClick={() => this.incrementCarousel()} >Next</button>
                    </div>
                </section>
                {this.props.login
                    ? <Login />
                    : null
                }
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