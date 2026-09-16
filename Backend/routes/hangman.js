import express from 'express'
import game from '../models/hangman.js'

const router = express.Router()

router.get('/', async (req,res) => {
    try{
        const data = await game.find({}, 'kategori')
        const kategori = data.map(item => item.kategori)
        res.json(kategori)
    } catch(err){
        console.log(err)
    }
})

router.get('/:kategori', async (req,res) => {
    try{
        const kategoriParam = req.params.kategori;
        const data = await game.findOne({ kategori: kategoriParam }, 'kategori kata')
        res.json(data)
    }catch(err){
        console.log(err)
    }
})

export default router