window.auth = false;
import axios from 'axios';

var baseURL = '/'

// Localhost address where WP is running
// if(location.host === 'localhost:8080')
//   baseURL = 'http://localhost/'

var HTTP = axios.create({
  baseURL: baseURL
})

//If user cookie authenticated, add auth header
if(typeof wpApiSettings != 'undefined') {
  window.auth = true;
  axios.defaults.headers.common['Content-Encoding'] = 'gzip'
  axios.defaults.headers.common['X-WP-Nonce'] = wpApiSettings.nonce;
}

export { HTTP }