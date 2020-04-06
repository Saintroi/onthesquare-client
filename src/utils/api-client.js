import config from '../config';

function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'content-type': 'application/json' };
  headers.Authorization = config.authToken;

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(r => r.json());
}

export default client;
