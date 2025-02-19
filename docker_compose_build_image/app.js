//app.js
const appName = Process.env.APP_NAME || 'unknown';
const environment = Process.env.ENVIRONMENT || 'Unknown';

console.log('Running ${appName} in ${environment} environment.');