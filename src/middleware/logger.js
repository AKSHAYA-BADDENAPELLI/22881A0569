export const logEvent = (message) => {
  const logs = JSON.parse(localStorage.getItem('logs')) || [];
  logs.push({ message, timestamp: new Date().toISOString() });
  localStorage.setItem('logs', JSON.stringify(logs));
};
