import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/login";
import Register from "../Pages/register";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
