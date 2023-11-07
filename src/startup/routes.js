require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')

module.exports = function (app) {
	app.use(json())
	app.use(morgan('dev'))

	// app.use('/api/users', require('./routes/users'))

	app.use('/api/movies', require('../routes/movies'))
	app.use('/api/genres', require('../routes/genres'))

	app.get('/ping', (req, res) => {
		res.send({ success: true })
	})

	app.use(require('../middlewares/errors'))
}
