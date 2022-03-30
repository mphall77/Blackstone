Blackstone Frontend Takehome Coding Challenge
Coding challenge where you build a Meeting Room Booking App client that interacts with a RESTful API using React.

Prerequisutes
Knowledge of Javascript/Typescript and React

Getting Started
Create a Database.
You may use any type of db.
Create a backend api service App.
You may use any language.
Complete your api service application according to the Technical requirements below
Create a new React App.
You may use create-react-app
Complete your client application according to the Technical requirements below

Technical Requirements
Create a Meeting Room Booking application. Users are able to:

Room management:
View all meeting rooms
Create a meeting room
View room bookings

Booking management:
View all bookings
Book a meeting room
Cancel booking
Find available rooms (optional extra challenge)
Notes:
You may use any 3rd-party libraries or packages for functionality or styling We recomment you use something like Bootstrap or Material UI or others to style your app.

DB
Create a database with 2 tables: MeetingRoom and Booking The tables should have Identity columns for the Ids and any necessary columns based on requirements and payloads below.

API
Create a RESTFul API service with the below endpoints that read and write to the database. It should accept and return JSON payloads.


Wireframes
Your application doesn't have to look exactly as the wireframes below, however it should have all the main components, accomplish all the functionality and be visually pleasing.
Web Wireframes can be found here

App Pages/Views
Your Room Booking App should have the following pages (and be displayed at their respective browser url).

Home /
Displays a nav bar or navigation menu that would take the user to Meeting Rooms, Bookings and New Room pages. This navbar should be visible on all pages/views.
Below the navbar display a list of all meeting rooms.
When you click in one of the meeting rooms of the list it should take the user to the meeting room page.
Extra challenge: Above list, display a form to look for available rooms. The form must include Start Date, End Date, Floor and Capacity input fields and a Find button. The Floor and Capacity inputs should be optional and all others required. The result should filter list of meeting rooms to display only the available ones.

Single Meeting Room /meetingrooms/:id
Displays the details of the meeting room and below it all its future bookings.
Display a form to book the meeting room. The form must include Meeting Name, Start Date, End Date and Attendees input fields and a Submit button. The Attendees input should be optional and all others required. Show a success message upon successful booking creation and an error message otherwise.
Should also display a list of all existing future bookings and when you click in one of the bookings of the list it should take the user to that booking's page/view.

New Meeting Room /meetingrooms/new
Display a form where a user (admin) can create a meeting room. The form must include Name, Capacity and Floor input fields and Submit button. All inputs are required. Show a success message upon successful meeting room creation and an error message otherwise.

Bookings /bookings
Displays a list of all future bookings for all meeting rooms and when you click in one of the bookings of the list it should take the user to that booking's page/view.

Single Booking /bookings/:id
Displays the details of the booking and a button to cancel it. Clicking Cancel should prompt user to confirm that they want to cancel booking. If they choose Yes it should cancel booking and if they choose No it should do nothing. Show a success message upon successful booking cancelation and an error message otherwise.

Submission Guidelines
We think this challenge would take ~7 hours to complete, so allocate your time appropriately.
You must submit your solution no later than Monday, May 31st at 11:59pm.
Include a README.md file with instructions on how to run your project.
Submit your code compressed in a zip file using the submission form
Make sure to remove your node_modules/ folder before compressing
For any questions reach out to @Alejo in the Pursuit Core Workspace README.md Displaying README.md.
