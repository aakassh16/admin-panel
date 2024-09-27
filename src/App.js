
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import AnalyticsDashboard from './components/AnalyticsDashboard';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleFormSubmit = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <UserList onEdit={handleEdit} />
      <UserForm selectedUser={selectedUser} onSubmit={handleFormSubmit} />
      <AnalyticsDashboard />
    </div>
  );
};


export default App;
