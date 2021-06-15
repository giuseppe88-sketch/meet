import React, { Component } from 'react';

class NumberOfEvents extends Component{
state = {
    numberOfEvents :20
}
handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 20',
        numberOfEvents: ''
      });
    } else if (value > 20) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 20',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
      this.props.updateEvents('', value);
    }
  };
    render(){
        return(
            <div className="numberOfEvents">
              <p>Number of Events:</p>
                <input
                 type="number"
                 className="number-input-event"
                 placeholder="Enter number of Events"
                 value={this.state.numberOfEvents}
                 onChange = {this.handleInputChanged}
                 
                 />
           </div>
        )
    }
}
export default NumberOfEvents
