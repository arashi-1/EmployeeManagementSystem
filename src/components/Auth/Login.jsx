import React, { useState } from 'react';

const Login = ({ handleLogin }) => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);  
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
        <div className='space-y-6 p-8 rounded-lg shadow-md w-full max-w-md bg-gray-800'>
          <h1 className='text-3xl font-bold text-white text-center'>Welcome Back!</h1>
          <p className='text-gray-400 text-center'>Please login to continue</p>
          <form className='space-y-4' onSubmit={submitHandler}>
            <div>
              <h1 className='font-semibold text-white mb-1'>Email</h1>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder='Enter your E-mail'
                className='w-full p-3 rounded bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2'
              />
            </div>
            
            <div>
              <h1 className='font-semibold text-white mb-1'>Password</h1>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder='Enter Password'
                className='w-full p-3 rounded bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3'
              />
            </div>

            <button type="submit" className="w-full p-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transition-transform transition-all duration-200 ease-in-out">
              Login
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-4">Don’t have an account? <a href="#" className="text-blue-500 hover:text-blue-400 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </>
  );
};

export default Login;

