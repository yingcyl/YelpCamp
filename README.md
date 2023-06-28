# YelpCamp
YelpCamp is a site where users can register and log in to create and review campgrounds. 

This project was created using HTML, CSS, Javascript, NodeJS, Express, MongoDB, and Bootstrap. 


# Usage

1. Create a .env file in the root directory containing the following environment variables:

```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
MAPBOX_TOKEN=
DB_URL=
```

2. Make sure you have MongoDB installed on your system.
In a terminal window, initialize a MongoDB Database 
```
$ brew services start mongodb-community@6.0
```
3. In a second terminal window, install dependencies using npm
```
$ npm install
```
4. After installing dependencies, seed database with random campgrounds with 
```
$ node seeds/index.js
```

5. And then run the application with 
```
$ node app.js
```
6. Open http://localhost:3000 to view it in your browser.



# Acknowledgments
-	This project was based on [Colt Steel's Web Development Bootcamp] (https://www.udemy.com/course/the-web-developer-bootcamp/).

