import express from 'express'
import * as productServices from '../services/products.services'

const router = express.Router()

//get all products
router.get('/', (_req, res) => {
 res.send(productServices.getProducts())
})

//get all products with a rating of 5
router.get('/byrating', (_req, res) => {
 res.send(productServices.getProductsByRating())
})

//get the products by original price
//example: localhost:3000/api/products/range=0-999
router.get('/range=:min-:max', (req, res) => {
 const min = parseFloat(req.params.min)
 const max = parseFloat(req.params.max)
 const filteredProducts = productServices.getProductsByPriceRange(min, max)
 res.json(filteredProducts)
})

export default router
