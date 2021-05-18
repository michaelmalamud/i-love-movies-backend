//establishes connection to knex

const knex = require("../db/connection");

//table data for get theatres route. joins theaters, movies_theaters, and theaters tables and selects necessary columns

function list() {
    return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.theater_id", "t.name", "t.address_line_1", "t.address_line_2", "t.city", "t.state", "t.zip", "mt.movie_id", "m.title", "m.runtime_in_minutes", "m.rating", "m.description", "m.image_url", "mt.is_showing", "mt.theater_id");
}

module.exports = {
    list
}

