import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register.jsx";
import HomePage from './Pages/Home.jsx';
import Login from './Pages/login.jsx';
import Profile from './Pages/Profile.jsx';
import Button from '/src/components/ui/button.jsx';
import About from './Pages/About.jsx';
import Governance from './Pages/Governance.jsx';
import GivingBack from './Pages/GivingBack.jsx';
import SaccoStaff from './Pages/SaccoStaff.jsx';
import FAQs from './Pages/faqs.jsx';
import Loader from './Pages/loader.jsx';

import "./index.css";

function App() {
  return (
    <Router>
    <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/button" element={<Button />} />
        <Route path="/About" element={<About />} />
        <Route path="/Governance" element={<Governance />} />
        <Route path="/Sacco-Staff" element={<SaccoStaff />} />
        <Route path="/Giving-Back" element={<GivingBack />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/loader" element={<Loader />} />



        </Routes>
      
    </Router>
  );
}

export default App;
