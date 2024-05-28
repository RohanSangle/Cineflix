# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X). Frontend Mentor challenges help you improve your coding skills by building realistic project.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/amjadsh97/entertainment-web-app)
- Live Site URL: [Add live site URL here](https://entertainment-web-app-liart-phi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Typescript
- [React](https://reactjs.org/) - JS library
- [React Router Dom](https://reactrouter.com/en/main) - JS library
- [Firebase](https://firebase.google.com/) - backend auth


### What I learned


```js
const [data, setData] = useState<Video[]>([]);

// Function to set data from local storage
const setDataFromLocalStorage = () => {
	const storedData: any = localStorage.getItem('data') || dataJSON;
	if (storedData) {
		setData(JSON.parse(storedData));
	}
};

useEffect(() => {
	setDataFromLocalStorage();
}, []); // Run once on component mount

//code to handle the differenet sizes of images
{data.map((item: Video, index: number) => (
	//some elements...
	<article className={`card ${isTrending ? "card-overlay" : "stacked-card"}`} key={index}>
      <picture>
	    {item.isTrending && item.thumbnail.trending && (
		<>
			<source srcSet={require(`../../assets/${item.thumbnail.trending.large}`)}
			        media='(min-width: 1170px)'/>
			<img src={require(`../../assets/${item.thumbnail.trending.small}`)} alt=''/>
		</>
	    )}
	    {!item.isTrending && (
		  <>
			<source srcSet={require(`../../assets/${item.thumbnail.regular.large}`)} media='(min-width: 1170px)'/>
			<source srcSet={require(`../../assets/${item.thumbnail.regular.medium}`)} media='(min-width: 768px)'/>
			<img src={require(`../../assets/${item.thumbnail.regular.small}`)} alt=''/>
		  </>
	    )}
      </picture>
    //some elements...
    </article>
))}
```

### Continued development

In the future, I will prioritize further developing my skills in make full stack app  backend app.


### Useful resources

- [React Docs](https://react.dev/) - This helped me for building react components. I really liked using this docs.


## Author

- Website - [Amjad Shadid](https://amjadshadid.vercel.app/)
- Frontend Mentor - [@amjadsh97](https://www.frontendmentor.io/profile/amjadsh97)
- Twitter - [@Amjadshadid](https://twitter.com/Amjadshadid)
- Linkedin - [@Amjad Shadid](https://www.linkedin.com/in/amjad-shadid-134355134/)