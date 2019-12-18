import axios from 'axios';

const api = axios.create({
    baseURL: 'http://aircncnode-com.umbler.net',
});

export default api;