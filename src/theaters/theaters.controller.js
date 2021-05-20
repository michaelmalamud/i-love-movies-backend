//imports asyncErrorBoundary

const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//imports theaters service functions

const theatersService = require("./theaters.service");

//imports reduceProperties function

const reduceProperties = require("../utils/reduce-properties")

//lists theater objects with movie key being equal to an array with corresponding data 

async function list(req, res) {
    const theaters = await theatersService.list();
    const reduceMovies = reduceProperties("theater_id", {
        movie_id: ["movies", null, "movie_id"],
        title: ["movies", null, "title"],
        runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
        rating: ["movies", null, "rating"],
        description: ["movies", null, "description"],
        image_url: ["movies", null, "image_url"],
        is_showing: ["movies", null, "is_showing"],
    })
    res.json({ data: reduceMovies(theaters) })
}

//exports controller functions

module.exports = {
     list: asyncErrorBoundary(list) 
}