import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
	res.send('Im get')
})

router.patch(`/`, (_req, res) => {
	res.send('Im Patch')
})

export default router
