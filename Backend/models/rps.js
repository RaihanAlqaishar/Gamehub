import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
    kalah: String,
    menang: [String]
})

const game = mongoose.model('Rps', gameSchema, 'Rps')

export default game
