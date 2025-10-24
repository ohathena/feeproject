import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Fashion from "./components/Fashion";
import Beauty from "./components/Beauty";
import KidsFashion from "./components/KidsFashion";
import Wishlist from "./components/Wishlist";
import NewArrivals from "./components/NewArrivals";
import Sale from './components/Sale';
import Footer from './components/Footer';
import Women from './components/women.jsx';
import Men from './components/Men.jsx';

function AppContent() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Detect if we’re on Login or Signup page
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Show Navbar only when NOT on login/signup */}
      {!isAuthPage && (
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          isMinimal={false}
        />
      )}

      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion/women" element={<Women />} />
          <Route path="/fashion/men" element={<Men />} />
          <Route path="/fashion/kids" element={<KidsFashion />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/new" element={<NewArrivals />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </main>

      {/* ✅ Show Footer only when NOT on login/signup */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
