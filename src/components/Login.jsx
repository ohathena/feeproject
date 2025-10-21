import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="input-field"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="input-field"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-pink-400"
              checked={formData.remember}
              onChange={(e) => setFormData({...formData, remember: e.target.checked})}
            />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-pink-400 hover:text-pink-500">Forgot Password?</a>
        </div>
        <button type="submit" className="btn-primary w-full">
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-pink-400 hover:text-pink-500">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;