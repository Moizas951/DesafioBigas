export interface Order {
  id_pedido: number;
  data_pedido: string;
  sup: string;
  inf: string;
  data_limite: string;
  id_cliente: number;
  cliente_premium: number;
}

export const orders: Order[] = [
  {
    id_pedido: 1001,
    data_pedido: '2025-01-10',
    sup: '1;2;3',
    inf: '1;2;3',
    data_limite: '2025-01-19',
    id_cliente: 5001,
    cliente_premium: 1
  },
  {
    id_pedido: 1002,
    data_pedido: '2025-01-11',
    sup: '1;2;3;4',
    inf: '1;2;3;4',
    data_limite: '2025-01-20',
    id_cliente: 5002,
    cliente_premium: 0
  },
  {
    id_pedido: 1003,
    data_pedido: '2025-01-12',
    sup: '1;2',
    inf: '1;2',
    data_limite: '2025-01-21',
    id_cliente: 5003,
    cliente_premium: 1
  },
  {
    id_pedido: 1004,
    data_pedido: '2025-01-13',
    sup: '1;2;3;4;5',
    inf: '1;2;3;4;5',
    data_limite: '2025-01-22',
    id_cliente: 5004,
    cliente_premium: 0
  },
  {
    id_pedido: 1005,
    data_pedido: '2025-01-14',
    sup: '1;2;3',
    inf: '',
    data_limite: '2025-01-23',
    id_cliente: 5005,
    cliente_premium: 1
  },
  {
    id_pedido: 1006,
    data_pedido: '2025-01-15',
    sup: '',
    inf: '1;2;3;4',
    data_limite: '2025-01-24',
    id_cliente: 5006,
    cliente_premium: 0
  },
  {
    id_pedido: 1007,
    data_pedido: '2025-01-16',
    sup: '1;2;3;4;5;6',
    inf: '1;2;3;4;5;6',
    data_limite: '2025-01-25',
    id_cliente: 5007,
    cliente_premium: 1
  },
  {
    id_pedido: 1008,
    data_pedido: '2025-01-17',
    sup: '1;2',
    inf: '1;2',
    data_limite: '2025-01-26',
    id_cliente: 5008,
    cliente_premium: 0
  },
  {
    id_pedido: 1009,
    data_pedido: '2025-01-18',
    sup: '1;2;3;4',
    inf: '1;2;3;4',
    data_limite: '2025-01-27',
    id_cliente: 5009,
    cliente_premium: 1
  },
  {
    id_pedido: 1010,
    data_pedido: '2025-01-19',
    sup: '1;2;3',
    inf: '1;2;3',
    data_limite: '2025-01-28',
    id_cliente: 5010,
    cliente_premium: 0
  }
];