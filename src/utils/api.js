import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

// CRUD

// Fetch all users
export const getUsers = () => axios.get(API_URL);

// Fetch a single user by ID
export const getUserById = (id) => axios.get(`${API_URL}/${id}`);

// Create a new user
export const createUser = (user) => axios.post(API_URL, user);

// Update a user by ID
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);

// Delete a user by ID
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
