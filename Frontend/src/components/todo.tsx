import React from 'react';
import './todo.css';  // Import the CSS file
import '../model/ITodo'

interface TodoListProps {
    todoList: Todo[];
}

interface TagProps {
    label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
    return (
        <span className="tag">
            {label}
        </span>
    );
};

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {todoList.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <h2>{todo.topic}</h2>
                        <p>{todo.description}</p>
                        <div className="tags-container">
                            {todo.tags.map((tag, tagIndex) => (
                                <Tag key={tagIndex} label={tag} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
