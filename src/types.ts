/*export type Puntuacion = 1 | 2 | 3 | 4 | 5

export function generarPuntuacionAleatoria(): Puntuacion {
	const numeroAleatorio = Math.ceil(Math.random() * 5)
	return numeroAleatorio as Puntuacion
}*/

export interface productsEntry {
  website: string
  id: string
  title: string
  original_price: number
  discount_price: number
  offer_url: string
  is_offer_day: boolean
  is_available: boolean
  delivery_is_free: string
  category: { Id: string; Name: string }
  discount_percentage: string
  image: string
  rating: { rating: number; amount: string }
  sales: { days: string; amount: string }
}
