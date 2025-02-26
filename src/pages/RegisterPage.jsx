import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myaxios from '../utils/myaxios';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    
    const handleRegister = (e) => {
        e.preventDefault();
    
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
    
        console.log("Form Data:", data); // Debugging log
    
        if (data.password !== data.confirm_password) {
            setError("Passwords do not match");
            return;
        }
        setError("");
    
        // Remove `confirm_password` before sending the request
        delete data.confirm_password;
    
        myaxios.post(
            "users/register",
            data,
            { headers: { "Content-Type": "application/json" } } // Ensure JSON format
        )
        .then((response) => {
            console.log("Response:", response.data); // Debugging log
    
            if (response.data.status === "success") {
                navigate("/login");
            } else {
                setError(response.data.message || "Registration failed. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error:", error.response?.data);
            setError(error.response?.data?.message || "Registration failed. Please try again.");
        });
    };
    

    return (
        <div className="flex h-screen w-screen">
            {/* Left Section */}
            <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10">
                <img src="/logo.png" alt="Website Logo" className="w-24 h-24 mb-4" />
                <h1 className="text-4xl font-bold">Stowa</h1>
                <p className="text-lg mt-2 text-center max-w-md">
                    Join our platform today and start your journey!
                </p>
            </div>
            
            {/* Right Section */}
            <div className="w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone Number</label>
                            <input type="tel" name="phone_number" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input type="password" name="confirm_password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm your password" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
