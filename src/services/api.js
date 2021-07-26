
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apprender-backend.herokuapp.com/'
});
// 'https://apprender-backend.herokuapp.com/'
export default api;