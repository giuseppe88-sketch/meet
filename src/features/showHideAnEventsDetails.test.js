import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import App from '../App'
import { mockData } from '../mock-data';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
let event = mockData[0];

defineFeature(feature, test => {
    test('an event is collapsed by default.', ({ given, when, then }) => {
    	let EventWrapper, EventListWrapper, AppWrapper;
        given('an event is collapsed', () => {
            AppWrapper = mount(<App />);
            AppWrapper.update();
            const EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    	});
        
    	when('user has click the city', () => {
            EventWrapper = shallow(<Event event={event} />);
            expect(EventWrapper.state('showHideDetails')).toBeFalsy();
            EventWrapper.find('.details-btn').simulate('click');
    	});

    	then('user has to be able to exit or see more details', () => {
            expect(EventWrapper.state('showHideDetails')).toBeTruthy();
    	});
    });

  
    test('user can expand an event to see its details', ({ given, when, then }) => {
    	let EventWrapper;
        given('user selected the city and events are showed to him', () => {
            EventWrapper = shallow(<Event event={event} />);
            expect(EventWrapper.state('showHideDetails')).toBeFalsy();
    	});

    	when('user has clicked the details of the apposite event', () => {
            EventWrapper.find('.details-btn').simulate('click');
    	});

    	then('event its expanded and now the user can see the details', () => {
            expect(EventWrapper.state('showHideDetails')).toBeTruthy();
    	});
    });
  
  
    test('USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS', ({ given,when, then }) => {
        let EventWrapper;
        given('event expanded', () => {
            EventWrapper = shallow(<Event event={event} />);
            EventWrapper.find('.details-btn').simulate('click');
            expect(EventWrapper.state('showHideDetails')).toBeTruthy();
  
      });
       when('user click to hide details', () => {
        EventWrapper.find('.details-btn').simulate('click');
      });
  
      then('event it is collapsed and details are hide', () => {
        expect(EventWrapper.state('showHideDetails')).toBeFalsy();
      });
  
      
    });
  });
