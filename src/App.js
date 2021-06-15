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
    numberOfEvents: 32
    
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
  render() {
    
    return (
      <div className="App">
           <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/> 
           <NumberOfEvents numberOfEvents={this.state.numberOfEvents}/>
           <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
