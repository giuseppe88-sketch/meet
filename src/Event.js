import React, { Component } from "react";



class Event extends Component{
    state = {
        showDetails: true
    };
  
    toggleEvent = ()=> {
        this.setState({
            showDetails: this.state.showDetails === true ? false : true
        })
    }
    renderDetails = ()=>{
        const { event } = this.props;

        if(this.setState.showDetails === false){
           return(
                <div className="event-details">
          <h2>Details</h2>
            <p>{event.description}</p>
             <p className="details-status">{event.status}</p>
             <a href={event.htmlLink}
                className="link-event">
             See details on Google Calendar   
             </a>
        </div>
        )
      }
    }
     
    
 
    render(){
        const { event } = this.props
        return(
            <div className="event">  
            <h3 className="event-summary">{event.summary}</h3>
            <p className='event-start-date'>
          {event.start.dateTime}, {event.start.timeZone}
            </p>
             <p className='event-location'>{event.location}</p> 
            <button className="details-btn" onClick={this.toggleEvent}>Show details</button>
            {this.renderDetails()}
           
            </div>
        )
    }
}
export default Event;