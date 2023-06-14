import { productsEntry } from '../types'
import productsData from './products'

const products: Array<productsEntry> = productsData

//function to get all the products
export const getProducts = (): Array<productsEntry> => products

//function to get the products by rating of 5
export const getProductsByRating = (): Array<productsEntry> => {
 const productosOrdenados = products
  .filter((producto) => producto.rating.rating === 5)
  .sort(
   (productoA, productoB) => productoB.rating.rating - productoA.rating.rating
  )
 return productosOrdenados
}

//function to get the products by original price
export const getProductsByPriceRange = (
 minPrice: number,
 maxPrice: number
): Array<productsEntry> => {
 const filteredProducts = products.filter((product: productsEntry) => {
  const price = parseFloat(product.original_price.toString())
  return price >= minPrice && price <= maxPrice
 })
 return filteredProducts
}

// Get products by category
export const getProductsByCategory = (
 categoryId: string
): Array<productsEntry> => {
 const productsByCategory = products.filter(
  (product) => product.category.Id === categoryId
 )
 return productsByCategory
}

// Obtener productos por disponibilidad
export const getProductsByAvailability = (
 availability: boolean
): Array<productsEntry> => {
 const filteredProducts = products.filter((product: productsEntry) => {
  return product.is_available === availability
 })

 return filteredProducts
}

// Define the sales threshold object with explicit types
const salesThresholds: Record<string, number> = {
 '+100': 100,
 '+1000': 1000,
 '+10000': 10000
 // Add more thresholds as needed
}

// Get popular products by sales range
export const getPopularProductsBySalesRange = (
 salesRange: string
): Array<productsEntry> => {
 const minSalesCount = salesThresholds[salesRange]

 if (minSalesCount === undefined) {
  throw new Error('Invalid sales range')
 }

 const popularProducts = products.filter((product) => {
  const salesCount = parseInt(
   product.sales.amount.replace('+', '').replace(',', '')
  )
  return salesCount >= minSalesCount
 })

 return popularProducts
}

// Get products by keyword
export const getProductsByKeyword = (keyword: string): Array<productsEntry> => {
 const filteredProducts = products.filter((product: productsEntry) => {
  // Check if keyword matches product title
  const titleMatches = product.title
   .toLowerCase()
   .includes(keyword.toLowerCase())

  return titleMatches
 })

 return filteredProducts
}
