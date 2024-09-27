import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../utils/api';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id).then(() => {
        setUsers(users.filter((user) => user.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
