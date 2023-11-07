const crypto = require('crypto')
const { Router } = require('express')

const router = Router()

const users = {}

router.get('/', (req, res) => {
	res.send(users)
})

router.post('/register', (req, res) => {
	const { username, password: passwordPlainText } = req.body

	if (users[username]) return res.status(400).send('Intentelo de nuevo')

	const hash = crypto.createHash('sha1').update(passwordPlainText).digest('hex')
	console.log(hash)

	users[username] = hash
	res.send('Usuario registrado')
})

router.post('/login', (req, res) => {
	const { username, password: passwordPlainText } = req.body

	if (!users[username])
		return res.status(400).send('Usuario o contraseña no coinciden')

	const hash = crypto.createHash('sha1').update(passwordPlainText).digest('hex')
	console.log(hash, users[username])

	if (users[username] !== hash)
		return res.status(400).send('Usuario o contraseña no coinciden')

	req.session.user = username

	res.send('Usuario logueado')
})

router.delete('/logout', (req, res) => {
	req.session.destroy()

	res.send('Sesión cerrada')
})

module.exports = router
