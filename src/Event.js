import React, { Component } from "react";



class Event extends Component{
    state = {
        showDetails: false
    };
  
    toggleEvent = ()=> {
        this.setState({
            showDetails: this.state.showDetails ? false : true
        })
    }
    renderDetails = ()=>{
        const { event } = this.props;

        if(this.setState.showDetails){
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
             <p className="description">{event.description}</p>
             <p className='event-location'>{event.location}</p> 
            <h1 className="event-summary">{event.summary}</h1>
            <button className="details-button" onClick={this.toggleEvent}></button>
            {this.renderDetails()}
           
            </div>
        )
    }
}
export default Event;