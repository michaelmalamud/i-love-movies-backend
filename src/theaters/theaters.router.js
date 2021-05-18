//use express router to set up paths

const router = require("express").Router();

//imports controller functions

const controller = require("./theaters.controller");


//establishes routes 

router.route("/").get(controller.list);

//exports router

module.exports = router;