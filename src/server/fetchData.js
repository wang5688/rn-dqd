const attachUrlParams = (url, params = {}) => {
  let newUrl = /[?]$/.test(url) ? url : url + '?';

  Object.keys(params).forEach((key) => {
    const value = params[key];

    newUrl += `${key}=${value}`;
  })
  return newUrl;
};

const checkStatus = (result) => {
  if (result.ok && (result.status === 200 || (result.status >= 300 && result.status < 400))) {
    return result.json();
  }
  return {};
};

const fetchGet = (url, options = {}) => {
  if (!url) {
    throw new Error('url is undefined');
  }
  const { params = {} } = options;
  return fetch(attachUrlParams(url, params), Object.assign({}, { // eslint-disable-line
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Connection': 'close',
      'type': 'getUserData'
    },
    credentials: 'include'
  }, options))
    .then(checkStatus)
    .catch((err) => {
      console.error('get request failed', err);
    });
};

export default {
  get: fetchGet
};