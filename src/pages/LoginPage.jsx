import React from "react";
import { useNavigate, Link } from "react-router-dom";
import myaxios from '../utils/myaxios';

const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        myaxios.post(
            "users/login",
            data
        ).then((response) => {
            console.log(response.data);
            navigate("/dashboard");
        }
        ).catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className="flex h-screen w-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10">
        <img src="/logo.png" alt="Website Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-4xl font-bold">Stowa</h1>
        <p className="text-lg mt-2 text-center max-w-md">
          Welcome to our platform. Please log in to continue.
        </p>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email" 
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password" 
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
