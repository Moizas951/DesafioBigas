import React from 'react';
import { FileText, BarChart } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { isOpen } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { name: 'Pedidos', icon: <FileText size={20} />, path: '/orders' },
    { name: 'Analytics', icon: <BarChart size={20} />, path: '/analytics' }
  ];

  // Determine if a menu item is active based on the current path
  const isActive = (path: string): boolean => {
    if (path === '/orders' && (location.pathname === '/' || location.pathname === '/orders')) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <aside
      className={`fixed top-16 left-0 z-20 h-[calc(100vh-4rem)] bg-white shadow-md transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-16'
      }`}
    >
      <nav className="flex flex-col h-full py-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
              isActive(item.path) ? 'bg-gray-100' : ''
            }`}
            aria-label={item.name}
          >
            <span className="text-[#8fcad8]">{item.icon}</span>
            <span className={`ml-4 ${!isOpen ? 'hidden md:opacity-0' : ''}`}>
              {item.name}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;