import express from 'express'
import * as productServices from '../services/products.services'

const router = express.Router()

//get all products
router.get('/', (_req, res) => {
 res.send(productServices.getProducts())
})

// Get products by category
router.get('/category/:categoryId', (req, res) => {
 const categoryId = req.params.categoryId
 const products = productServices.getProductsByCategory(categoryId)

 if (products.length === 0) {
  res.status(404).send('Category not found') // Enviar respuesta de error 404 si no se encuentra la categoría
 } else {
  res.json(products)
 }
})

// Get products by availability
//example: localhost:3000/api/products/availability/true
router.get('/availability/:availability', (req, res) => {
 const availability = req.params.availability === 'true' // Convertir a booleano
 const products = productServices.getProductsByAvailability(availability)

 res.json(products)
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

// Get popular products by sales range endpoint
// Example: http://localhost:3000/api/products/popular/+1000
router.get('/popular/:salesRange', (req, res) => {
 const salesRange = req.params.salesRange
 const popularProducts =
  productServices.getPopularProductsBySalesRange(salesRange)
 res.json(popularProducts)
})

// Endpoint to get products by keyword
// Example: http://localhost:3000/api/products/search/laptop
router.get('/search/:keyword', (req, res) => {
 const keyword = req.params.keyword
 const products = productServices.getProductsByKeyword(keyword)

 res.json(products)
})

export default router
