import axios from 'axios';
import store from '../store';
import { getToken } from '../util/auth';
// import { Message } from 'element-ui';

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // request timeout
});

service.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    // set header token for every request
    config.headers['x-token'] = store.getters.token;
  }
  return config;
});

export default service;
