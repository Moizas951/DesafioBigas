import React from 'react';
import { BarChart2, TrendingUp, Users, Activity } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-600">Visualize e analise os dados de produção</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Produção Total</h3>
            <div className="p-2 bg-blue-50 rounded-full">
              <BarChart2 size={20} className="text-blue-500" />
            </div>
          </div>
          <p className="text-2xl font-semibold mt-2 text-gray-800">256</p>
          <div className="mt-2 text-sm text-green-600">+18% do mês passado</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Eficiência</h3>
            <div className="p-2 bg-green-50 rounded-full">
              <TrendingUp size={20} className="text-green-500" />
            </div>
          </div>
          <p className="text-2xl font-semibold mt-2 text-gray-800">92%</p>
          <div className="mt-2 text-sm text-green-600">+5% da semana anterior</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Dentistas</h3>
            <div className="p-2 bg-purple-50 rounded-full">
              <Users size={20} className="text-purple-500" />
            </div>
          </div>
          <p className="text-2xl font-semibold mt-2 text-gray-800">58</p>
          <div className="mt-2 text-sm text-gray-600">3 novos este mês</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Tempo Médio</h3>
            <div className="p-2 bg-orange-50 rounded-full">
              <Activity size={20} className="text-orange-500" />
            </div>
          </div>
          <p className="text-2xl font-semibold mt-2 text-gray-800">4.2 dias</p>
          <div className="mt-2 text-sm text-red-600">+0.5 dias do objetivo</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-4 text-gray-700">Produção Mensal</h3>
          <div className="h-64 flex items-end space-x-2">
            {[65, 45, 75, 50, 80, 60, 70, 90, 85, 60, 75, 95].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-[#8fcad8] rounded-t" 
                  style={{ height: `${value}%` }}
                ></div>
                <div className="text-xs mt-1 text-gray-500">
                  {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-4 text-gray-700">Distribuição de Pedidos</h3>
          <div className="flex justify-center items-center h-64">
            <div className="w-48 h-48 rounded-full border-8 border-[#8fcad8] relative">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-t-[#ff9580]"
                style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)' }}
              ></div>
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-t-[#ffd76e] border-r-[#ffd76e]"
                style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}
              ></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full w-24 h-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium">Total</div>
                  <div className="text-xl font-bold">256</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#8fcad8] rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Standard (45%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#ff9580] rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Premium (30%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#ffd76e] rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Urgente (25%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="font-medium text-gray-700">Atividade Recente</h3>
        </div>
        <div className="divide-y">
          {[
            { action: 'Pedido #1045 concluído', time: '2 horas atrás', status: 'completed' },
            { action: 'Novo pedido #1052 recebido', time: '4 horas atrás', status: 'new' },
            { action: 'Pedido #1038 atrasado', time: '5 horas atrás', status: 'delayed' },
            { action: 'Pedido #1033 enviado', time: '8 horas atrás', status: 'shipped' },
            { action: 'Novo cliente registrado', time: '1 dia atrás', status: 'new' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-3 ${
                  item.status === 'completed' ? 'bg-green-500' : 
                  item.status === 'new' ? 'bg-blue-500' :
                  item.status === 'delayed' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
                <span>{item.action}</span>
              </div>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
