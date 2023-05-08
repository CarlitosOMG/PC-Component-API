import express from 'express'
import * as productServices from '../services/products.services'

const router = express.Router()

router.get('/', (_req, res) => {
	res.send(productServices.getProductsByRating())
})

router.patch(`/`, (_req, res) => {
	res.send('Im Patch')
})

export default router
