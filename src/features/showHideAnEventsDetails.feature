Feature: show hide an event's details

Scenario: an event is collapsed by default.
Given an event is collapsed
When user has click the city
Then user has to be able to exit or see more details

Scenario: user can expand an event to see its details
Given user selected the city and events are showed to him
When user has clicked the details of the apposite event
Then event its expanded and now the user can see the details


Scenario: user can collapse an event to hide its details
Given event expanded
When user click to hide details
Then event it is collapsed and details are hide