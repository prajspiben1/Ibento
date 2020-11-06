import React, {Component} from 'react'
import {Jumbotron, Button, Navbar, Row, Col, Image} from 'react-bootstrap';
import revahack from './reva-hack.JPG';
import { CaretLeft } from 'react-bootstrap-icons';
import './Events.css'

class RevaHack extends Component {

    render() { 
        return ( 
        <div class="container">
        <Navbar className="eventName">
        <a href="/" ><CaretLeft /></a>
        <p className="revaHackTitle">REVA Hack</p> 
        </Navbar>
        <Jumbotron className="eventDetails">
        <Row>
        <Col xs={12}>
        <Image src={revahack} className="imgPoster" />
        </Col>
        </Row>
        <p>
            REVA HACK 2020 is an Online Hackathon, which means it provides you the opportunity to participate directly from your Home. Hefty Cash prizes and goodies for the winners.
        </p>
        <p>
            <Button variant="primary">Register</Button>
        </p>
        </Jumbotron>

        </div> );
    }
}
 
export default RevaHack;