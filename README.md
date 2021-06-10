# Aidan's Arcade

https://alienatedsoftware.github.io/Second-Milestone-Aidans-Arcade/

## Table of Contents

1. [Introduction](#Introduction)
    1. [Important Information](#Important-Information)
2. [UX](#UX)
    1. [Ideal User Demographic](#Ideal-User-Demographic)
    2. [User Stories](#User-Stories)
    3. [Development Planes](#Development-Planes)
    4. [Design](#Design)
3. [Features](#Features)
    1. [Design Features](#Design-Features) 
    2. [Existing Features](#Existing-Features)
    3. [Features to Implement in the future](#Features-to-Implement-in-the-future)
4. [Issues and Bugs](#Issues-and-Bugs)
5. [Technologies Used](#Technologies-Used)
     1. [Main Languages Used](#Main-Languages-Used)
     2. [Additional Languages Used](#Additional-Languages-Used)
     3. [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)
6. [Testing](#Testing)
     1. [Testing.md](TESTING.md)
7. [Credits](#Credits)
     1. [Content](#Content)
     2. [Media](#Media)
     3. [Code](#Code)
***

## Introduction

Aidan's Arcade -  Interactive Frontend Development - Code Institute

This project will act as a virtual hub for arcade games so that gamers can enjoy on their owned devices. The focus of the website is to target gamers and bored bored online users to seek a bit of fun to kill time with.

This project will contain a few games to choose from to be able to play on your own device, whenever at work, home or aboard! 

### Important Information

-- Most of these games require a computer to play on, as the games are coded in JS that will only work with keyboard eventlisteners. --

This is my second of four Milestone Porjects that I must complete during the Full Stack Development Porgram over at Code Institute.

The primarialy requirements for this milestone is to make an interactive front end website with the use of **JavaScript**.

[Back to top](#Aidan's-Arcade)

## UX

### Ideal User Demographic

The ideal users of this website are:

- Passionate gamers
- Bored online users wanting to kill time
- Teens

### User Stories

#### Gamers

1. As a gamer, I want to explore the enjoyment of being able to play fun and responsive games from the web.

#### Bored online users

1. As a bored online user, I want to be able to quickly kill time on my work breaks.
2. As a bored online user, I want to distract myself from today's burden.

#### Teens

1. As a teen, I want to enjoy playing games.

### Development Planes

In order to create an engaging website, the developer used their own passion and past memories of playing old flash games, to recreate that special feeling that users a-like would really enjoy spending their time on.

#### Strategy
This website will be focused on the following target audiences:
- **Roles:**
     - Gamers
     - Teens
     - Time Killers

- **Demographic:**
     - 13 - 20+ year olds
     - High School kids - Employee's
     - Gaming Community

- **Psychographics:**
     - Personality & Attitudes:
          - Youthful
          - Achieveous
     - Lifestyles:
          - Modern
          - Geeky

// display what the website needs to do  for users //

#### Scope

// display scope here //

#### Wireframe

![Wireframe]("Wireframe")

###  Design

#### Colour Scheme
The main colours used throughout the website are a mixture of Dark grey, Black and White. (exploding the images used in games).

#### Typography
// Write up font usage //

#### Imagery

The imagery mostly consists of free SVG from "https://www.flaticon.com" and screenshots from game pages that are displayed on homepage.

[Back to top](#Aidan's-Arcade)

## Features

### Navigation Bar

- Logo, clickable which will always take you to the home page.

### Home

- Home screen consists of the playable games on screen, all clickable which will take you to the desired game page.

### Memory Game (card matching)

- A simple classic game of guessing which cards match, will be treated as a fun brain teaser when it comes to memory. All cards are randomly generated for new fresh experiences every replay.

### Flappy Game (flappy bird inspired)

- A responsive flappy bird inspired game, with randomly generated obtacles what the player must avoid. How far will you reach?
## Technology used

### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Link to CSS Wiki")
- [JS](https://en.wikipedia.org/wiki/JavaScript "Link to JS Wiki")

### Frameworks Used
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/ "Link to Bootstrap page")
     - Bootstrap was used to implement the responsiveness of the site, using bootstrap classes.
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts was used to import the fonts "Roboto Condensed" and "RocknRoll One" into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
     - Font Awesome was used on all pages throughout the website to import icons for UX purposes.
- [Git](https://git-scm.com/ "Link to Git homepage")
     - Git was used for version control by utilising the GitPod terminal to commit to Git and push to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
     - GitHub was used to store the project after pushing
- [Balsamiq](https://balsamiq.com/ "Link to Balsamiq homepage")
     - Ba;samiq was used to create the wireframes during the design phase of the project.
- [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
     - Am I Responsive was used in order to see responsive design throughout the process and to generate mockup imagery to be used.

## Testing

Based on the User Stories above, all users will be able to follow the flow of the website to find what they came for according to their stories. However they won't be able to actually fully book a ticket for their tours. This is just a milestone project, not an official website of the band.

Google developer tools was used manually to check and test the live project on all different screen sizes. Used multiple devices and feedback from family & friends who went to the deployed site on their devices.

## Issues and Bugs

**Navbar Bugs**
- Burger Button - Upon first implementing the "burger button" to have the navbar links collaspe into a single button for smaller devices. There was a bug that when users first opened the burger button to reveal all the nav links, the button would no longer close/collaspe. To address this issue, I had to delete a line of code as I linked an extra CDN for bootstrap which caused an interruption with the bootstrap package. 

- Fixed Position - There was an issue upon trying to have the Navbar have a fixed position so it will always remain on top of the screen no matter how far the user scrolls down. Implementing the fixed position using bootstrap meant that I had to use additional CSS to prevent the body of the website from being cropped/hidden by the navbar as the navbar would act as it if was sat on top of the content, rather than on top. Doing this required to add a padding-top by the number of pixels that the navbar is, in this case, 100px.

**Tour Page**
- Callout Sector - When this was implemented onto the site, the developer ran into an issue where the callout appeared on top of everything on the page, including the navbar. Completely eating the whole page. z-index was used to counter this issue, and allowed the callback to be set back behind the navbar, exactly how it should be. Hoever this caused another issue that caused the callout to be unclickable. This was because in the CSS, the absolute value was being used, which removes element from the DOM completely in terms of the normal flow. Removing the position: absolute from the CSS attributes fixed this issue entirely.

## Credits & References

All credits & References go the https://www.freecodecamp.org/ and it's members.

Video tutorials used;

- https://www.youtube.com/watch?v=lhNdUVh3qCc