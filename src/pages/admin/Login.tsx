import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      method: "POST", // Use POST for sending data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:  credentials.email,
        password: credentials.password,
      }),
    };
    // const response = await axios(
    //   "https://trimmexapi.vercel.app/api/users/login",
    //   orderData
    // );

    const API_URL = "https://trimmexapi.vercel.app/api/users/login";



    const response = await axios.post(
      API_URL,
      {
        email: "user@example.com",
        password: "password123",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Use this only if your API requires cookies (CORS)
      }
    );

    // Add your authentication logic here
   // localStorage.setItem('adminToken', 'dummy-token');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 