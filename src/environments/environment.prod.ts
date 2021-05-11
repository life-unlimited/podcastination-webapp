/**
 * Environment used for production. Adjust urls accordingly.
 */
export const environment = {
  production: true,
  apiUrl: 'https://podcast.lu-church.de/s',
  staticUrl: 'https://podcast.lu-church.de/s/static',
  version: require('../../package.json').version
};
