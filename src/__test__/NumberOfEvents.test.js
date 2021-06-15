import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
    test('render text input', () => {
      const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });
    test('renders text number input ', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        const number = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.number-input-event').prop('value')).toBe(number);
      });
      test('change state when input changes', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
         const eventObject = { target: { value: 2 } };
        NumberOfEventsWrapper.find('.number-input-event').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
      });

  });