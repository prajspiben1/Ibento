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
    <div className="row no-gutters">

    <Navbar className="welcome">
      Welcome, Sanjana
    </Navbar>

    <Content />
    <br />

    <EventSlider />
    <Navigation />
    <br />

    <Button href="/addevent" className="addEvent" size="lg">
      Add Event
    </Button>
    <br />

      {/* bottom navigation */}

      {/* <Navbar fixed="bottom" className="homeNavbar">
        <div className="navIcons">
        <Icon.HouseDoor className="home" size={35} />
        <Icon.BookmarkHeart className="bookmark" size={35} />
        <Icon.Search className="find" size={35} />
        <Icon.Person className="profile" size={45} />
        </div>
      </Navbar> */}
      
    {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
    </div>
  );
};

export default Home;