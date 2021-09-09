const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        required: false,
        type: String,
        unique: true
    },
    cheers: {
        required: true,
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    goldMedals: {
        type: Number,
        default: 0,
        required: true
    },
    silverMedals: {
        type: Number,
        default: 0,
        required: true
    },
    bronzeMedals: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('country', countrySchema);
