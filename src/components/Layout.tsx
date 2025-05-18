import React, { useEffect } from 'react';
import { useSidebar } from '../context/SidebarContext';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, close } = useSidebar();

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isOpen) {
        close();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, close]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div 
          className={`flex-1 transition-all duration-300 ${
            isOpen ? 'md:ml-64' : 'md:ml-16'
          }`}
        >
          <main>{children}</main>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
          onClick={close}
        />
      )}
    </div>
  );
};

export default Layout;