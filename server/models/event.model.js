const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    countries: {
        type: [String],
        default: [],
        required: true
    }
});

module.exports = mongoose.model('event', eventSchema);
