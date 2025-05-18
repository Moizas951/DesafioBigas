import React from 'react';
import { Menu } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';

const Header: React.FC = () => {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <button
            onClick={toggle}
            className="p-2 mr-4 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center">
            <img src="src/public/Assets/images/logotipo_dente_smiller_azul.png" alt="Logo" className="h-8 w-8 mr-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;