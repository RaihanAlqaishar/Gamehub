import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
    kategori: String,
    kata: [String]
})

const game = mongoose.model('hangman', gameSchema, 'Hangman_Game')

export default game
