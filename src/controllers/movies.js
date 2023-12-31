const { Movie } = require('../models/movie')
const mongoose = require('mongoose')
const getAll = async (req, res) => {
	let { page = 1, search, genre, order } = req.query

	const query = {}
	let sort = {}

	const pageSize = 20
	const offset = (page - 1) * pageSize

	if (search) query.title = { $regex: search }

	if (genre) {
		if (typeof genre === 'string') genre = [genre]
	}

	if (order) sort[order] = 1

	const movies = await Movie.find(query).sort(sort).limit(pageSize).skip(offset)

	console.log(movies)

	res.json(movies)
}

const getById = async (req, res) => {
	const movie = await Movie.findById(req.params.movieId).populate('genres')

	res.json(movie)
}

const create = async (req, res) => {
	console.log(req.user)
	const newMovie = await Movie.create(req.body)

	res.json(newMovie)
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
	getAll,
	getById,
	create,
	update,
	remove,
}
