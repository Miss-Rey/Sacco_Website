import { Routes, Route } from "react-router-dom";
import Register from "./Pages/register.jsx";
import HomePage from './Pages/Home.jsx';
import Login from './Pages/login.jsx';
import Profile from './Pages/Profile.jsx';
import Loans from "./Pages/Loans.jsx";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/loans" element={<Loans />} />
    </Routes>
  );
}

export default App;
