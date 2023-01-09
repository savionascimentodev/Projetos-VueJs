// Configurações da API;

import axios from "axios";

const api = axios.create({
  baseURL: 'https://http://economia.awesomeapi.com.br/json',
});

export default {
  all() {
    return api.get('/all')
  }
}