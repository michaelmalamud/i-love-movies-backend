//establishes connection to knex

const knex = require("../db/connection");

//table data for get theatres route. joins theaters, movies_theaters, and theaters tables and selects necessary columns

function list() {
    return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*", "m.*", "mt.is_showing");
}

module.exports = {
    list
}

