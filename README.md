## React Login MERN Stack

This is simple login and signup for React.

### Problems
* Facing internal server error (500) while logout
* No notification implementation for every succeess login and signup but it can be seen through the console (WIP)

### Installations
npm install
* --save axios body-parser express morgan
* -g nodemon
* concurrently --save-dev
* --save mongoose
* --save express-session
* --save passport passport-local bcryptjs
* connect-mongo

### Hot Reload Server
* In package.json add in scripts:

   "api": "nodemon ./server/server.js",
   
   "dev": "concurrently \"react-scripts start\" \"nodemon server/server.js\""
