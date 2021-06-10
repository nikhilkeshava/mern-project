import axios from 'axios';
import serverAddress from '../config'

const instance = axios.create({
  baseURL: serverAddress,
  timeout: 30000
});

export { instance as default };