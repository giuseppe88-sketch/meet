import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';
import { text } from 'express';


describe('<Event /> component',()=>{
    let event, EventWrapper;
    beforeAll(() => {
      event = mockData[0];
      EventWrapper = shallow(<Event event={event} />);
    });

    test('shallow event should render location data', () => {
        expect(EventWrapper.find('.event-location').text()).toBe(event.location);
      });
    test('render summary',()=>{
        expect(EventWrapper.find('.event-summary').text()).toBe(event.summary);
    })
    test('render show details button',()=>{
        expect(EventWrapper.find('.details-btn')).toHaveLength(1)
    })
    text('render collapsed details after click show-details',()=>{
        EventWrapper.find('.details-button').simulate('click');
        expect(EventWrapper.state('showDetails')).toBeFalsy();
    })
    
    text('render collapsed details after click show-details',()=>{
        EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBeTruthy();
    })
    
})