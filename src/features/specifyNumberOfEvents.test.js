import React from 'react';
import App from '../App';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';
let event = mockData[0];

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('when a user did not specify number of events default is 32', ({ given, when, then }) => {
    	let AppWrapper, EventListWrapper, NumberOfEventsWrapper;
		given('Page it is showing event', () => {
			AppWrapper = mount(<App />);
			AppWrapper.update();
			const EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    	});

    	when('user is it no specifying clicking event', () => {
			NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} eventNumber={20} />);
			const number = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.number-input-event').prop('value')).toBe(number);  
    	});

    	then('thirtytwo events are showing to user by default', () => {
			const EventListWrapper = shallow(<EventList events={mockData} />);
			expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });
    
    });
    test('user can change the number of event they want to see', ({ given, when, then }) => {
    	let AppWrapper, EventListWrapper, NumberOfEventsWrapper;
		given('events page it is showing to the user', () => {
			AppWrapper = mount(<App />);
			AppWrapper.update();
			const EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    	});

    	when('User specifying the number of events he wants to view', () => {
			NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} eventNumber={20} />)
			const eventObject = { target: { value: 2 } };
        NumberOfEventsWrapper.find('.number-input-event').simulate('change', eventObject);
    	});

    	then('change number of events', () => {
			expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
    	});
    });

});