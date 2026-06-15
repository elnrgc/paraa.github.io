import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuthStore } from '../store/authStore';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = await login(email, password);
    if (success) navigate('/dashboard');
    else setError('Access denied. Invalid credentials.');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Link to="/" className="inline-block mb-8">
            <span className="text-white font-extrabold text-3xl tracking-tight">paraa<span className="text-neutral-500">.</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-neutral-500 text-sm">Authorized personnel only</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={handleSubmit}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">{error}</div>}

          <div className="space-y-4 mb-6">
            <Input label="Username" type="text" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} leftIcon={<Mail className="w-5 h-5" />} required />
            <div className="relative">
              <Input label="Password" type={showPassword ? 'text' : 'password'} placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} leftIcon={<Lock className="w-5 h-5" />} required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-neutral-500 hover:text-white">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button type="submit" fullWidth isLoading={isLoading} rightIcon={<ArrowRight className="w-4 h-4" />}>
            Sign In
          </Button>

          <p className="mt-6 text-center">
            <Link to="/" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">← Back to website</Link>
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => { navigate('/'); }, [navigate]);
  return null;
};
