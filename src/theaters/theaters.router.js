//use express router to set up paths and merges parameters from movies router

const router = require("express").Router({mergeParams: true});

//imports controller functions

const controller = require("./theaters.controller");


//establishes routes 

router.route("/").get(controller.list);

//exports router

module.exports = router;