import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { orders, Order } from '../data/mockData';

type SortField = keyof Order | null;
type SortDirection = 'asc' | 'desc';

const OrderTable: React.FC = () => {
  const [sortField, setSortField] = useState<SortField>('data_pedido');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  // Calculate remaining days until deadline
  const calculateDaysRemaining = (deadlineDate: string) => {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Count plates in a string format like "1;2;3;4;5"
  const countPlates = (platesStr: string) => {
    return platesStr ? platesStr.split(';').length : 0;
  };

  // Get total plates count
  const getTotalPlates = (supPlates: string, infPlates: string) => {
    return countPlates(supPlates) + countPlates(infPlates);
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (sortField === 'data_pedido' || sortField === 'data_limite') {
      aValue = new Date(a[sortField]);
      bValue = new Date(b[sortField]);
    }
    
    if (aValue < bValue) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />;
  };

  return (
    <div className="w-full overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              onClick={() => handleSort('id_pedido')}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">
                ID Pedido
                <span className="ml-1">{getSortIcon('id_pedido')}</span>
              </div>
            </th>
            <th
              onClick={() => handleSort('data_pedido')}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">
                Data Pedido
                <span className="ml-1">{getSortIcon('data_pedido')}</span>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Placas Sup/Inf
            </th>
            <th
              onClick={() => handleSort('data_limite')}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">
                Data Limite
                <span className="ml-1">{getSortIcon('data_limite')}</span>
              </div>
            </th>
            <th
              onClick={() => handleSort('id_cliente')}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">
                Cliente
                <span className="ml-1">{getSortIcon('id_cliente')}</span>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedOrders.map((order) => {
            const daysRemaining = calculateDaysRemaining(order.data_limite);
            const totalPlates = getTotalPlates(order.sup, order.inf);
            let statusColor = 'bg-green-100 text-green-800';
            
            if (daysRemaining < 0) {
              statusColor = 'bg-red-100 text-red-800';
            } else if (daysRemaining <= 2) {
              statusColor = 'bg-yellow-100 text-yellow-800';
            }
            
            return (
              <tr 
                key={order.id_pedido}
                className={`hover:bg-gray-50 transition-colors ${
                  order.cliente_premium ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{order.id_pedido}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(order.data_pedido)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex flex-col">
                    <span>Sup: {order.sup || 'N/A'}</span>
                    <span>Inf: {order.inf || 'N/A'}</span>
                    <span className="font-medium mt-1 text-gray-700">
                      Total: {totalPlates} placas
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(order.data_limite)}
                  <div className={`mt-1 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
                    {daysRemaining < 0 
                      ? `Atrasado ${Math.abs(daysRemaining)} dias` 
                      : `${daysRemaining} dias restantes`}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">#{order.id_cliente}</div>
                  {order.cliente_premium === 1 && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#8fcad8] text-white">
                      Premium
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Em produção
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;