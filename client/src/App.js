import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeLayout from './components/Layouts/ResumeLayout';
import Home from './pages/Home';
import Resumes from './pages/Resumes';
import Profile from './pages/Profile';


function App() {
 

  return (
     <Router>
       <Routes>
           {/* Section Admin */}
           <Route element={<ResumeLayout/>}>
            <Route index element={<Home />} />
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
       </Routes>
     </Router>
   
  );
}

export default App;
