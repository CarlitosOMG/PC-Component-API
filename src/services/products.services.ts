import { productsEntry } from '../types'
import productsData from './products'

const products: Array<productsEntry> = productsData

//export const getProducts = (): Array<productsEntry> => products
export const getProductsByRating = (): Array<productsEntry> => {
	const productosOrdenados = products.sort((productoA, productoB) => {
		return productoB.puntuacion - productoA.puntuacion
	})
	return productosOrdenados
}
