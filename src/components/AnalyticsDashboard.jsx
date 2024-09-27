import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import { Line } from 'react-chartjs-2';
import { subDays } from 'date-fns';

const AnalyticsDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const filterUsersByDate = (daysAgo) => {
    const fromDate = subDays(new Date(), daysAgo);
    return users.filter((user) => new Date(user.createdAt) >= fromDate).length;
  };

  const chartData = {
    labels: ['30 days', '15 days', '7 days', '24 hours'],
    datasets: [
      {
        label: 'User Registrations',
        data: [
          filterUsersByDate(30),
          filterUsersByDate(15),
          filterUsersByDate(7),
          filterUsersByDate(1),
        ],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>User Registration Analytics</h2>
      <Line data={chartData} />
    </div>
  );
};

export default AnalyticsDashboard;
