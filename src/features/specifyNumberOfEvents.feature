Feature: specify number of events


Scenario: when a user did not specify number of events default is 32
Given Page it is showing event
When user is it no specifying clicking event
Then thirtytwo events are showing to user by default

Scenario: user can change the number of event they want to see
Given events page it is showing to the user
When User specifying the number of events he wants to view
Then change number of events
