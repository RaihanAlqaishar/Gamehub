import express from 'express'
import rps from '../models/rps.js'

const router = express.Router()

router.get('/', async(req,res) => {
    try{
        const data = await rps.findOne()
        res.json(data)
    }catch(err){
        console.log(err)
    }
})

export default router