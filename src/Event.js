import React, { Component } from "react";
import PropTypes from 'prop-types';


class Event extends Component{
    state = {
        showHideDetails: false
    };
  
    toggleEvent = ()=> {
        this.setState({
            showHideDetails: this.state.showHideDetails === true ? false : true
        })
    }; 
 
    render(){
        const { event } = this.props
        return(
            <div className="event">  
            <h3 className="event-summary">{event.summary}</h3>
            <p className='event-start-date'>
          {event.start.dateTime}, {event.start.timeZone}
            </p>
            <p className='event-location'>{event.location}</p> 

            {this.state.showHideDetails && (
          <div className='event-details'>
            <h2>About event:</h2>
            <a href={event.htmlLink}>See Details on Google Calendar</a>
            <p className="description">{event.description}</p>
          </div>
        )}
            <button className="details-btn" onClick={this.toggleEvent}>Show details</button>
            {!this.state.showHideDetails ? 'Show Details' : 'Hide Details'}
           
            </div>
        )
    }
}
Event.propTypes={
    event:PropTypes.shape({
        summary:PropTypes.string.isRequired,
        location:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
    }).isRequired,
    
}
export default Event;