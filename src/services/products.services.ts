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
      (productoA, productoB) =>
        productoB.rating.rating - productoA.rating.rating
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
