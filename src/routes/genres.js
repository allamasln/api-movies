const { genreValidation } = require('../models/genre')
const genreController = require('../controllers/genres')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')
const validate = require('../middlewares/validate')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const { Router } = require('express')

const router = Router()

router.get('/', auth, genreController.getAll)
router.post('/', genreValidation, validate, genreController.create)
router.put(
	'/:genreId',
	auth,
	admin,
	mongoIdFromParamValidation('genreId'),
	genreValidation,
	validate,
	genreController.update
)
router.delete(
	'/:genreId',
	auth,
	admin,
	mongoIdFromParamValidation('genreId'),
	validate,
	genreController.remove
)

module.exports = router
