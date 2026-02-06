import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, User } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-neutral-800/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="glass-panel p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-neutral-400">Sign in to manage your finances</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">
                Email Address
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="glass-input w-full pl-10 pr-4 py-3 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-neutral-300">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="glass-input w-full pl-10 pr-4 py-3 rounded-xl"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex justify-center items-center gap-2 group"
            >
              Sign In
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-neutral-500">
            Don't have an account?{" "}
            <a href="#" className="text-white hover:underline">
              Apply for a Loan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
