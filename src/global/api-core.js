import axios from 'axios';
import {BASE_URL} from './config.js';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.defaults.headers.common['Origin'] = 'https://stage-api.boppogo.com';
export default axiosInstance;
