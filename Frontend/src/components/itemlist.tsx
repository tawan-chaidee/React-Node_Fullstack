import React, { useState } from 'react';
import { User } from '../model/Iuser';
import './itemlist.css';
import Spacer from './spacer';

interface ItemListProps {
  UsersList: User[];
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
  onAddUser: () => void; 
}

export const ItemList: React.FC<ItemListProps> = ({ UsersList, onEdit, onDelete, onAddUser }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = UsersList.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="item-list-container">
      <div className="header-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search by username or email" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button onClick={onAddUser} className="add-button">Add User</button>
      </div>
      <ul className="item-list">
        {filteredUsers.map((user, index) => (
          <li key={index} className="item">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            
            <div className="item-actions">
              <button onClick={() => onEdit(user._id)} className="edit-button">Edit</button>
              <button onClick={() => onDelete(user._id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
