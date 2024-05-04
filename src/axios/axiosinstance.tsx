import axios from 'axios';

const BASE_URL =
  'https://2zvs8z3r8a.execute-api.ap-southeast-2.amazonaws.com/dev';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
