import React, { Component } from 'react';
import './Styles/Landing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination } from 'swiper';

import collaborate from './Styles/collaborate.jpg'
import conduct from './Styles/conduct.jpg'
import learn from './Styles/learn.jpg'


Swiper.use([Navigation, Pagination]);

class landing extends Component {
componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
 
        },
      });

}

    render() {

        return (
            <div className="App">
                <div className="container">
                <Navbar className="Appname">Ibento</Navbar>
                <br />
                <div class="jumbotron-fluid">
                <div class="container">
                    <h1 class="display-5">Collaborate. Organize. Learn</h1>
                    <p class="lead">An all in one patform for promoting and organizing events, workshops and seminars.
                    No more missing out!</p>
                </div>
                </div>

                <br /><b />

                <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide"><img src={collaborate} />
                <div className="centered">Plan and Organize your events</div></div>
                <div class="swiper-slide"><img src={conduct} />
                <div className="centered">View available venues </div></div>
                <div class="swiper-slide"><img src={learn} />
                <div className="centered">Notify Everyone with one click!</div></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <br />
            <a href="signup" class="btn btn-outline-dark btn-lg btn-block">Get Started!</a>

            <br />
            <br />
             </div> 
            </div>
        );
    }
}

export default landing;