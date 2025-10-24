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
    navigate("/");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      <div className="w-full max-w-md bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
    <img
      src="/logo.png" 
      alt="Login Illustration"
      className="w-45 h-24 object-contain"
    />
         </div>
  <hr className="border-t-2 border-gray-300 my-4 w-1/2 mx-auto" />
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-rose-400"
                checked={formData.remember}
                onChange={(e) =>
                  setFormData({ ...formData, remember: e.target.checked })
                }
              />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-rose-400 hover:text-rose-500">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800/90 hover:bg-rose-600 text-white font-medium py-2 rounded-lg transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-rose-400 hover:text-rose-500 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
