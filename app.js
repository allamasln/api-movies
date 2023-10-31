const morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(morgan('tiny'))

app.get('/ping', (req, res) => {
	res.send({ success: true })
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
