import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/fashion/kids" element={<KidsFashion />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/new" element={<NewArrivals />} />
            <Route path="/sale" element={<Sale />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;