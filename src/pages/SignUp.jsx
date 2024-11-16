// src/pages/SignUp.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Phone, User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Details, 2: OTP
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (step === 2) {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitDetails = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your registration logic here
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleOtpChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    const nextEmptyIndex = newOtp.findIndex(val => !val);
    if (nextEmptyIndex === -1) {
      inputRefs.current[5]?.focus();
    } else {
      inputRefs.current[nextEmptyIndex]?.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Add your OTP verification logic here
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
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

      {/* Sign Up Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#2D1B69]">
          {step === 1 ? 'SIGN UP' : 'VERIFY NUMBER'}
        </h1>

        {step === 1 ? (
          // Registration Form
          <form onSubmit={handleSubmitDetails} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-11 py-3 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#6E57E6]"
                required
              />
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-11 py-3 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#6E57E6]"
                required
              />
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-11 py-3 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#6E57E6]"
                required
                pattern="[0-9]{10}"
                maxLength={10}
              />
              <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-11 py-3 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#6E57E6]"
                required
                minLength={6}
              />
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-11 py-3 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#6E57E6]"
                required
                minLength={6}
              />
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            </div>

            <button
              type="submit"
              disabled={isLoading || 
                !formData.name || 
                !formData.email || 
                formData.phone.length !== 10 || 
                !formData.password ||
                formData.password !== formData.confirmPassword}
              className="w-full rounded-xl bg-[#2D1B69] py-3 text-sm font-medium text-white transition-colors hover:bg-[#231458] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? 'Creating Account...' : 'Continue'}
            </button>
          </form>
        ) : (
          // OTP Verification Form
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-gray-600">Enter verification code sent to</p>
              <p className="text-[#2D1B69] font-medium">{formData.phone}</p>
            </div>

            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-lg font-semibold rounded-xl border-2 border-gray-300 focus:border-[#6E57E6] focus:ring-2 focus:ring-[#6E57E6] outline-none transition-all"
                  maxLength={1}
                />
              ))}
            </div>

            <div className="flex justify-between items-center text-sm">
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setOtp(['', '', '', '', '', '']);
                }}
                className="text-[#6E57E6] hover:underline"
              >
                Change Details
              </button>
              <button
                type="button"
                onClick={handleSubmitDetails}
                disabled={isLoading}
                className="text-[#6E57E6] hover:underline"
              >
                Resend OTP
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading || otp.some(digit => !digit)}
              className="w-full rounded-xl bg-[#2D1B69] py-3 text-sm font-medium text-white transition-colors hover:bg-[#231458] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Create Account'}
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[#FF5757] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}