import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeLayout from './components/Layouts/ResumeLayout';
import Home from './pages/Home';
import Resumes from './pages/Resumes';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './redux/store';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import SimpleLayout from './components/Layouts/SimpleLayout';


function App() {


  return (
    <Provider store={store} >
      <Router>
        <Routes>
          {/* Section simple (sans Navbar/Dashboard) */}
          <Route element={<SimpleLayout />}>
            <Route path="/inscription" element={<SignupPage />} />
            <Route path="/connexion" element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Section Admin */}
          <Route element={<ResumeLayout />}>
            <Route index element={<Home />} />
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Provider>


  );
}

export default App;
