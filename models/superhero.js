const mongoose = require('mongoose');

const superHeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true

    },
    strength: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    speed: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    intelligence: {
        type: mongoose.Schema.Types.Number,
        required: true
    }
});

module.exports = mongoose.model('SuperHero', superHeroSchema)