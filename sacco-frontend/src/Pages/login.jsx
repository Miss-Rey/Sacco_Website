import { React, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();
  const endpoint = import.meta.env.VITE_SACCO_ENDPOINT;
  const { enqueueSnackbar } = useSnackbar();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      enqueueSnackbar('Email and password are required', { variant: 'error' });
      return;
    }
    try {
       const response = await axios.post(`${endpoint}/api/Login`, { email, password });
       if (response.status === 200) {
        const { accessToken, userId, role } = response.data;
         localStorage.setItem('accessToken', accessToken);
         localStorage.setItem('userId', userId);
         localStorage.setItem('userRole', role);

         enqueueSnackbar('Login Successful', { variant: 'success' });
        navigateTo(`/${role}-dashboard`);
      }
    } catch (error) {
      enqueueSnackbar(
         error.response?.status === 401 ? 'Invalid credentials' : 'Login failed',{ variant: 'error' }
       );
    }
   };

  return (
    <div className='flex flex-col w-full h-screen items-center gap-20 text-black'>
      <div className='flex px-10 font-bold text-xl bg-blue-500 text-white w-full h-16 items-center'>
        <h2>SACCO Management System</h2>
      </div>
      <div>
        <h2 className='font-bold text-xl'>Member Login</h2>
      </div>
      <form className='flex w-72 md:w-96 flex-col gap-4'>
        <div>
          <Label htmlFor='email' value='Email' />
          <TextInput id='email' type='email' value={email} placeholder='you@example.com' className='bg-white' onChange={handleEmailChange} required />
        </div>
        <div>
          <Label htmlFor='password' value='Password' />
          <TextInput id='password' type='password' value={password} onChange={handlePasswordChange} required />
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>
        <Button type='submit' onClick={handleSubmit}>Login</Button>
        <div className='flex justify-center gap-5 text-sm text-blue-500 cursor-pointer hover:text-blue-800'>
          <h2><Link to='/register'>Register</Link></h2>
          <h2><Link to='/forgot-password'>Forgot Password?</Link></h2>
        </div>
        <div className='flex flex-col text-center gap-5 border-t-2 py-10'>
          <h2 className='text-xl font-semibold'>Login as</h2>
          <div className='flex justify-center items-center gap-6'>
            <Link to='/employee-login' className='text-blue-600 text-sm'>Employee</Link>
            <Link to='/admin-login' className='text-blue-600 text-sm'>Admin</Link>
          </div>
        </div>
      </form>
      <footer className='w-full h-10 flex items-center text-sm bg-blue-500 text-white px-10'>
        &copy; {new Date().getFullYear()} SACCO Management. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
