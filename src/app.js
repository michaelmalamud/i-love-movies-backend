if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

//imports errorHandler function

const errorHandler = require("./errors/errorHandler");
const moviesRouter = require("./movies/movies.router.js");

const app = express();


//used movies router for all endpoints from /movies, where /movies is "home"

app.use("/movies", moviesRouter)

//handles all errors for correct routes

app.use(errorHandler);


module.exports = app;
