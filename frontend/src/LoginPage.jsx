import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (username.length ==0){
    } else{
      toast.success("logged successfully")
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long.');
    } else {
      // Perform authentication logic here (e.g., send login request to a server)
      // If authentication is successful, you can navigate to the next page
      // If authentication fails, you can show an error message
      // For simplicity, we'll just display a success message here
      toast.success('Login successful!');
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4 w-full">
              <label htmlFor="username" className="block text-gray-600">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="password" className="block text-gray-600">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 text-right">
              <a href="" className="text-black hover:underline "onClick={()=> Navigate('/forgot')}>Forgot Password?</a>
            </div>
            <div className="mb-4 w-full">
              <button type="submit" className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-green-600"onClick={()=> Navigate('/contact')}>Login</button>
            </div>
          </form>
          <div className="text-center w-full">
            <p className="text-gray-600">Don't have an account? <a href="#" className="text-blue-500 hover:underline" onClick={()=> Navigate('/create')}>Create Account</a></p>
            <p className="text-gray-600 mt-2">Or sign in with</p>
            <div className="mt-2">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600"
                onClick={() => {
                  // Perform Google login logic here
                  toast.success('Google login successful!');
                }}
              >
                Google
              </button>
              {/* Add more social login buttons as needed */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default LoginPage;