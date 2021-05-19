const knex = require("../db/connection")


function read(movieId) {
    return knex("movies as m")
    .select("m.movie_id", "m.title", "m.runtime_in_minutes", "m.rating", "m.description", "m.image_url")
    .where({ movie_id: movieId })
    .first();
}

function list(isShowing) {
    if (!isShowing) {
        return knex("movies as m")
        .select("m.movie_id as id", "m.title", "m.runtime_in_minutes", "m.rating", "m.description", "m.image_url");
    }
    else {
        return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .distinct("m.movie_id")
        .select("m.movie_id as id", "m.title", "m.runtime_in_minutes", "m.rating", "m.description", "m.image_url", "mt.is_showing")
        .where({is_showing: true});
    }
}

module.exports = {
    list,
    read,
    // theatersByMovie
}