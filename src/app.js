if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

//imports errorHandler function

const errorHandler = require("./errors/errorHandler");

//imports movies Router
const moviesRouter = require("./movies/movies.router.js");

//imports theaters Router
const theatersRouter = require("./theaters/theaters.router.js");

const app = express();

//uses theaters router for all endpoints from /theaters, where /theaters is "home"

app.use("/theaters", theatersRouter);

//uses movies router for all endpoints from /movies, where /movies is "home"

app.use("/movies", moviesRouter);

//handles all errors for correct routes

app.use(errorHandler);


module.exports = app;
