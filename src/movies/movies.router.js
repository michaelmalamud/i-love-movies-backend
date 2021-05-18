//use express router to set up paths 

const router = require("express").Router();

//import controller functions in

const controller = require("./movies.controller");

//route requests for /movies/:movieId path

router.route("/:movieId").get(controller.read);

//route requests for /movies path

router.route("/").get(controller.list);


//export file for use by app.js

module.exports = router;