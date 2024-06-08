## Cineflix

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X). Frontend Mentor challenges help you improve your coding skills by building realistic project.


## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

## Screenshot

[![photo-2024-06-09-03-16-25.jpg](https://i.postimg.cc/3JcGXxSh/photo-2024-06-09-03-16-25.jpg)](https://postimg.cc/2Vn3mrN9)

[![photo-2024-06-09-03-16-28.jpg](https://i.postimg.cc/J4nJHkQK/photo-2024-06-09-03-16-28.jpg)](https://postimg.cc/SjBjwj3z)

[![photo-2024-06-09-03-16-31.jpg](https://i.postimg.cc/YCLWbBZW/photo-2024-06-09-03-16-31.jpg)](https://postimg.cc/rDcsw38V)


## My process

This was one of the best project which i have done on React.js as when i saw the design layouts on what all to add, it clicked my head that here we will need to create a card component and simply mapit to the data.json file, and then just simply arrange in grids format.
For different pages like movies, tvseries, bookmarks i had to just use fiter method to get the right cards on that page.
Search functionality was also simple, just used a state to manage what string is being typed and according to the characters in that string map the cards which have those charachters in the titles.
The authentication part was handeled by firebase.
The tough part here which i found out was to add routes to the pages and also creating public and protected routes.

## Tech Stack

- React.js
- React Router Dom
- Firebase
- Vanilla CSS


## What I learned

- how to use react-router-dom to to routing in web pages
- how to manage public and private routes
- to to map and filter data to card component
- how to integrate firebase for authentication

## Acknowledgements

I would like to acknowledge Frontend Mentor for providing such good level challeneges. This really helps me to understand in which part do I lack and how should I tackle it.
