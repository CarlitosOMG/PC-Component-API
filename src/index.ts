import express from 'express'
import productsRouter from './routes/products.router'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
	console.log('Server is RUN!')
	res.send('Hello')
})

app.use('/api/products', productsRouter)

app.listen(PORT, () => {
	console.log(`PORT ${PORT}`)
})
