import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} eventNumber={20} />);
  });
    test('render text input', () => {
      expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });
    test('renders text number input ', () => {
        const number = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.number-input-event').prop('value')).toBe(number);
      });
      test('change state when input changes', () => {
         const eventObject = { target: { value: 2 } };
        NumberOfEventsWrapper.find('.number-input-event').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
      });

  });