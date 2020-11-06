import React, { Component } from 'react';
import WeeklyCalendar from './WeeklyCalendar'
import Categories from './Categories'
import '../Styles/Content.css';


class Content extends Component {
    render() { 
        return ( 
            <div class="container">
                {/* <img alt="" className="featuredEvent" src={revaHack} /> */}
                <br />
                <WeeklyCalendar />

                <Categories />
            </div>
         );
    }
}
 
export default Content;