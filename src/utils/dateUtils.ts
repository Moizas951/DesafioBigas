/**
 * Format a date string to local date format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

/**
 * Calculate the number of days between today and a target date
 */
export const calculateDaysRemaining = (targetDate: string): number => {
  const today = new Date();
  const deadline = new Date(targetDate);
  
  // Reset time component for accurate day calculation
  today.setHours(0, 0, 0, 0);
  deadline.setHours(0, 0, 0, 0);
  
  const diffTime = deadline.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

/**
 * Calculate business days between two dates (excluding weekends)
 */
export const calculateBusinessDays = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Reset time component
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  
  let count = 0;
  let current = new Date(start);
  
  while (current <= end) {
    const dayOfWeek = current.getDay();
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }
  
  return count;
};