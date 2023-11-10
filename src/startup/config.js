module.exports = function () {
	if (!process.env.privateKey) {
		console.error('privateKey not defined')
		process.exit(0)
	}
}
