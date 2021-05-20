//imports asyncErrorBoundary

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//imports movies.service functions

const moviesService = require("./movies.service");

async function movieExists(req, res, next) {
    const { movieId } = req.params;
    res.locals.movieId = movieId;
    const movie = await moviesService.read(movieId);
    if (movie) {
        return next();
    }
    return next(
        {status: 404,
         message: "Movie cannot be found."
        })
}


async function read(req, res) {
    res.json({ data: await moviesService.read(res.locals.movieId) })
}

async function list(req, res) {
    const data = await moviesService.list(req.query);
    res.json({ data });
  }
module.exports = {
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
    list: asyncErrorBoundary(list)
}