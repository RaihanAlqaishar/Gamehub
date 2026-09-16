import express from 'express'
import catur from '../models/catur.js'

const router = express.Router()

router.get('/', async (req,res) => {
    try{
    const data = await catur.findOne()
    res.json(data)
    } catch(err){
        console.log(err)
    }
})

export default router