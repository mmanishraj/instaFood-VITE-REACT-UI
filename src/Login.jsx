import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen bg-[#ADE8F4] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">🔐 Welcome Back</h1>

        <form className="space-y-4">
          <div>
            <input type="text" placeholder="Username" className="w-full px-4 py-2 border border-gray-400 rounded-md" required/>
          </div>
          
          <div>
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-400 rounded-md" required/>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-700">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-lime-600" />
              Remember me
            </label>
            <a href="#" className="text-lime-700 hover:underline">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="w-full bg-lime-700 hover:bg-lime-200 text-white hover:text-black py-2 rounded-md transition duration-300 font-bold">
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-700">
          Don't have an account?{' '}
          <a href="#" className="text-lime-700 hover:underline font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;