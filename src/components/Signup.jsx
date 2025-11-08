import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Signup = () => {
  const basePath = import.meta.env.BASE_URL || '/';
  const navigate = useNavigate();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Create user account and login
    login({ 
      name: formData.name,
      email: formData.email 
    });
    alert("Signup successful! Redirecting...");
    navigate("/login");
  };

  return (
     <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${basePath}login.jpg)` }}

    >
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-center mb-4">
    <img
      src={`${basePath}logo.png`} 
      alt="Login Illustration"
      className="w-45 h-24 object-contain"
    />
  </div>
  <hr className="border-t-2 border-gray-300 my-4 w-1/2 mx-auto" />
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="input-field"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
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
        <div>
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            className="input-field"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>
        <button type="submit" className="bg-gray-800/90 btn-primary w-full">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-pink-400 hover:text-pink-500">
          Login
        </Link>
      </p>
    </div>
    </div>
  );
};

export default Signup;