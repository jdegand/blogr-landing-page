# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./blogr-desktop.png)
![](./blogr-mobile.png)

### Links

- Live Site URL: [Github Pages](https://jdegand.github.io/blogr-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow

### What I learned

- Picture is imperative and srcset is declarative. 
- Doing the javascript for the mobile version before styling the desktop version lead to a less optimal result.
- However, I do think it is worthwhile to get as close to the "final" design asap. 

### Continued development

- In the mobile nav, I made the nav fixed height and width and used overflow:scroll.  I also prevented scrolling on the body.  
- Changing the scrollbar color and track width is not yet supported beyond firefox.  
- Duplicated img arrow vs using a picture element creates problems for the JS
- Picture element --> HTMLElement vs Node considerations 

### Useful resources

- [Modern CSS](https://moderncss.dev/custom-select-styles-with-pure-css/) - custom select
- [W3 Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) - responsive nav
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) - void
- [CSS Tricks](https://css-tricks.com/perfect-full-page-background-image/) - background image
- [Coder Coder](https://coder-coder.com/z-index-isnt-working/) - z-index issues
- [Stack Overflow](https://stackoverflow.com/questions/28650327/responsive-images-srcset-not-working) - srcset
- [Stack Overflow](https://stackoverflow.com/questions/58970536/cant-apply-background-gradient) - background gradient
- [CSS Tricks](https://css-tricks.com/almanac/properties/s/scrollbar-color/) - scrollbar color
- [Stack Overflow](https://stackoverflow.com/questions/6821295/add-css-box-shadow-around-the-whole-div) - box shadow
- [Stack Overflow](https://stackoverflow.com/questions/4950115/removeeventlistener-on-anonymous-functions-in-javascript) - anonymous functions
- [Stack Overflow](https://stackoverflow.com/questions/45383042/reverse-order-of-columns-in-css-grid-layout) - reverse grid columns
