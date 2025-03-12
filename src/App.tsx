import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  Leaf,
  Mail,
  MapPin,
  Phone,
  Heart,
  Coffee,
  Brain,
  Activity,
  Shield,
  Smile,
  Droplet,
  Sun,
} from "lucide-react";
import Pricing from './components/Pricing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import components
import LandingPage from './pages/LandingPage';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Orders from './pages/admin/Orders';
import Settings from './pages/admin/Settings';
import AdminLayout from './components/layouts/AdminLayout';
import OrderDetails from './pages/admin/OrderDetails';

// Define the benefits array
const benefits = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Antioxidant Properties",
    description: "Rich in chlorogenic acids to reduce oxidative stress and fight free radicals.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Weight Management",
    description: "Promotes fat burning and reduces body fat by boosting metabolism naturally.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Mental Clarity",
    description: "Enhances focus and cognitive function for improved mental performance.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Heart Health",
    description: "Supports cardiovascular health and maintains healthy blood pressure levels.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Immune Support",
    description: "Strengthens the immune system with essential vitamins and minerals.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Natural Energy",
    description: "Provides sustained energy without the crash of artificial stimulants.",
  }
];

interface PrivateRouteProps {
  children: React.ReactNode;
}

// Auth guard component
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminToken');
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
};

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/login" element={<Login />} />

          {/* Protected admin routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<OrderDetails />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

