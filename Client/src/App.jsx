import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'; import Dashboard from './pages/Dash'
import Navbar from "./components/Navbar";

// import Aside from './components/dash-components/aside';
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import ProductsPage from './pages/Products';
import AddProductPage from './pages/AddProduct';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/dashboard' && location.pathname !== '/dashboard/products' && location.pathname !== '/dashboard/add-product';
  // const showAside = location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/profile' && location.pathname !== '/settings' && location.pathname !== '/dashboard' && location.pathname !== '/dashboard/products' && location.pathname !== '/' && location.pathname !== '/dashboard/add-products';

  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
      {showNavbar && <Navbar />}
      {/* {showAside && <Aside />} */}
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<ProductsPage />} />
        <Route path="/dashboard/add-product" element={<AddProductPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};
export default App;
