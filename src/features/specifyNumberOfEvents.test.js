import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('when a user did not specify number of events default is 32', ({ given, when, then }) => {
    	given('Page it is showing event', () => {

    	});

    	when('user is it no specifying clicking event', () => {

    	});

    	then('thirtytwo events are showing to user by default', () => {

        });
    
    });
    test('user can change the number of event they want to see', ({ given, when, then }) => {
    	given('events page it is showing to the user', () => {

    	});

    	when('User specifying the number of events he wants to view', () => {

    	});

    	then('change number of events', () => {

    	});
    });

});