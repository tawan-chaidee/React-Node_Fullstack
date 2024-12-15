const Todo = require('../models/todo');

// Controller for adding a Todo
async function addTodo(req, res) {
    try {
        const { id, topic, description, tags } = req.body;
        const newTodo = new Todo({ id, topic, description, tags });
        await newTodo.save();
        res.status(201).json({ message: 'Todo added successfully', newTodo });
    } catch (error) {
        res.status(500).json({ message: 'Error adding todo', error });
    }
}

// Controller for deleting a Todo
async function deleteTodoById(req, res) {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findOneAndDelete({ id });

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully', deletedTodo });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo', error });
    }
}

// Controller for getting all Todos
async function getAllTodos(req, res) {
    try {
        const todos = await Todo.find();
        res.status(200).json({ message: 'Todos retrieved successfully', todos });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving todos', error });
    }
}

module.exports = {
    addTodo,
    deleteTodoById,
    getAllTodos
};
