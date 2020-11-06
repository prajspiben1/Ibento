import React, { Component } from 'react';
import WeeklyCalendar from './WeeklyCalendar'
import Categories from './Categories'
import '../Styles/Content.css';


class Content extends Component {
    render() { 
        return ( 
            <div class="container">
                
                <br />
                <WeeklyCalendar />
                <Categories />
            </div>
         );
    }
}
 
export default Content;