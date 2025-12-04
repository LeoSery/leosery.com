export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
};

export const formatDateLong = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });
};

export const formatPeriod = (period) => {
  if (period.end === null) {
    return `${formatDate(period.start)} - Ongoing`;
  }
  
  const startDate = new Date(period.start);
  const endDate = new Date(period.end);
  
  if (startDate.getMonth() === endDate.getMonth() && 
      startDate.getFullYear() === endDate.getFullYear()) {
    return formatDate(period.start);
  }
  
  return `${formatDate(period.start)} - ${formatDate(period.end)}`;
};
