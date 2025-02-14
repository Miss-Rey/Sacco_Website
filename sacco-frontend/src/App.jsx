import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register.jsx";
import HomePage from './Pages/Home.jsx';
import Login from './Pages/login.jsx';
import Profile from './Pages/Profile.jsx';


import "./index.css";

function App() {
  return (
    <Router>
    <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />



        </Routes>
      
    </Router>
  );
}

export default App;
