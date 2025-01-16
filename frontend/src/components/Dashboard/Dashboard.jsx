import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [updates, setUpdates] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get('/api/dashboard');
        setUpdates(res.data.updates);
        setMetrics(res.data.metrics);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err.response.data.error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h2>Community Dashboard</h2>
      <section>
        <h3>Updates</h3>
        <ul>
          {updates.map((update) => (
            <li key={update.id}>
              <strong>{update.message}</strong> ({update.date})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Key Metrics</h3>
        <p>Total Members: {metrics.totalMembers}</p>
        <p>New Joiners: {metrics.newJoiners}</p>
        <p>Recent Activities: {metrics.recentActivities}</p>
      </section>
    </div>
  );
};

export default Dashboard;
