# library.

This project was designed to allow practice with objects in JS.
The card tiles are made from the array of "Book" objects that are made with an object constructor. The cards are designed to look like the card catalog cards used in libraries before digital card catalogs. The cards are appended to the DOM when the page loads, or when a new book is added. Each time a card is added or removed, all cards are redrawn and reassigned unique identifiers for the delete and read buttons to correspond with thier location in the array.

The read button toggle was built with assistance from an article on W3schools.

The "Add Book" button was changes the display of the new book div from "none" to "grid". The form is absolutely positioned to lie on top of the card container. I wrote a function to check that all fields are completed before a book can be added. The "add book" button on the top right turns into a cancel button to exit the form.

X Typewriter font by GGBotNet
