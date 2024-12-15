const mongoose = require('mongoose');

// Define the schema for Todo
const todoSchema = new mongoose.Schema({
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
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the model from the schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
