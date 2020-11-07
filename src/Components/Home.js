import React from "react";
import { Navbar, Button } from 'react-bootstrap'
import EventSlider from './EventSlider';
import JustAdded from './JustAdded'
import Navigation from '../Components/Navigation'
import * as Icon from 'react-bootstrap-icons';
import Content from '../Components/Content'
import app from "../Authentication/Firebase";
import "../Styles/Home.css"

const Home = () => {
  return (
    <div className="row no-gutters homePage">

      <Navbar className="welcome">
        Welcome, Sanjana
      </Navbar>

      {/* In this Home page, three other components are being rendered */}

      <Content />

      <EventSlider />
      <Navigation />
      <Button href="/addevent" className="addEvent" size="lg">
        Add Event
      </Button>
      <br />
      <br /><br />
      <br /><br />
    </div>
  );
};

export default Home;