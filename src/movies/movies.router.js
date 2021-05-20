//imports methodNotAllowed error handler

const methodNotAllowed = require("../errors/methodNotAllowed");

//imports reviews router

const reviewsRouter = require("../reviews/reviews.router");

//imports theaters router

const theatersRouter = require("../theaters/theaters.router");


//use express router to set up paths 

const router = require("express").Router();

//import controller functions in

const controller = require("./movies.controller");

//establishes use of nested reviews route 

router.use("/:movieId/reviews", reviewsRouter)

//establishes use of nested theaters route 

router.use("/:movieId/theaters", theatersRouter)

//route requests for /movies/:movieId path

router.route("/:movieId").get(controller.read).all(methodNotAllowed)

//route requests for /movies path

router.route("/").get(controller.list).all(methodNotAllowed);


//export file for use by app.js

module.exports = router;