import appConfig from '../config/app';
import axios from 'axios';

const http = axios.create({
  baseURL: appConfig.api.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
