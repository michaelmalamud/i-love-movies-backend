if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

//imports errorHandler function

const errorHandler = require("./errors/errorHandler");

//imports notFound

const notFound = require("./errors/notFound");


//imports movies Router

const moviesRouter = require("./movies/movies.router.js");

//imports theaters Router

const theatersRouter = require("./theaters/theaters.router.js");

//imports reviews router

const reviewsRouter = require("./reviews/reviews.router.js")

const app = express();

app.use(express.json());

//uses theaters router for all endpoints from /theaters, where /theaters is "home"

app.use("/theaters", theatersRouter);

//uses movies router for all endpoints from /movies, where /movies is "home"

app.use("/movies", moviesRouter);

//uses reviews router for /reviews

app.use("/reviews", reviewsRouter);

//handles non-existent endpoints

app.use(notFound);

//handles all errors for correct routes

app.use(errorHandler);


module.exports = app;
