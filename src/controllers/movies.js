const { Movie } = require('../models/movie')

const create = async (req, res) => {
	const newMovie = await Movie.create(req.body)

	res.json(newMovie)
}

const getAll = async (req, res) => {
	const movies = await Movie.find().populate('genres')

	res.json(movies)
}

const getById = async (req, res) => {
	const movie = await Movie.findById(req.params.movieId).populate('genres')

	res.json(movie)
}

const update = async (req, res) => {
	const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, {
		new: true,
	})

	res.json(movie)
}

const remove = async (req, res) => {
	const movie = await Movie.findByIdAndDelete(req.params.movieId)

	res.json(movie)
}

module.exports = {
	create,
	getAll,
	getById,
	update,
	remove,
}
