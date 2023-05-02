import express from 'express'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
	console.log('Server is RUN!')
	res.send('Hello')
})

app.listen(PORT, () => {
	console.log(`PORT ${PORT}`)
})
