const mongoose = require('mongoose');

export const todoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    topic: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});
