import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Categories.css'

class Categories extends Component {

    render() { 
        return ( 
            <div class="container" className="categoriesTitle">
                Categories
                <br />
                <br />
                <Container>
                    <Row>
                        <Col xs={3}>
                            <p className="artsCategory">Arts</p>
                        </Col>
                        <Col xs={3}>
                            <p className="sportsCategory">Sports</p>
                        </Col>
                        <Col xs={3}>
                            <p className="codingCategory">Coding</p>
                        </Col>
                        <Col xs={3}>
                            <p className="eventsCategory">Events</p>
                        </Col>

                    </Row>
                </Container>
                
                
                {/* <div class="row lg-12">
                <div class="col" className="categoriesAvailable">
                    <p>Arts</p>
                </div>
                <div class="col" className="categoriesAvailable">
                    <p>Sports</p>
                </div>
                <div class="col" className="categoriesAvailable">
                    <p>Coding</p>
                </div>
                <div class="col" className="categoriesAvailable">
                    <p>Events</p>
                </div>
                <div class="col" className="categoriesAvailable" >
                    <p>Competitions</p>
                </div>
            </div> */}
        </div>
         );
    }
}
 
export default Categories;