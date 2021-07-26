
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/'
});
// 'https://apprender-backend.herokuapp.com/'
export default api;