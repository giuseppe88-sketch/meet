import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
    test('render text input', () => {
      const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.find('.number-event')).toHaveLength(1);
    });
  });