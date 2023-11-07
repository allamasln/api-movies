const mongoose = require('mongoose')
const { body } = require('express-validator')

const movieSchema = new mongoose.Schema({
	title: { type: String, required: true },
	date: { type: Date, required: true },
	sinopsis: { type: String, required: true },
	director: { type: String, required: true },
	genres: [{ type: mongoose.ObjectId, ref: 'Genre' }],
})

const Movie = mongoose.model('Movie', movieSchema)

const movieValidation = [
	body('title').notEmpty(),
	body('date').notEmpty(),
	body('sinopsis').notEmpty(),
	body('director').notEmpty(),
	body('genres').isArray(),
]

exports.Movie = Movie
exports.movieValidation = movieValidation
