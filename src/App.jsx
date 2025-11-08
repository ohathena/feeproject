import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "./context/UserContext";
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
import KidsBaby from './components/KidsBaby';
import KidsToddler from './components/KidsToddler';
import KidsLittle from './components/KidsLittle';
import KidsBig from './components/KidsBig';
import KidsTeens from './components/KidsTeens';
import Skincare from './components/Skincare';
import Makeup from './components/Makeup';
import Haircare from './components/Haircare';
import Fragrance from './components/Fragrance';
import SkincareRoutine from './components/SkincareRoutine';
import MakeupBase from './components/MakeupBase';
import HairCareTips from './components/HairCareTips';
import Cart from './components/Cart';
import SummerCollection from './components/SummerCollection';
import WinterCollection from './components/WinterCollection';
import Accessories from './components/Accessories';
import SearchResults from './components/SearchResults';
import Profile from './components/Profile';
import Orders from './components/Orders';



function AppContent() {
  const location = useLocation();
  const { user } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user exists in localStorage to persist authentication
    try {
      const savedUser = localStorage.getItem('glamora_user');
      return !!savedUser;
    } catch {
      return false;
    }
  });

  // Sync authentication state with user context
  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Show Navbar only when logged in */}
      {isAuthenticated && !isAuthPage && (
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          isMinimal={false}
        />
      )}

      <main className="flex-grow">
        <Routes>
          {/* Default route — if not logged in, go to login */}
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" replace />
            }
          />

          {/* Auth Routes */}
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes (only when logged in) */}
          {isAuthenticated && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/fashion/women" element={<Women />} />
              <Route path="/fashion/men" element={<Men />} />
              <Route path="/fashion/kids" element={<KidsFashion />} />
              <Route path="/fashion/kids/baby" element={<KidsBaby />} />
              <Route path="/fashion/kids/toddler" element={<KidsToddler />} />
              <Route path="/fashion/kids/little-kids" element={<KidsLittle />} />
              <Route path="/fashion/kids/big-kids" element={<KidsBig />} />
              <Route path="/fashion/kids/teens" element={<KidsTeens />} />
              <Route path="/beauty" element={<Beauty />} />
              <Route path="/beauty/skincare" element={<Skincare />} />
              <Route path="/beauty/makeup" element={<Makeup />} />
              <Route path="/beauty/haircare" element={<Haircare />} />
              <Route path="/beauty/fragrance" element={<Fragrance />} />
              <Route path="/beauty/tips/skincare-routine" element={<SkincareRoutine />} />
              <Route path="/beauty/tips/makeup-base" element={<MakeupBase />} />
              <Route path="/beauty/tips/hair-care" element={<HairCareTips />} />
              <Route path="/fashion/summer" element={<SummerCollection />} />
              <Route path="/fashion/winter" element={<WinterCollection />} />
              <Route path="/fashion/accessories" element={<Accessories />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/new" element={<NewArrivals />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
             
            </>
          )}
        </Routes>
      </main>

      {/* ✅ Show footer only when logged in */}
      {isAuthenticated && !isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router basename="/feeproject">
      <AppContent />
    </Router>
  );
}

export default App;
