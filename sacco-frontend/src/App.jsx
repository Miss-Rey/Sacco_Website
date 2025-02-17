<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> upstream/development
import Register from "./Pages/register.jsx";
import HomePage from './Pages/Home.jsx';
import Login from './Pages/login.jsx';
import Profile from './Pages/Profile.jsx';
<<<<<<< HEAD
import Button from '/src/components/ui/button.jsx';
import About from './Pages/About.jsx';
import Governance from './Pages/Governance.jsx';
import GivingBack from './Pages/GivingBack.jsx';
import SaccoStaff from './Pages/SaccoStaff.jsx';
import FAQs from './Pages/faqs.jsx';
import Loader from './Pages/loader.jsx';

=======
import Loans from "./Pages/Loans.jsx";
>>>>>>> upstream/development
import "./index.css";

function App() {
  return (
<<<<<<< HEAD
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
=======
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/loans" element={<Loans />} />
    </Routes>
>>>>>>> upstream/development
  );
}

export default App;
