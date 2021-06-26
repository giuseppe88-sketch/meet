import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import './nprogress.css';
import './App.css';
import { getEvents, extractLocations } from './api';
import { NotificationAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 20,
    notificationText:''
    
  }
  componentDidMount() {
    this.mounted = true;

    if (navigator.onLine === false) {
      this.setState({
        notificationText:
          'App is offline, list may be not up to date',
      });
    } else {
      this.setState({
        notificationText: '',
      });
    }

    getEvents().then((events) => {
      if (this.mounted) {
        const finalEvent = events.slice(0, this.state.numberOfEvents)
        this.setState({ events: finalEvent, locations: extractLocations(events) });
      }
    });
  
}
getData = () => {
  const {locations, events} = this.state;
  const data = locations.map((location)=>{
    const number = events.filter((event) => event.location === location).length
    const city = location.split(', ').shift()
    return {city, number};
  })
  return data;
};

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
          : events.slice(0, eventCount);
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
           <h1>MeetApp</h1>
           <h4>Choose your nearest city</h4>
           <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/> 
           <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
           <NotificationAlert text={this.state.notificationText}/>
           <h4>Events in each city</h4>
          
          <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
           <ResponsiveContainer height={400} >
           <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
          >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
          </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
