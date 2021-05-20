//establishes connection to knex


const { KnexTimeoutError } = require("knex");
const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");


const addCriticData = mapProperties({
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name"
})

//lists reviews

function list() {
    return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*");
}

//finds review by reviewId parameter and returns all columns

function read(reviewId) {
    return knex("reviews")
    .select("*")
    .where({ review_id: reviewId })
    .first();
}

//like read function above, but with columns from critics table included 

function joinRead(reviewId) {
    return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where({ review_id: reviewId })
    .first()
    .then(addCriticData)
}

//finds and updates review

function update(updatedReview) {
    return knex("reviews as r")
    // .join("critics as c", "r.critic_id", "c.critic_id")
    // .select("*")
    .where({review_id: updatedReview.review_id })
    .update(updatedReview)
    .then(() => joinRead(updatedReview.review_id));
}

//finds and deletes review from table 

function destroy (reviewId) {
    return knex("reviews")
    .where({ review_id: reviewId })
    .del();
}


module.exports = {
                   list,
                   joinRead,
                   read,
                   destroy,
                   update,
                 }