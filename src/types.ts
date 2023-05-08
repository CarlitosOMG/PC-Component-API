/*export type Puntuacion = 1 | 2 | 3 | 4 | 5

export function generarPuntuacionAleatoria(): Puntuacion {
	const numeroAleatorio = Math.ceil(Math.random() * 5)
	return numeroAleatorio as Puntuacion
}*/

export interface productsEntry {
	id: string
	nombre: string
	precio1: string
	precio2: string
	descuento: string
	Imagen: string
	vendedor: string
	envio: string
	puntuacion: number
}
