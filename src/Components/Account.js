import React, { Component } from 'react';
import Me from '../Styles/person.jpg'
import {Jumbotron, Row, Col, Image, Navbar} from 'react-bootstrap';
import { Sliders, Calendar3, Bell, BoxArrowInLeft, CaretLeft } from 'react-bootstrap-icons';
import '../Styles/Account.css'

class Account extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="container">
            <Navbar className="welcome">
        <a href="/"><CaretLeft /></a>
        <h3 className="addEventTitle">My Profile</h3>
        </Navbar>
            <Jumbotron className="myProfile">
            <Row>
                
                <Image src={Me} roundedCircle style={{width: "200px", height: "200px"}} />
            <div className="details">
                <h1>Sanjana Shivakumar</h1>
                <div>
                   <h2> REVA University </h2>
                </div>
            </div>
            </Row>
            </Jumbotron>

            <div class="col-md-12" className="accountList">
            
            <ul class="list-group" >
                <a href="/account">
                    <li class="list-group-item">
                    <Sliders className="accountIcons"/>
                    Account Settings
                    </li>
                </a>
                    <a href="/calendar">
                    <li class="list-group-item">
                    <Calendar3 className="accountIcons"/>
                    Calendar
                    </li>
                </a>
                <a href="/notifications">
                    <li class="list-group-item">
                    <Bell className="accountIcons"/>
                    Notifications
                    </li>
                </a>
                    <a href="/Ibento">
                    <li class="list-group-item">
                    <BoxArrowInLeft className="accountIcons"/>
                    Sign Out
                    </li>
                </a>
            </ul>
        </div>
    </div>
         );
    }
}
 
export default Account;