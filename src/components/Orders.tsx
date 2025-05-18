import React from 'react';
import OrderTable from './OrderTable';

const Orders: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pedidos de Alinhadores</h1>
        <p className="text-gray-600">Gerencie e acompanhe os pedidos de fabricação</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total de Pedidos</h3>
          <p className="text-2xl font-semibold mt-1 text-gray-800">45</p>
          <div className="mt-2 text-sm text-green-600">+12.5% da semana passada</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Pedidos Atrasados</h3>
          <p className="text-2xl font-semibold mt-1 text-gray-800">3</p>
          <div className="mt-2 text-sm text-red-600">+2 desde ontem</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Clientes Premium</h3>
          <p className="text-2xl font-semibold mt-1 text-gray-800">18</p>
          <div className="mt-2 text-sm text-gray-600">40% do total de clientes</div>
        </div>
      </div>
      
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Pedidos recentes</h2>
        </div>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>Todos os pedidos</option>
            <option>Pedidos atrasados</option>
            <option>Pedidos do dia</option>
          </select>
          <button className="px-3 py-2 bg-[#8fcad8] text-white rounded-md text-sm hover:bg-[#7ab5c3] transition-colors">
            Distribuir
          </button>
        </div>
      </div>
      
      <OrderTable />
    </div>
  );
};

export default Orders;