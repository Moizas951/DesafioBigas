/**
 * Count plates from a string format like "1;2;3;4;5"
 */
export const countPlates = (platesStr: string): number => {
  return platesStr ? platesStr.split(';').length : 0;
};

/**
 * Get total plates count from both superior and inferior
 */
export const getTotalPlates = (supPlates: string, infPlates: string): number => {
  return countPlates(supPlates) + countPlates(infPlates);
};

/**
 * Parse plate string to get individual plate numbers
 */
export const parsePlateNumbers = (platesStr: string): number[] => {
  if (!platesStr) return [];
  return platesStr.split(';').map(num => parseInt(num.trim(), 10));
};

/**
 * Determine status based on days remaining
 */
export const getStatusInfo = (daysRemaining: number): { 
  label: string; 
  colorClass: string;
} => {
  if (daysRemaining < 0) {
    return { 
      label: `Atrasado ${Math.abs(daysRemaining)} dias`,
      colorClass: 'bg-red-100 text-red-800'
    };
  } else if (daysRemaining <= 2) {
    return { 
      label: `Urgente: ${daysRemaining} dias`,
      colorClass: 'bg-yellow-100 text-yellow-800'
    };
  } else {
    return { 
      label: `${daysRemaining} dias restantes`,
      colorClass: 'bg-green-100 text-green-800'
    };
  }
};