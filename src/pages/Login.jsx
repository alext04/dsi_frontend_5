/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here
    setTimeout(() => setIsLoading(false), 1000); // Simulate API call
  };

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-[#6E57E6] to-[#9181F4] px-4 py-8">
      {/* 3D Spheres */}
      <div 
        className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#A89CF4] opacity-70" 
        style={{ boxShadow: '0 0 40px rgba(168, 156, 244, 0.5)' }} 
      />
      <div 
        className="absolute -right-20 top-1/3 h-40 w-40 rounded-full bg-[#A89CF4] opacity-70" 
        style={{ boxShadow: '0 0 40px rgba(168, 156, 244, 0.5)' }} 
      />
      <div 
        className="absolute bottom-20 left-1/4 h-32 w-32 rounded-full bg-[#A89CF4] opacity-70" 
        style={{ boxShadow: '0 0 40px rgba(168, 156, 244, 0.5)' }} 
      />

      {/* Login Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#2D1B69]">LOGIN</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-xl bg-gray-100 px-11 py-3 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#6E57E6]"
              required
            />
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-gray-100 px-11 py-3 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#6E57E6]"
              required
            />
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-[#2D1B69] py-3 text-sm font-medium text-white transition-colors hover:bg-[#231458] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>

        <div className="my-6 flex items-center justify-center gap-2">
          <div className="h-px w-full bg-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <div className="h-px w-full bg-gray-300" />
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google" width={20} height={20} />
          Sign in with Google
        </button>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-[#FF5757] hover:underline">
            Sign up for free!
          </Link>
        </p>
      </div>
    </div>
  );
}