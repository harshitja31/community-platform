import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUser(res.data.user))
        .catch(() => {
          localStorage.removeItem('token');
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
  

  const register = async ({ name, email, password }) => {
    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Registration error:', error.response.data.message);
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      const res = await axios.post('/api/auth/login', credentials);
      const { token, user } = res.data;
  
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || 'Unknown error');
      throw err;
    }
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
