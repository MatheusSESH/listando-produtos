// Aqui irão as configurações do Axios
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-api.kuppi.com.br',
  headers: {
    'auth-token': process.env.REACT_APP_AUTH_TOKEN,
  },
});

export default api;
