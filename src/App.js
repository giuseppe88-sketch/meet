import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './nprogress.css';
import './App.css';
import { getEvents, extractLocations} from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 20
    
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        const finalEvent = events.slice(0, this.state.numberOfEvents)
        this.setState({ events: finalEvent, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === 'all' && eventCount === 0 
        ? events
          : location !== 'all' && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.filter((event) => event.location === location).slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  };
  
  render() {
    
    return (
      <div className="App">
           <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/> 
           <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
           <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
