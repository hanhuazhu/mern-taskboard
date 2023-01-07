# Purpose
This project serves as experience for tackling more complex 
projects in the future.
The website can be accessed through [HERE](https://strong-selkie-bc67a4.netlify.app)

# Features
Create, Read, Update, and Delete capabilities

Task modal for further details

# Local installation 
Change the .env's contents, within server, for your specific setup
In api.js, within client, change the domain to http://localhost:8000

Within the console:
To start the server, enter npm run serve 
To start the client, enter npm start 

This project is under a MIT license, feel free to use it however you want.

# Problems
I didn't adhere fully to my own conventions as the project grew larger and prior conventions proved to be ineffective.

The CSS was sloppily done and wasn't written with responsiveness first in mind 
There is CSS within inappropriate levels of nesting that made it hard
to maintain.

CRUD operations lead to re-renders that cause data fetches to occur more than 
necessary, how this affects performance I have yet to test.

# Potential Future Additions / Things to Implement
Server-side pagination, filtering, and sorting.
Further validation on user input.
Username logins and authentification.
An archival feature that makes it so 'deleting' an entry is less permanent.
Responsive design for different screen sizes.