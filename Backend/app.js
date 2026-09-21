import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import hangmanRoutes from './routes/hangman.js'
import caturRoutes from './routes/catur.js'
import rpsRoutes from './routes/rps.js'

const app  = express();
app.use(cors());

const mongoString = process.env.MONGODB_URI;

mongoose.connect(mongoString)

app.use('/hangman', hangmanRoutes)
app.use('/catur', caturRoutes)
app.use('/rps', rpsRoutes)

app.get('/', (req, res) => {
    res.send('Backend Web Games berhasil jalan')
})
    
export default app

