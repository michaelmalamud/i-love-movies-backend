//uses express router with merged params from movies router

const router = require("express").Router({mergeParams: true});

// imports reviews controller

const controller = require("./reviews.controller")

//update and delete methods for /reviews:reviewId endpoint

router.route("/:reviewId").delete(controller.delete).put(controller.update);

//get route for use with movies router

router.route("/").get(controller.list)

//exports router

module.exports = router;