import React, { useState } from 'react';
import { createUser, updateUser } from '../utils/api';

const UserForm = ({ selectedUser, onSubmit }) => {
  const [user, setUser] = useState(selectedUser || { name: '', email: '', role: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user.id, user).then(onSubmit);
    } else {
      createUser(user).then(onSubmit);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <select name="role" value={user.role} onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button type="submit">{user.id ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default UserForm;
