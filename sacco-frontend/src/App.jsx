import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register.jsx";



function App() {
  return (
    <Router>
    
        
        <Route path="/register" element={<Register />} />
        
      
    </Router>
  );
}

export default App;
