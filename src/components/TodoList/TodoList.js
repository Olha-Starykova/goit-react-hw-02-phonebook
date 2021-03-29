import React from 'react';
import './TodoList.css'

const TodoList = (({ contacts, onDeleteTodo }) =>
    <ul className="TodoList">
        {contacts.map(({ id, name, number }) => (
            <li key={id} className="TodoList__item">
                <p className="TodoList__text">{name}: {number}</p>
                <button onClick={() => onDeleteTodo(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default TodoList;
