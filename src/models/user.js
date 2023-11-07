const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	favorites: [{ type: mongoose.ObjectId, ref: 'Movie' }],
})

const User = mongoose.model('User', userSchema)

exports.User = User
