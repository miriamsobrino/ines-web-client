import React from 'react';
import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { useState } from 'react';
const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://ines-web-server.vercel.app/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        login();
        navigate('/admin/edit');
      } else {
        navigate('/admin');
        alert('Login failed!');
      }
    } catch (e) {
      alert('Login failed!');
    }
  };
  return (
    <div className='flex flex-col  justify-center items-center mt-10'>
      <h2 className='text-2xl mb-4'>Admin Panel</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-[20%]'>
        <input
          className='px-2'
          placeholder='Usuario'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='px-2'
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Acceder</Button>
      </form>
    </div>
  );
};

export default Admin;
