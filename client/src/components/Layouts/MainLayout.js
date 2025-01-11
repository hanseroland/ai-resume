import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children, mode, toggleTheme }) => {
  return (
    <>
      <Navbar mode={mode} toggleTheme={toggleTheme} />
          <main>
            <Outlet />
          </main>
      <Footer />
    </>
  );
};

export default MainLayout;
