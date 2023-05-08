import { productsEntry } from '../types'
import { v4 as uuidv4 } from 'uuid'

function generarId(): string {
	return uuidv4()
}

function generarNumeroAleatorio(): number {
	// Generar un número aleatorio entre 0 y 1
	const numeroAleatorio = Math.random()

	// Escalar el número aleatorio dentro del rango 1-5
	const numeroEscalado = Math.floor(numeroAleatorio * 5) + 1

	return numeroEscalado
}

const ProductsEntry: Array<productsEntry> = [
	{
		id: generarId(),
		nombre: 'Disco duro externo Seagate Basic STJL2000400 2TB negro',
		precio1: '$1,499',
		precio2: '$1,199',
		descuento: '20% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_736714-MLA48157767089_112021-W.webp',
		vendedor: 'por Seagate',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Arctic Cooling Mx-4 De 4g 8 Años Distribuidor',
		precio1: '$264.18',
		precio2: '$212.38',
		descuento: '19% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_883891-MLM51885881681_102022-W.webp',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Disco sólido SSD interno Adata Ultimate SU630 ASU630SS-480GQ-R 480GB',
		precio1: '$524',
		precio2: '$524',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_963664-MLA41897683345_052020-W.webp',
		vendedor: 'por Imobile',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente de poder para PC Acteck Power 5 R500 500W negra 115V/230V',
		precio1: '$353',
		precio2: '$353',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_755413-MLA45975822860_052021-W.webp',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Msi B550m Pro-vdh Wifi Amd Am4 Micro Atx',
		precio1: '$3,399',
		precio2: '$3,399',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_794147-MLM69027599145_042023-W.webp',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Laptops Bases Enfriador 6 Ventiladores Para 12-17  Usb Dual',
		precio1: '$369.88',
		precio2: '$369.88',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_685502-CBT48189788967_112021-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Base Enfriador Laptop Con 6 Ventiladores Externo 2 Usb',
		precio1: '$667.60',
		precio2: '$420.58',
		descuento: '36% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_753279-CBT51945216676_102022-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Acteck Atx 2.0 24 Pines 500w 2xmolex, 2xsata',
		precio1: '$559.98',
		precio2: '$356.85',
		descuento: '36% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_799703-MLM49421254288_032022-W.webp',
		vendedor: 'por Acteck',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Fuente de poder para PC Balam Rush GR Burst GR750FM 750W negra 100V/240V',
		precio1: '$1,732',
		precio2: '$1,732',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_771620-MLA45977124714_052021-W.webp',
		vendedor: 'por Tecnodromo',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Intel Core I3 10105 Tarjeta Madre 8gb',
		precio1: '$5,600',
		precio2: '$4,144',
		descuento: '26% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_650426-MLM52416728431_112022-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Carcasa Disco Duro 2.5 Usb 3.0 Sata Hdd Ssd Externo Gabinete',
		precio1: '$270.65',
		precio2: '$127.20',
		descuento: '52% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_924353-CBT50288269768_062022-W.webp',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Disipador Cpu Vetroo V5 Intel/ Amd Argb',
		precio1: '$867',
		precio2: '$739.50',
		descuento: '14% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_837290-MLA47429779615_092021-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Disco duro externo LaCie Rugged Mini LAC9000298 2TB',
		precio1: '$2,399',
		precio2: '$1,999',
		descuento: '16% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_726870-MLA43483760795_092020-W.webp',
		vendedor: 'por Mercado Libre Electronica',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Sistema De Enfriamiento Líquido Balam Rush - Argb - 2*120 Mm',
		precio1: '$1,499',
		precio2: '$1,499',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Acteck',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ssd 480gb Disco Duro Estado Solido Adata Sata Laptop Pc 2.5',
		precio1: '$524',
		precio2: '$524',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Thermal Grizzly Kryonaut 1g Pasta Termica Original Alto Rend',
		precio1: '$242',
		precio2: '$225.06',
		descuento: '7% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_779948-MLA48740159309_012022-W.webp',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Thermal Grizzly Kryonaut 1g Pasta Termica Original Alto Rend',
		precio1: '$239',
		precio2: '$239',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_768826-MLA50094392568_052022-W.webp',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'M.2 Nvme Adaptador De Gabinete Usb C Ssd Usb 3.1 Gen 2 10gbp',
		precio1: '$902.16',
		precio2: '$478.14',
		descuento: '46% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por FIDECO',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Disco duro externo Toshiba Canvio Basics HDTB410XK3AA 1TB negro',
		precio1: '$1,198',
		precio2: '$1,198',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Gris 30gr Halnziye Hy510 Alta Calidad+regalo',
		precio1: '$129',
		precio2: '$99.33',
		descuento: '23% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Gris 30gr Halnziye Hy510 Ps3 Xbox Led Cpu Gpu',
		precio1: '$119.99',
		precio2: '$93.59',
		descuento: '22% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM color azul  8GB 1 SK hynix HMT41GS6BFR8A-PB',
		precio1: '$387.87',
		precio2: '$387.87',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SIAFU',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Arctic Cooling Mx-4 De 4g',
		precio1: '$289',
		precio2: '$231.20',
		descuento: '20% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Hp G4-2000 G6-2000 G7-2000 683193-001 685477-001',
		precio1: '$195',
		precio2: '$195',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Zotac  Gaming GeForce RTX 30 Series RTX 3080 Ti ZT-A30810D-10P 12GB',
		precio1: '$30,907',
		precio2: '$30,907',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Termica Cooler Master High Performance 4g Htk-002-u1',
		precio1: '$129',
		precio2: '$129',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta De Captura Hdmi Full Hd 1080p 60fps De Audio Y Vídeo',
		precio1: '$740.86',
		precio2: '$377.64',
		descuento: '49% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Abanico Ventilador Hp Pavilion 15-a 15-ab 17-g 812109-001',
		precio1: '$395',
		precio2: '$395',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Palit  Super GP GeForce GTX 16 Series GTX 1660 NE6166S018J9-1160A-1 6GB',
		precio1: '$7,270.91',
		precio2: '$3,999',
		descuento: '45% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador 6 PuLG  Radox 510-742 12v 120mmx25 Extractor Aire',
		precio1: '$145',
		precio2: '$145',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Soldadora Inversor Ven-90x90',
		precio1: '$311.10',
		precio2: '$280.60',
		descuento: '9% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Fuente de poder para PC Balam Rush GR Burst GR850FM 850W negra 100V/240V',
		precio1: '$1,823',
		precio2: '$1,823',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Tecnodromo',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Fury Impact DDR4 gamer color negro  16GB 1 Kingston KF426S15IB1/16',
		precio1: '$781.10',
		precio2: '$781.10',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por MIPCCOMMX',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Fury Impact DDR4 gamer color negro  8GB 1 Kingston KF426S15IB/8',
		precio1: '$444',
		precio2: '$444',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Fury Impact DDR4 gamer color negro  8GB 1 Kingston KF432S20IB/8',
		precio1: '$458',
		precio2: '$458',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador  15-bs 15-bw 15-ay 15-ac 15-af 15-ba 813946-001',
		precio1: '$445',
		precio2: '$445',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Gris 10gr Halnziye Hy510 Ps3,xbox,led,cpu,gpu',
		precio1: '$92',
		precio2: '$84.64',
		descuento: '8% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Zotac  Gaming GeForce RTX 20 Series RTX 2060 ZT-T20600R-10M 6GB',
		precio1: '$18,396.34',
		precio2: '$13,797',
		descuento: '25% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Arctic Cooling Mx-4 De 8g 8 Años Distribuidor',
		precio1: '$389',
		precio2: '$389',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador 4 Pulgadas 12v Plastico 80mm 510-740',
		precio1: '$69',
		precio2: '$69',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Termica Noctua Nt-h1 3.5 Gramos Thermal Paste Alto Ren',
		precio1: '$259',
		precio2: '$259',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_601052-MLA51961877913_102022-W.webp',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Abanico Ventilador Hp 14-ab 14- Ab019la 15z-a 812109-001',
		precio1: '$395',
		precio2: '$395',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador 6 PuLG  Radox 510-742 12v 120mmx25 Extractor Aire',
		precio1: '$154',
		precio2: '$154',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_806115-MLM46107349754_052021-W.webp',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM Fury DDR3 gamer color azul  8GB 1 HyperX HX316C10F/8',
		precio1: '$483.01',
		precio2: '$483.01',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_731965-MLA32170597140_092019-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De 3 Ventiladores Gamer Yeyian Led Azul  Typhoon, 120mm',
		precio1: '$261.12',
		precio2: '$248.32',
		descuento: '4% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_814573-MLM43992931660_112020-W.webp',
		vendedor: 'por Yeyian',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: ' Mezclador De Sonido Bluetooth Live F998',
		precio1: '$803.83',
		precio2: '$467.14',
		descuento: '41% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_636011-CBT49138168983_022022-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit 3 Ventilador Munfrost Solar Wind Rainbowforce Fn-12 Argb',
		precio1: '$799',
		precio2: '$799',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Munfrost',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Cable Adaptador Usb 3.0 A Sata Para Disco Duro 2.5 /3.5',
		precio1: '$399',
		precio2: '$359.10',
		descuento: '10% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_810971-MLM51285100111_082022-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Fuente de poder para PC YeYian Serie 650 YFR-46201 650W negra 115V/230V',
		precio1: '$1,131.18',
		precio2: '$1,075',
		descuento: '4% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_947671-MLA45997959648_052021-W.jpg',
		vendedor: 'por Yeyian',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Hp 18-1000 All In One 6033b0026501 Dfs651312cc0t',
		precio1: '$422.88',
		precio2: '$422.88',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_861585-MLM31217984190_062019-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Fury Impact DDR4 gamer color negro  16GB 1 Kingston KF426S15IB1/16',
		precio1: '$781.10',
		precio2: '$781.10',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_646978-MLA48636416575_122021-W.jpg',
		vendedor: 'por MIPCCOMMX',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM ValueRAM color verde  8GB 1 Kingston KVR26S19S6/8',
		precio1: '$395.50',
		precio2: '$395.50',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_922992-MLA46301555644_062021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit 3 Ventilador Munfrost Solar Wind Rainbowforce Fn-12 Argb',
		precio1: '$799',
		precio2: '$799',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_645658-MLM44239979151_122020-W.jpg',
		vendedor: 'por Munfrost',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Fury Beast DDR4 RGB color negro  8GB 1 Kingston KF432C16BBA/8',
		precio1: '$532',
		precio2: '$532',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_935642-MLA49130955690_022022-W.jpg',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM Premier color verde  8GB 1 Adata AD4S26668G19-SGN',
		precio1: '$402',
		precio2: '$402',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Adata',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM Premier color verde  4GB 1 Adata ADDS1600W4G11-S',
		precio1: '$299',
		precio2: '$299',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Adata',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Soldadora Inversor Repuesto 24volt 0.35amperes Dc',
		precio1: '$349',
		precio2: '$349',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Enfriador Rgb Radiador De Cpu 12cm 3',
		precio1: '$342.82',
		precio2: '$342.82',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador 12x12x3.8cm Soldadora Inversora 24v Ytd241238s032',
		precio1: '$409',
		precio2: '$388.55',
		descuento: '5% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Termica Noctua Nt-h1 10gr Grasa Silicona Gris Alto Ren',
		precio1: '$439',
		precio2: '$439',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Fury Beast DDR4 gamer color negro  8GB 1 Kingston KF426C16BB/8',
		precio1: '$454',
		precio2: '$454',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Adaptador Usb 2.0 Tarjeta De Sonido 5.1 Canales Audio 3d Pc',
		precio1: '$62.59',
		precio2: '$62.59',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica 50 Gr Stejar Lpp-extreme Alta Calidad+regalo',
		precio1: '$219',
		precio2: '$219',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Spectrix D60G gamer color tungsten grey  8GB 1 XPG AX4U32008G16A-ST60',
		precio1: '$563',
		precio2: '$563',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Adata',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Noctua Nh D15 Chromax Black, Disipador De Cpu De Doble Torre',
		precio1: '$3,149',
		precio2: '$3,149',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Switch Poe Gigabit 8 Puertos Ubiquiti Mikrotik Sin Fuente',
		precio1: '$850',
		precio2: '$807.50',
		descuento: '5% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i9-10900 BX8070110900 de 10 núcleos y  5.2GHz de frecuencia con gráfica integrada',
		precio1: '$8,771',
		precio2: '$8,771',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y  4.6GHz de frecuencia con gráfica integrada',
		precio1: '$3,191',
		precio2: '$3,191',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta De Sonido Usb 7.1 Canales Audio 3d Salida Y Entrada',
		precio1: '$60',
		precio2: '$60',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i5-11400F BX8070811400F de 6 núcleos y  4.4GHz de frecuencia',
		precio1: '$2,456',
		precio2: '$2,456',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Controlador Para Ventiladores De 6 Pines Rgb Con Control',
		precio1: '$199',
		precio2: '$199',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Kuesuny Ddr3l 1600 8gb Sodimm Laptop 1.35v 2rx8',
		precio1: '$685.65',
		precio2: '$342.82',
		descuento: '50% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i3-10100F BX8070110100F de 4 núcleos y  4.3GHz de frecuencia',
		precio1: '$1,109',
		precio2: '$1,109',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Termica Corsair Tm30 3g Ct-9010001-ww',
		precio1: '$219',
		precio2: '$219',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr3 4gb Laptop 4gb 2rx8 Pc3 10600s 1.5v Nueva ',
		precio1: '$299',
		precio2: '$299',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Cable Pci-e 8pin-dual 6+2pin Para Fuente Corsair ',
		precio1: '$252.61',
		precio2: '$128.82',
		descuento: '49% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Kuesuny Ddr3-1600 4gb Gamer Pc3-12800 Desktop',
		precio1: '$415',
		precio2: '$215.79',
		descuento: '48% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Gigabyte  GeForce 10 Series GT 1030 GV-N1030D4-2GL 2GB',
		precio1: '$1,835',
		precio2: '$1,835',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De 3 Ventiladores Rgb Para Pc Gamer, Disipador De Calor',
		precio1: '$289.59',
		precio2: '$243.22',
		descuento: '16% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: ' Switch Poe Gigabit 4 Puertos Ubiquiti Mikrotik Sin Fuente',
		precio1: '$610',
		precio2: '$542.90',
		descuento: '11% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Arctic Mx-4 4g Spatula 8 Años Distribuidor',
		precio1: '$269',
		precio2: '$269',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente de poder para PC XPG Core Reactor 850 850W negra 100V/240V',
		precio1: '$2,138',
		precio2: '$2,138',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Switch Poe Gigabit 5 Puertos Ubiquiti-mikrotik Sin Fuente',
		precio1: '$1,080',
		precio2: '$993.60',
		descuento: '8% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Termica Arctic Silver 5 High-density 3.5g As5-3.5g',
		precio1: '$279',
		precio2: '$279',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Gamer Yeyian Led Rojo Yct-050720r Typhoon, 120mm',
		precio1: '$256',
		precio2: '$256',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Yeyian',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM color verde  16GB 1 Crucial CT16G4SFD8266',
		precio1: '$902.16',
		precio2: '$902.16',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr4 16gb 3200mhz Kingston Laptop Fury Impact',
		precio1: '$1,080.18',
		precio2: '$953.10',
		descuento: '11% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_929383-MLM50303399665_062022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM Premier color verde  16GB 1 Adata AD4S2666716G19-SGN',
		precio1: '$740',
		precio2: '$740',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_607265-MLA49182183906_022022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer AMD Ryzen 5 3600 100-100000031BOX de 6 núcleos y  4.2GHz de frecuencia',
		precio1: '$1,750',
		precio2: '$1,750',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_643608-MLA42157654324_062020-W.jpg',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Sunon Dp200a-2123xst, 220/240 Vac',
		precio1: '$595',
		precio2: '$595',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_894553-MLM43764701444_102020-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador AMD Ryzen 5 PRO 4650G 100-000000143 de 6 núcleos y  4.2GHz de frecuencia con gráfica integrada',
		precio1: '$2,692',
		precio2: '$2,692',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_916770-MLA46390941390_062021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video AMD Sapphire  Pulse Radeon RX 6500 Series RX 6500 XT 11314-01-20G 4GB',
		precio1: '$4,554',
		precio2: '$4,554',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_954977-MLA52223667664_102022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Carcasa Disco Duro 2.5 Usb 3.0, Hdd Ssd Sata I/ii/iii, 3tb',
		precio1: '$185',
		precio2: '$172.05',
		descuento: '7% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_887808-MLM45162426031_032021-W.jpg',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i5-10400 BX8070110400 de 6 núcleos y  4.3GHz de frecuencia con gráfica integrada',
		precio1: '$2,468',
		precio2: '$2,468',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_946899-MLA42903822490_072020-W.jpg',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Thermal Grizzly Kryonaut 1g Pasta Termica +envio Inmediato',
		precio1: '$289',
		precio2: '$289',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Enfriador 12cm X 12cm',
		precio1: '$450',
		precio2: '$450',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente Dell Inspiron 660s 3647 Vostro 270 L220ns-00  H220ns-',
		precio1: '$1,249',
		precio2: '$1,249',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_728961-MLM46712737439_072021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM color azul  4GB 1 SK hynix HMT351S6EFR8A-PB',
		precio1: '$173.93',
		precio2: '$173.93',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_913393-MLA52223741487_102022-W.jpg',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer AMD Ryzen 7 5800X 100-100000063WOF de 8 núcleos y  4.7GHz de frecuencia',
		precio1: '$3,899',
		precio2: '$3,899',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_903113-MLA44347094942_122020-W.jpg',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Kuesuny Ddr3-1333 8gb Sodimm Pc3 10600s Laptop ',
		precio1: '$884.12',
		precio2: '$344.80',
		descuento: '60% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_655115-CBT49259829347_032022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Carcasa Disco 2.5 Usb 3.0, Hdd Ssd Sata I/ii/iii',
		precio1: '$326.04',
		precio2: '$162.93',
		descuento: '50% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_607636-MLM44246621602_122020-W.jpg',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Msi B550m Pro-vdh Wifi Amd Am4 Micro Atx',
		precio1: '$2,799',
		precio2: '$2,799',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por MSI Gaming',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Fuente de poder para PC Giga-Byte Technology GP-P450B 450W negra 100V/240V',
		precio1: '$941',
		precio2: '$941',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Fuente de poder para PC Aerocool Advanced Technologies Cylon 500W 500W black 200V - 240V',
		precio1: '$1,599',
		precio2: '$1,599',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia PNY  Uprising GeForce RTX 30 Series RTX 3050 VCG30508DFMPB Dual Fan Edition 8GB',
		precio1: '$12,490',
		precio2: '$12,490',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Hp Prodesk 600 800 G2 Sff 200w',
		precio1: '$784.38',
		precio2: '$707.48',
		descuento: '9% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia MSI  Ventus GeForce RTX 30 Series RTX 3060 GEFORCE RTX 3060 VENTUS 2X 12G OC OC Edition 12GB',
		precio1: '$7,486',
		precio2: '$7,486',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX de 6 núcleos y  4.4GHz de frecuencia con gráfica integrada',
		precio1: '$2,115',
		precio2: '$2,115',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_928642-MLA47847420037_102021-W.jpg',
		vendedor: 'por PCGAMER MX',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Enfriador 15cm X 17.2cm',
		precio1: '$890',
		precio2: '$890',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr3 8gb Laptop 8gb 2rx8 Pc3l 12800s 1.35v',
		precio1: '$499',
		precio2: '$499',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente Dell D250ad-00 Vostro Inspiron Optiplex Varios Model',
		precio1: '$1,199',
		precio2: '$1,199',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador 4 Pulgadas 12v Plastico 80mm 510-740',
		precio1: '$64.90',
		precio2: '$64.90',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM ValueRAM color verde  2GB 1 Kingston KVR800D2S6/2G',
		precio1: '$299.87',
		precio2: '$299.87',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer AMD Ryzen 5 5600X 100-100000065BOX de 6 núcleos y  4.6GHz de frecuencia',
		precio1: '$3,166',
		precio2: '$3,166',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Gammix D10 gamer color rojo  16GB 1 XPG AX4U320016G16A-SR10',
		precio1: '$1,089',
		precio2: '$1,089',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Enfriador De Cpu Para Intel Lga1200 Amd Am4 120mm',
		precio1: '$399',
		precio2: '$243.39',
		descuento: '39% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Termica Noctua Nt-h2 3.5gr Thermal Paste',
		precio1: '$439',
		precio2: '$439',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Vengeance gamer color negro  8GB 1 Corsair CMSX8GX4M1A2400C16',
		precio1: '$464',
		precio2: '$464',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Switch Poe 8 Puertos Ubiquiti-mikrotik, Sin Fuente',
		precio1: '$1,100',
		precio2: '$946',
		descuento: '14% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Mother Board Biostar Itx A68n-2100k Amd E1-6010 Integrada ',
		precio1: '$1,184',
		precio2: '$1,184',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Gigabyte B550m Ds3h Am4 Ddr4 128gb Pcie 4.0',
		precio1: '$2,199',
		precio2: '$2,199',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Gigabyte B450 Aorus Elite V2 Socket Am4',
		precio1: '$2,999',
		precio2: '$2,999',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Aorus',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Salzer Pd157b 15cmx17cm 220vac',
		precio1: '$699',
		precio2: '$699',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Enfriador De Cpu Para Intel Lga1200 Amd Am4 120mm',
		precio1: '$298.99',
		precio2: '$233.21',
		descuento: '22% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Gr Procesadores Cooler Xbox 360 Cpu Pc',
		precio1: '$103.08',
		precio2: '$103.08',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i7-12700F BX8071512700F de 12 núcleos y  4.9GHz de frecuencia',
		precio1: '$6,471',
		precio2: '$6,471',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Hp Compaq Pro 6300 Mt/sff ',
		precio1: '$1,100',
		precio2: '$1,100',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Gamer Ryzen 5 + Tarjeta Madre + 16gb',
		precio1: '$4,999',
		precio2: '$3,749',
		descuento: '25% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Disipador De Calor + Ventilador Amd Wraith Stealth Original',
		precio1: '$329',
		precio2: '$329',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram 16gb Para Apple iMac Macmini Macbook Pro 2 X 8gb',
		precio1: '$1,990',
		precio2: '$1,293',
		descuento: '35% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Gamer Balam Rush Rosa +3 Ventiladores Rgb Dragonfly',
		precio1: '$1,399',
		precio2: '$1,399',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Acteck',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus A320m-k Amd A320 Ryzen Am4',
		precio1: '$1,350',
		precio2: '$1,053',
		descuento: '22% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Arctic Cooling Mx-4 De 4g 8 Años Distribuidor',
		precio1: '$279',
		precio2: '$279',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Extractor Abanico 4 Pulgadas 115v Ac 8x3.8 80x38',
		precio1: '$199',
		precio2: '$199',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_913071-MLM45159599146_032021-W.jpg',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus Tuf Gaming B550m-plus Wifi Ii Ddr4 Hdmi',
		precio1: '$3,395',
		precio2: '$3,395',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_650532-MLM50274778819_062022-W.jpg',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia MSI  Ventus XS GeForce GTX 16 Series GTX 1650 GEFORCE GTX 1650 D6 VENTUS XS OC OC Edition 4GB',
		precio1: '$4,201',
		precio2: '$4,201',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_773016-MLA52678887951_122022-W.jpg',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Mother Board Biostar H81mhv3 Lga 1150 Ddr3 Solo Para 4 Gen ',
		precio1: '$1,595',
		precio2: '$1,595',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_603634-MLM49368385457_032022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i5-10400F BX8070110400F de 6 núcleos y  4.3GHz de frecuencia',
		precio1: '$2,144',
		precio2: '$2,144',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_612352-MLA43024199031_082020-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Asus  Phoenix GeForce GTX 16 Series GTX 1650 PH-GTX1650-O4G OC Edition 4GB',
		precio1: '$4,414',
		precio2: '$4,414',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_929564-MLA53854204811_022023-W.jpg',
		vendedor: 'por PCGAMER MX',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Nueva 5v 70a Led Pixel 350w ',
		precio1: '$899',
		precio2: '$899',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_803244-MLM44456176059_122020-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Zotac  Gaming GeForce RTX 30 Series RTX 3070 Ti ZT-A30710D-10P 8GB',
		precio1: '$15,500',
		precio2: '$15,500',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_941955-MLA49295016344_032022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Switch Poe 6 Puertos Ubiquiti-mikrotik, Sin Fuente',
		precio1: '$780',
		precio2: '$780',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_645385-MLM48421893659_122021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit 3 Ventiladores Rgb Gamer, 120mm Rgb Radiador De Caja',
		precio1: '$520',
		precio2: '$520',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Asus  Phoenix GeForce GTX 16 Series GTX 1660 SUPER PH-GTX1660S-O6G OC Edition 6GB',
		precio1: '$6,499',
		precio2: '$6,499',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_809388-MLA54577331647_032023-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Gamer Xpg Battlecruiser Rgb Usb C Cristal Templado',
		precio1: '$2,999',
		precio2: '$2,499',
		descuento: '16% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_816274-MLM46594014773_072021-W.jpg',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i3-9100 BX80684I39100 de 4 núcleos y  4.2GHz de frecuencia con gráfica integrada',
		precio1: '$3,292.58',
		precio2: '$2,634',
		descuento: '19% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Ibushak',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit 3 Ventiladores Rgb Gamer 120mm 1200rpm Con Pwm Hub',
		precio1: '$424.56',
		precio2: '$187.28',
		descuento: '55% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Pentium G6400 BX80701G6400 de 2 núcleos y  4GHz de frecuencia con gráfica integrada',
		precio1: '$1,449',
		precio2: '$1,449',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I5 10400 2.9ghz Socket 1200',
		precio1: '$2,468',
		precio2: '$2,468',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Gaming Gamer Para Computadora Con Luz Led Rgb',
		precio1: '$110',
		precio2: '$110',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Spectrix D60G gamer color tungsten grey  8GB 1 XPG AX4U300038G16A-ST60',
		precio1: '$1,005',
		precio2: '$1,005',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Am4 Asus Prime A320m-k Am4 Motherboard Am4',
		precio1: '$1,369',
		precio2: '$1,369',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Sk Hynix Servidor (8gb) Pc3-12800e-11-12-e3 (nueva)',
		precio1: '$2,000',
		precio2: '$1,800',
		descuento: '10% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i7-10700F BX8070110700F de 8 núcleos y  4.8GHz de frecuencia',
		precio1: '$3,965',
		precio2: '$3,965',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Gigabyte A320m-s2h Am4 Ddr4 Micro Atx Pcie 3.0',
		precio1: '$1,239',
		precio2: '$1,239',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Gris 10gr Halnziye Hy510  Ps3,xbox,led,cpu,gpu',
		precio1: '$90.77',
		precio2: '$72.97',
		descuento: '19% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Dell Inspiron 620 530 220 Modelo D250nd-00',
		precio1: '$1,000',
		precio2: '$1,000',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Switch Poe Pasivo 8 Puertos Ubiquiti Mikrotik Sin Fuente',
		precio1: '$581.40',
		precio2: '$444.60',
		descuento: '23% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Gamer Atx Vorago 600w Psu-200 Led Azul ',
		precio1: '$989',
		precio2: '$989',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM color azul  4GB 1 SK hynix HMT451S6BFR8A-PB',
		precio1: '$151',
		precio2: '$151',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Intel Celeron G5905 C/gráficos, 8 Gb Ddr4',
		precio1: '$3,399',
		precio2: '$3,399',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus F2a85-m2 Socket Fm2 Box New',
		precio1: '$1,995',
		precio2: '$1,995',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr4 16gb 2666mhz Kingston Fury Impact Laptop',
		precio1: '$960',
		precio2: '$960',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Xeon E2420 + 16gb Ram + Cooler Rgb',
		precio1: '$3,058.98',
		precio2: '$2,429',
		descuento: '20% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus Rog Strix B550-f Gaming Wifi Ii Am4 Ddr4',
		precio1: '$4,355',
		precio2: '$4,355',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I7 11700k 5ghz Lga1200  Bx8070811700k',
		precio1: '$7,186',
		precio2: '$7,186',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualizacion Gaming Ryzen 5 5600g + Motherboard A320',
		precio1: '$3,649',
		precio2: '$3,649',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: '2 Memorias Ram 2gb Ddr2 667 Mhz 2+2=4gb Pc2-5300 Selladas.',
		precio1: '$610.98',
		precio2: '$329.45',
		descuento: '46% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Mother Board Biostar H81mhv3  1150 Ddr3 Uatx',
		precio1: '$1,999',
		precio2: '$1,999',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: '1469480000 Weidmuller Fuente De Alimentacion 120w 24v 5amp',
		precio1: '$2,824',
		precio2: '$2,824',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre (mother Lga 1151 ) Elitegroup Ecs H310ch5-m2',
		precio1: '$1,699',
		precio2: '$1,699',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Pentium Gold G6400 Tarjeta Madre 8gb 240gb',
		precio1: '$4,100',
		precio2: '$3,608',
		descuento: '12% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Gigabyte B560m Ds3h V2 4xddr4 Pci-e Usb3 1200',
		precio1: '$1,669',
		precio2: '$1,669',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM ValueRAM color verde  2GB 1 Kingston KVR1333D3N9/2G',
		precio1: '$142',
		precio2: '$142',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualizacion Mother Biostar + Proce Amd + 4 Gb Ram',
		precio1: '$1,499',
		precio2: '$1,499',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Munfrost Panda Rgb Cristal Templado Argb Atx ',
		precio1: '$2,099',
		precio2: '$1,899',
		descuento: '9% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Munfrost',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador 12cm 220v',
		precio1: '$450',
		precio2: '$450',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i5-11400 BX8070811400 de 6 núcleos y  4.4GHz de frecuencia con gráfica integrada',
		precio1: '$3,089',
		precio2: '$3,089',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Biostar H310mhp Socket 1151 8va Y 9na Gen.',
		precio1: '$1,936',
		precio2: '$1,936',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Gigabyte  GeForce GTX 16 Series GTX 1660 GV-N1660OC-6GD OC Edition 6GB',
		precio1: '$5,564',
		precio2: '$5,564',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Gigabyte B660m Ds3h Ddr4 Pci-e Usb3 Soc 1700',
		precio1: '$2,359',
		precio2: '$2,359',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_673347-MLM51291907315_082022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i5-12400F BX8071512400F de 6 núcleos y  4.4GHz de frecuencia',
		precio1: '$3,538',
		precio2: '$3,538',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Gamer Cougar Conquer 2 Rgb Cristal Templado',
		precio1: '$7,750.98',
		precio2: '$6,174',
		descuento: '20% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_938467-MLM69119420280_042023-W.jpg',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: '3rgb Radiador De Ventilador,120mm Rgb Radiador De Caja',
		precio1: '$438.45',
		precio2: '$267.40',
		descuento: '39% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_625208-CBT50153407263_052022-W.jpg',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Pc 850w Evga 80 Plus 110-bq-0850-v1 Semimodular',
		precio1: '$2,799',
		precio2: '$2,299',
		descuento: '17% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_778470-MLM54556476625_032023-W.jpg',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Gigabyte B365m Aorus Elite Usb3 Hdmi Lga 1151 ',
		precio1: '$3,998',
		precio2: '$3,998',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_842985-MLM48836045835_012022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Gigabyte Ga-a320m-s2h Usb3 Ddr4 Pci-e Hdmi Am4',
		precio1: '$1,399',
		precio2: '$1,399',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_880992-MLM53709380266_022023-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Tarjeta Madre + Celeron + Ram 4 Gb Ssd 240',
		precio1: '$3,099',
		precio2: '$3,099',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_847079-MLM50297652263_062022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Intel Core I3 10105 Tarjeta 8gb Ssd 240gb',
		precio1: '$6,100',
		precio2: '$4,514',
		descuento: '26% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_650341-MLM52282984242_112022-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta De Video Ati Radeon Hd6450 1gb Pcie 2.1 Oem ',
		precio1: '$1,066',
		precio2: '$1,066',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_847648-MLM48069149078_102021-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i3-12100F BX8071512100F de 4 núcleos y  4.3GHz de frecuencia',
		precio1: '$2,022',
		precio2: '$2,022',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_768929-MLA53644260872_022023-W.webp',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i7-10700 BX8070110700 de 8 núcleos y  4.8GHz de frecuencia con gráfica integrada',
		precio1: '$4,683',
		precio2: '$4,683',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_817481-MLA42904020385_072020-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus Rog B550 F Wifi 2 Para Ryzen ',
		precio1: '$4,199',
		precio2: '$4,199',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Celeron G5905 BX80701G5905 de 2 núcleos y  3.5GHz de frecuencia con gráfica integrada',
		precio1: '$989',
		precio2: '$989',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Vengeance LPX gamer color negro  16GB 2 Corsair CMK16GX4M2B3200C16',
		precio1: '$999',
		precio2: '$999',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Corsair',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Spectrix D50 gamer color tungsten grey  8GB 1 XPG AX4U320038G16A-ST50',
		precio1: '$571',
		precio2: '$571',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Asus  TUF Gaming GeForce GTX 16 Series GTX 1650 TUF-GTX1650-O4GD6-P-GAMING OC Edition 4GB',
		precio1: '$8,499',
		precio2: '$8,499',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Memoria RAM Vengeance LPX gamer color negro  8GB 1 Corsair CMK8GX4M1A2400C16',
		precio1: '$582.32',
		precio2: '$582.32',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Intel Core I3 10105 Tarjeta Madre',
		precio1: '$5,000',
		precio2: '$3,750',
		descuento: '25% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Vorago 500w Psu-101 2 Conectores',
		precio1: '$335',
		precio2: '$335',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Amd Ryzen 3 4350g Pro Am4 3.8 Ghz Oem Con Radeon',
		precio1: '$1,852',
		precio2: '$1,852',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Amd Ryzen 7 5700g 3.8ghz 16mb Pcie 3.0 Am4',
		precio1: '$3,334',
		precio2: '$3,334',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Mother Board Biostar H81mhv3 Lga 1150 Ddr3 Solo Para 4 Gen',
		precio1: '$1,550',
		precio2: '$1,550',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Fuente de poder para PC Giga-Byte Technology P650B 650W negra 100V/240V',
		precio1: '$1,382',
		precio2: '$1,382',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i9-11900K BX8070811900K de 8 núcleos y  5.3GHz de frecuencia con gráfica integrada',
		precio1: '$8,896',
		precio2: '$8,896',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM color verde  4GB 1 Samsung M471B5173DB0-YK0',
		precio1: '$193',
		precio2: '$193',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i5-9400 BX80684I59400 de 6 núcleos y  4.1GHz de frecuencia con gráfica integrada',
		precio1: '$4,069.80',
		precio2: '$3,710',
		descuento: '8% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr4 4gb 3200 Mhz Premier Laptop Oem Granel',
		precio1: '$508.98',
		precio2: '$484.03',
		descuento: '4% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Corsair Cx550f Rgb 550 Watts',
		precio1: '$1,887',
		precio2: '$1,887',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus Prime B460m-a R2.0 1200 Ddr4 Micro Atx',
		precio1: '$1,999',
		precio2: '$1,799',
		descuento: '10% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Xeon E5-2620 V4 BX80660E52620V4 de 8 núcleos y  3GHz de frecuencia',
		precio1: '$2,990',
		precio2: '$2,990',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Enfriador De Cpu Para Intel Lga1200 Amd Am4 120mm',
		precio1: '$416.16',
		precio2: '$232.56',
		descuento: '44% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Gamer Balam Rush Dragonfly Atx 3 Fan Rgb Br-932813',
		precio1: '$1,699',
		precio2: '$1,199',
		descuento: '29% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I5-3470s 4 Núcleos 3.6 Ghz Lga 1155',
		precio1: '$649',
		precio2: '$649',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit 3 Ventiladores Gamer In Win Saturn Asn120 120mm Argb',
		precio1: '$1,199',
		precio2: '$899',
		descuento: '25% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por In win',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Kingston Fury Impact Soddr4 16gb 3200 Mhz Cl20',
		precio1: '$843',
		precio2: '$843',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Adata Ddr4 3200mhz 16gb Spectrix D60g Rgb',
		precio1: '$1,499',
		precio2: '$959.36',
		descuento: '36% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por XPG',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualización Gamer Core I5 10400 Tarjeta Madre 8gb',
		precio1: '$6,990',
		precio2: '$6,990',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Corei 3 12100 4.30ghz 12mb 1700 Bx807151210',
		precio1: '$2,805',
		precio2: '$2,805',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente de poder para PC Game Factor PSG650 650W negra 100V/240V',
		precio1: '$1,479',
		precio2: '$1,479',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_647692-MLA40425119298_012020-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: '2gb 800mhz Ddr2 Kingston Pc2-6400 Kvr800d2n6/2g 2 Piezas New',
		precio1: '$508.98',
		precio2: '$329.34',
		descuento: '35% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Pasta Térmica Plata 10gr Halnziye Hy710 Ps3 Xbox Led Cpu Gpu',
		precio1: '$117.30',
		precio2: '$75.90',
		descuento: '35% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: '',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus Prime H610m-e D4 Lga1700 Ddr4 Hdmi Glan',
		precio1: '$2,149',
		precio2: '$2,149',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Core I5 10400 Tarjeta Madre H410 8gb',
		precio1: '$6,990',
		precio2: '$4,543',
		descuento: '35% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i5-12600K BX8071512600K de 10 núcleos y  4.9GHz de frecuencia con gráfica integrada',
		precio1: '$5,739',
		precio2: '$5,739',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Yeyian Stahl 900 Midtower Atx Microatx Sin Fuente',
		precio1: '$714.95',
		precio2: '$714.95',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_953447-MLM44878671207_022021-W.webp',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i7-11700 BX8070811700 de 8 núcleos y  4.9GHz de frecuencia con gráfica integrada',
		precio1: '$5,799',
		precio2: '$5,799',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_859315-MLA46518329070_062021-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Cpu Intel Celeron J3060 Ram 8g Ssd 120gb Gabinete Fuente',
		precio1: '$4,074.90',
		precio2: '$3,875',
		descuento: '4% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_646121-MLM52700722842_122022-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder 80 Watts Hy-t80 Para Maquinas Láser Co2 Reci',
		precio1: '$6,000',
		precio2: '$6,000',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_924452-MLM44053609120_112020-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualización Gamer Core I5 10400 Tarjeta Madre 16gb',
		precio1: '$7,600',
		precio2: '$7,600',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_694785-MLM54914063586_042023-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i9-10900K BX8070110900K de 10 núcleos y  5.3GHz de frecuencia con gráfica integrada',
		precio1: '$8,499',
		precio2: '$8,499',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_810734-MLA43418472574_092020-W.webp',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Micro Atx Con Fuente De Poder 500w Acteck Ac-929028',
		precio1: '$749.95',
		precio2: '$749.95',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_672796-MLM41901145783_052020-W.webp',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Amd Ryzen 5 5600g 3.9ghz 16mb Am4 Pcie® 3.0',
		precio1: '$2,345',
		precio2: '$2,345',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_627810-MLM54836490217_042023-W.webp',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador AMD Ryzen 9 5950X 100-100000059WOF de 16 núcleos y  4.9GHz de frecuencia',
		precio1: '$9,255',
		precio2: '$9,255',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr4 Sodimm Adata 3200mhz 8gb Pc4-25600 1.2v',
		precio1: '$469',
		precio2: '$469',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta De Video Sapphire Nitro+ Amd Rx 6800 16gb Gddr6',
		precio1: '$34,199',
		precio2: '$26,599',
		descuento: '22% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_626059-MLM49562410366_042022-W.jpg',
		vendedor: 'por Mercado Libre Electronica',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia MSI  GeForce 200 Series 210 N210-MD1G/D3 1GB',
		precio1: '$799',
		precio2: '$799',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_754918-MLA32007146844_082019-W.webp',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualización Gamer Core I5 10400 Tarjeta Madre',
		precio1: '$5,350',
		precio2: '$4,226',
		descuento: '21% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_855257-MLM54767753889_032023-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia MSI  GeForce 200 Series 210 N210-MD1G/D3 1GB',
		precio1: '$799',
		precio2: '$799',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_754918-MLA32007146844_082019-W.jpg',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualización Gamer Core I5 10400 Tarjeta Madre 8gb',
		precio1: '$6,550',
		precio2: '$4,585',
		descuento: '30% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_985496-MLM54914071100_042023-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i7-11700F BX8070811700F de 8 núcleos y  4.9GHz de frecuencia',
		precio1: '$4,989',
		precio2: '$4,989',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_772715-MLA48211910743_112021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus Prime A320m-k Am4 Matx 4ddr4 Ryzen',
		precio1: '$1,360',
		precio2: '$1,047',
		descuento: '23% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder 120-230vac 24vdc 10amp Weidmuller 1469490000',
		precio1: '$4,578',
		precio2: '$4,578',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Intel Pentium Gold + H510m + 8gb',
		precio1: '$4,150',
		precio2: '$3,320',
		descuento: '20% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Tb-05003  500 W/ Atx',
		precio1: '$399',
		precio2: '$399',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_687157-MLM49421243530_032022-W.jpg',
		vendedor: 'por Acteck',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: '8 Gb 2rx8 Pc3l 12800s Memoria Ram Laptop Puskill',
		precio1: '$599',
		precio2: '$599',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Gigabyte  Eagle GeForce RTX 30 Series RTX 3050 GV-N3050EAGLE OC-8GD OC Edition 8GB',
		precio1: '$7,499',
		precio2: '$7,499',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por DDTECHMX',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Asus Prime H610m-k D4 Lga1700 Pcie 4.0 Ddr4',
		precio1: '$2,298',
		precio2: '$2,298',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Gamer Asus Rog Strix Helios Eatx Gx60 Media Torre',
		precio1: '$8,989',
		precio2: '$7,699',
		descuento: '14% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Asus',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Acteck Compact Micro Tower Acrilico Rgb Usb 3.0 Fue',
		precio1: '$1,199',
		precio2: '$1,199',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Acteck',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core I7-12700K BX8071512700K de 12 núcleos y  5GHz de frecuencia con gráfica integrada',
		precio1: '$7,490',
		precio2: '$7,490',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Tienda del Edomex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i7-11700K BX8070811700K de 8 núcleos y  5GHz de frecuencia con gráfica integrada',
		precio1: '$7,189',
		precio2: '$7,189',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualización Gamer Core I5 10400 Tarjeta Madre',
		precio1: '$6,290',
		precio2: '$6,290',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta De Video Pny Nvidia Geforce Rtx 3050 8gb Gddr6 Dual ',
		precio1: '$12,490',
		precio2: '$12,490',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta Madre Aorus B450 Aorus Elite V2 Am4 Ddr4 Atx Rgb',
		precio1: '$2,400',
		precio2: '$2,400',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por SVENSKA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Pentium Gold G6400 Tarjeta Madre 4gb 240gb',
		precio1: '$4,200',
		precio2: '$3,528',
		descuento: '16% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core I9-12900K BX8071512900K de 16 núcleos y  5.2GHz de frecuencia con gráfica integrada',
		precio1: '$10,298',
		precio2: '$10,298',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador gamer Intel Core i7-10700K BX8070110700K de 8 núcleos y  5.1GHz de frecuencia con gráfica integrada',
		precio1: '$6,287',
		precio2: '$6,287',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Gamer Balam Rush Dragonfly Atx 3 Fan Rgb Br-932806',
		precio1: '$1,899',
		precio2: '$1,299',
		descuento: '31% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Celeron G5925 BX80701G5925 de 2 núcleos y  3.6GHz de frecuencia con gráfica integrada',
		precio1: '$1,620',
		precio2: '$1,620',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr4 32gb 3200mhz Xpg Spectrix D50 Rgb 1x32gb',
		precio1: '$2,699',
		precio2: '$2,199',
		descuento: '18% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit De Actualizacion Mother Biostar+proce Amd+4 Gb+ssd 120gb',
		precio1: '$2,499',
		precio2: '$2,499',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I9 12900kf 16 Core 3.2 Ghz 1700',
		precio1: '$14,279',
		precio2: '$14,279',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta De Video Pny Nvidia Quadro Rtx A4000 16gb Gddr6',
		precio1: '$23,175',
		precio2: '$23,175',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I3 12100 4.30ghz Gráficas Integradas',
		precio1: '$3,309',
		precio2: '$3,309',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria Ram Ddr4 8gb Samsung Pc4-3200aa M471a1k43db2-cwe',
		precio1: '$588',
		precio2: '$470.40',
		descuento: '20% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Gabinete Balam Rush Skydron-e-atx/atx/microatx/miniitx Argb',
		precio1: '$2,699',
		precio2: '$2,699',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Acteck',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video AMD Asus  TUF Gaming Radeon 6800 Series RX 6800 XT TUF-RX6800XT-O16G-GAMING OC Edition 16GB',
		precio1: '$30,741.26',
		precio2: '$26,099',
		descuento: '15% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por NVIDIA',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Alimentacion 240w 24v 10a',
		precio1: '$3,940',
		precio2: '$3,940',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core I9-12900KF BX8071512900KF de 16 núcleos y  5.2GHz de frecuencia',
		precio1: '$9,347',
		precio2: '$9,347',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'T. Madre Asus Prime A320m-k, Chipset Amd A320,soporta:',
		precio1: '$1,099',
		precio2: '$1,099',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por PCEL',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Gamer Amd Ryzen 7 Pro 4750g + Tarjeta Madre B550 Wifi',
		precio1: '$8,099',
		precio2: '$8,099',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supergamer',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente De Poder Evga 1000w Gq Modular Certificacion Gold 80+',
		precio1: '$4,690',
		precio2: '$4,690',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Core I5 10400 Tarjeta Madre H410',
		precio1: '$5,749',
		precio2: '$4,139',
		descuento: '28% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Asus  TUF Gaming GeForce RTX 30 Series RTX 3060 Ti TUF-RTX3060TI-O8G-V2-GAMING OC Edition 8GB',
		precio1: '$13,768.98',
		precio2: '$11,069',
		descuento: '19% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I5 11400f 4.4ghz 1200 12mb Bx807081140',
		precio1: '$3,258',
		precio2: '$3,258',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Supermex',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Zotac  Gaming GeForce RTX 30 Series RTX 3070 ZT-A30700E-10PLHR 8GB',
		precio1: '$14,129.04',
		precio2: '$12,466',
		descuento: '11% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualizacion Core I5 10400 Tarjeta Madre H410 16gb',
		precio1: '$7,600',
		precio2: '$4,940',
		descuento: '35% OFF',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I7 12700k 3.6 Ghz Core 1700 12va Gen',
		precio1: '$7,757',
		precio2: '$7,757',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_905249-MLM68894800841_042023-W.jpg',
		vendedor: 'por Grupo Decme',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Gamer Ryzen 5 5600g Con Gráficos 16gb Ddr4',
		precio1: '$6,628.98',
		precio2: '$5,849',
		descuento: '11% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_772167-MLM51037357024_082022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Core i5-9600K BX80684I59600K de 6 núcleos y  4.6GHz de frecuencia con gráfica integrada',
		precio1: '$4,950',
		precio2: '$4,950',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_969811-MLA41292367753_032020-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Gigabyte  GeForce 700 Series GT 730 GV-N730D3-2GI (REV 3.0) 2GB',
		precio1: '$1,899',
		precio2: '$1,899',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_621094-MLA51556441894_092022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Xeon E2650 V2 16gb Ram Más Cooler',
		precio1: '$4,486.98',
		precio2: '$3,739',
		descuento: '16% OFF',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_836174-MLM50139875254_052022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Ventilador Salzer Pd157b 15cmx17cm 120vac',
		precio1: '$699',
		precio2: '$699',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_809465-MLM47558345085_092021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Zotac  Gaming GeForce RTX 20 Series RTX 2060 ZT-T20620F-10M 12GB',
		precio1: '$14,159',
		precio2: '$14,159',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_748078-MLA52007717922_102022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Procesador Intel Pentium Gold G6405 BX80701G6405 de 2 núcleos y  4.1GHz de frecuencia con gráfica integrada',
		precio1: '$1,984',
		precio2: '$1,984',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_848668-MLA54849824978_042023-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Kit Actualización Core I7 12700 Con Gráficos H610m Ram 16gb',
		precio1: '$12,000',
		precio2: '$12,000',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_700493-MLM52351911430_112022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Zotac  Gaming GeForce RTX 30 Series RTX 3060 ZT-A30600E-10M 12GB',
		precio1: '$10,899',
		precio2: '$10,899',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_809830-MLA45548333688_042021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video AMD Sapphire  Nitro+ Radeon 6700 Series RX 6700 XT 11306-01-20G 12GB',
		precio1: '$24,999',
		precio2: '$24,999',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: 'por Redragon',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta de video Nvidia  GeForce RTX 30 Series RTX 3090 24GB',
		precio1: '$39,850',
		precio2: '$39,850',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Tarjeta de video Nvidia PNY  RTX Series A4000 VCNRTXA4000-PB 16GB',
		precio1: '$20,481',
		precio2: '$20,481',
		descuento: '',
		Imagen:
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Asus  Phoenix GeForce GTX 16 Series GTX 1650 PH-GTX1650-O4GD6 OC Edition 4GB',
		precio1: '$5,232',
		precio2: '$5,232',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_803450-MLA44911778509_022021-W.jpg',
		vendedor: 'por Ibushak',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Asus  TUF Gaming GeForce RTX 30 Series RTX 3080 Ti TUF-RTX3080TI-O12G-GAMING OC Edition 12GB',
		precio1: '$44,825',
		precio2: '$44,825',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_882728-MLA48655460918_122021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Evga  FTW3 Ultra Gaming GeForce RTX 30 Series RTX 3080 Ti 12G-P5-3967-KR 12GB',
		precio1: '$42,627',
		precio2: '$42,627',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_613145-MLA48789588712_012022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video AMD Sapphire  Pulse Radeon RX 6600 Series RX 6600 11310-01-20G 8GB',
		precio1: '$8,965',
		precio2: '$8,965',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_730497-MLA48741004533_012022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia MSI  Gaming Z GeForce RTX 30 Series RTX 3080 GeForce RTX 3080 GAMING Z TRIO 10G LHR 10GB',
		precio1: '$28,575',
		precio2: '$28,575',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_739575-MLA53469163808_012023-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Rigol Dp832 Salida Triple 195 Vatios Fuente De Alimentación',
		precio1: '$26,316',
		precio2: '$26,316',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_832854-MLM25646087077_062017-W.jpg',
		vendedor: 'por CHUPAPRECIOS',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia MSI  Ventus GeForce RTX 30 Series RTX 3070 Ti GEFORCE RTX 3070 Ti VENTUS 3X 8G OC 8GB',
		precio1: '$22,844',
		precio2: '$22,844',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_648066-MLA48654665840_122021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Mining Motherboard - 12 Gpus Rig Mineria Bitcoin Ethereum',
		precio1: '$14,800',
		precio2: '$14,800',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_615213-MLM43322626003_082020-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Memoria RAM ValueRAM color verde  16GB 1 Kingston KVR26S19S8/16',
		precio1: '$765',
		precio2: '$765',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_891713-MLA48923683640_012022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Fuente Poder Acer 220 Ps-52219ab Ps-5221-09ae Dps-220ub-3a-',
		precio1: '$1,340',
		precio2: '$1,340',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_656308-MLM47309640920_082021-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre: 'Procesador Intel Core I5-11600k De Onceava Generación, 3.9',
		precio1: '$5,999',
		precio2: '$5,999',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_732620-MLM46820094767_072021-W.jpg',
		vendedor: 'por PCEL',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	},
	{
		id: generarId(),
		nombre:
			'Tarjeta de video Nvidia Asus  Dual GeForce RTX 20 Series RTX 2060 DUAL-RTX2060-O6G-EVO OC Edition 6GB',
		precio1: '$9,263',
		precio2: '$9,263',
		descuento: '',
		Imagen:
			'https://http2.mlstatic.com/D_NQ_NP_696492-MLA49851449808_052022-W.jpg',
		vendedor: '',
		envio: 'Envío gratis',
		puntuacion: generarNumeroAleatorio()
	}
]

export default ProductsEntry
