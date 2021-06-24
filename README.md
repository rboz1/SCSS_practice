# SCSS_practice

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

## My process

### Built with

- Semantic HTML5
- CSS3 (Sass/SCSS)
- Flexbox
- CSS Grid

### What I learned

Proud of this code!

```html
 <picture class="egg">
     <source srcset="images/desktop/image-transform.jpg" media="(min-width: 751px)"/>
     <source srcset="images/mobile/image-transform.jpg" media="(max-width: 750px)"> 
     <img src="images/desktop/image-transform.jpg" alt="Image of an egg"/>
  </picture>
```

```css
@mixin overlay($theme: $graphic){

    .text-overlay{
        color: $theme;
        position: absolute;
    
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    
        bottom: 2%;
        padding: 27%;
        line-height: 1.7em;
        height: 3em;
        text-align: center;
    }

    h3{
        font-family: $font-headers;
        font-size: 1.8rem;
    }

    p{
        font-family: $font-body;
        opacity: 0.7;
    }
}
```

### Continued development

This challenge definitely tested my layout skills! I also learned that **Google Devtools** is just a simulator and not always an accurate representation of what is displayed on a mobile screen. In my case, some images were being stretched vertically on my phone but looked normal when I used Devtools. It's best to actually test your mobile layout on a mobile device! I'd be interested to see if there is any other way of testing how things display on a mobile device.

I learned how to use the ```<picture>``` tag in **HTML**, which was really useful when you have 2 different images that are formatted for mobile screens and larger devices.

I was also pretty excited to learn how to use mixins with **SCSS**, it helped with code re-use a lot. Especially when I had the same layouts for 2 sections they used different font colors! I was able to use a mixin and pass in the correct font color for each section.
 
I want to continue using **Grid**, **Flexbox**, and (the entire point of this project) **SCSS**! **SCSS** is amazing. I love the nesting, mixins, and being able to use variables.

### Useful resources

- [Deciding on a CSS Preprocessor](https://www.lambdatest.com/blog/css-preprocessors-sass-vs-less-vs-stylus-with-examples/?utm_source=Reddit&utm_medium=blog&utm_campaign=PM-080720-1&utm_term=OrganicPosting) - A great article to understand the pros and cons the many CSS preprocessors out there. I went with Sass because it is the most used and they declare variables with **$** instead of **@** like LESS does. I am curious to try PostCSS in the future. 
- [Sass Website](https://sass-lang.com/guide) - You gotta start somewhere! This allowed me to get the SCSS foundations I needed.
- [Mixins vs Extend](https://kirillibrahim.medium.com/sass-mixin-vs-extend-ac4dfb9892c4) - A brief but helpful article on when to use a mixin or extend/inheritance.
- [Grid Critters](https://gridcritters.com/) - A game for learning Grid that I want to play!

## Author

- Website - [Rachel Bozadjian](https://www.your-site.com)

# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
