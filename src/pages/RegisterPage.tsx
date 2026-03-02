import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Common/Input';
import { Button } from '../components/Common/Button';
import { useAuthStore } from '../stores/authStore';
import { motion } from 'motion/react';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock register
    setTimeout(() => {
      login({ id: '1', email, name }, 'mock-token');
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-dark p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-bg-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
      >
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center font-bold text-3xl text-white shadow-xl shadow-brand/20">P</div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Create Account</h1>
            <p className="text-white/50">Join the PlexParty community</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input 
            label="Full Name" 
            type="text" 
            placeholder="John Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="name@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <Button type="submit" size="lg" className="w-full h-12" isLoading={isLoading}>
            Get Started
          </Button>
        </form>

        <p className="text-center mt-8 text-white/50">
          Already have an account?{' '}
          <Link to="/login" className="text-brand font-medium hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
};
