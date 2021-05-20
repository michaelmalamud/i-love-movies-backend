const reviewsService = require("./reviews.service");


async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    res.locals.reviewId = reviewId;
    const review = await reviewsService.read(res.locals.reviewId);
    if (review) {
        res.locals.review = review;
        return next()
    }
    next({
        status: 404,
        message: "Review cannot be found."
    })
}

async function list (req, res) {
    const reviews = await reviewsService.list();
    const formattedReviews = reviews.map((review) => ({...review, critic: {preferred_name: review.preferred_name, surname: review.surname, organization_name: review.organization_name}}))
    const { movieId } = req.params;
    const byResult = movieId ? formattedReview => formattedReview.movie_id === Number(movieId) : () => true;
    res.json({ data: formattedReviews.filter(byResult) })
}

async function update(req, res) {
    const updatedReview = {...res.locals.review, ...req.body.data}
    const update = await reviewsService.update(updatedReview)
    res.json({ data: update })
}


async function destroy(req, res) {
    await reviewsService.destroy(res.locals.reviewId);
    res.sendStatus(204);
}

module.exports = { delete: [reviewExists, destroy],
                   update: [reviewExists, update],
                   list
                 }