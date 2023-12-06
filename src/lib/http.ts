import appConfig from '../config/app';
import axios from 'axios';

console.log(appConfig.api.baseUrl);

const http = axios.create({
  baseURL: appConfig.api.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
