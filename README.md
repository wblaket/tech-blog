# The 302 
MERN Stack Application for a technical blog.

## Table of Contents
* General Info
* Technologies 
* Installation
* Future
* Sources

## General Information
The 302 is a tech blog built with the MERN stack. Article information is hosted on a MongoDB server. Readers are able to browse, upvote, and comment
on article pages. 

## Technologies
This application is created with the MERN stack:
* React 17.0.2
* MongoDB 3.6.8
* Express.JS 4.17.1
* Node.JS

Other React dependencies include:
* React-Router
* React-Icons
* Semantic UI React
* React Helemet 

## Database Requirements
This project requires a MongoDB database named "tech-blog" and a collection within that database called "articles"
The data.json file included in the repository contains the starter data needed for the project. You can use a program 
such as MogoDB Compass to quickly the data for the project.

## Installation
This application is not yet available for a demo. To run the project, download the repository to your computer.
Create two terminal windows:

* In the first terminal, navigate to the  dog-walker-main/dog-walker-backend directory and run the command:

```
 npx babel-node src/server.js

```

* In the second terminal navigate to: dog-walker-main/dog-walker and run the command:

```
  npm start 
```

## Future
Additional updates being planned:
* As it stands the articles themselves are fairly basic and are meant to fill in space. I would like to flesh out the existing articles and 
write additional articles to fill more space.
* Introducing a search feature where users can search for articles based off name, tag, subject, etc.
* Currently the article list is pulling from a local JS file instead of the MongoDB server, I would like to implement
a GET request that pulls down a complete list of document names from the articles colleciton. 
## Sources
This project is partially based on the project built with the online course "React: Creating and Hosting a Full-Stack Site" on Linkedin Learning/Lynda.com. This course can be found at: https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site
