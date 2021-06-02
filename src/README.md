# myMeet APP

Progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events

## Table of contents

* [Technologies used] (#technologies)
* [User stories & Scenarios] (#User stories & scenarios)
* [Project link] (#Project link)

## Technologies

Project is created with:

* javascript
* Node.js
* React
* Jest
* Jest Cucumber
* Visual Studio Code

## User stories & Scenarios

```
Feature 1: FILTER EVENTS BY CITY

    • As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city
      
SCENARIO 1: When user hasn’t searched for a city, show upcoming events from all cities.

GIVEN: user hasn’t searched for any city
WHEN: the user open the app
THEN: the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTION WHEN THEY SEARCH FOR A CITY

GIVEN: the main page is open
WHEN: user start typing in the city textbox
THEN: the user should see a list of suggestion that matches what they type

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGEST LIST

GIVEN:The user was typing Berlin in the city textbox and the list of suggested city is showing
WHEN: the user select a city from the list
THEN: their city should be changed and the user can see list events


Feature 2 : SHOW/HIDE AN EVENT’S DETAILS

    • As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
GIVEN: an event is collapsed
WHEN: user has click the city
THEN:user has to be able to exit or see more details

SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS
GIVEN: user selected the city and events are showed to him
WHEN:user has clicked the details of the apposite event
THEN: event its expanded and now the user can see the details


SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS
GIVEN: event expanded
WHEN: user click to hide details
THEN: event it is collapsed and details are hide

Feature 3: SPECIFY NUMBER OF EVENTS

    • As a user I would like to be able to specify the number of events I want to view on the app so I can see more or fewer number of events in the list at once

SCENARIO 1: WHEN A USER DID NOT SPECIFIED NUMBER OF EVENTS DEFAULT IS 32
GIVEN:Page it is showing event
WHEN: user is it no specifying clicking event
THEN: 32 events are showing to user by default

SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE
GIVEN: events page it is showing to the user
WHEN:User specifying the number of events he wants to view
THEN: change number of events

Feature 4: USE THE APP WHEN OFFLINE

    • As a user I want to be able to use the app while offline 

SCENARIO 1: SHOW CACHED DATA WHEN THERE S NO CONNECTION
GIVEN: connection fails or app is offline
WHEN: user is using the app 
THEN : save data are showed to the user

SCENARIO2: SHOW ERROR WHEN USER CHANGES THE SETTINGS(CITY, TIME RANGE)
GIVEN: app is open to settings but offline
WHEN: user is on setting page trying changing city or time range
THEN: error pop up and shows to the user

Feature 5: DATA VISUALIZATION 

    • As a user I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city
      
SCENARIO 1: SHOW A CHART WHIT THE NUMBER OF UPCOMING EVENTS IN EACH CITY
GIVEN: user is using the app
WHEN:user is on main page
THEN: a chart is showing to the user 

```

## Project Link

* [https://giuseppe88-sketch.github.io/meet/]