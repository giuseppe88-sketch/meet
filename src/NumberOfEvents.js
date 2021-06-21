import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component{
state = {
    numberOfEvents :20,
    ErrorText:""
}
handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        ErrorText: 'Please choose a number between 1 and 20',
        numberOfEvents: ''
      });
    } else if (value > 20) {
      return this.setState({
        ErrorText: 'Please choose a number between 1 and 20',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
        ErrorText: '',
      });
      this.props.updateEvents('', value);
    }
  };
    render(){
        return(
            <div className="numberOfEvents">
               <ErrorAlert text={this.state.ErrorText} />
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
NumberOfEvents.propTypes = {
  updateEvents: PropTypes.func.isRequired
}

export default NumberOfEvents
