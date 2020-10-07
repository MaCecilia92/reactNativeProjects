import { create } from 'apisauce';
import Config from 'react-native-config'; 
import { API_BASE_URL } from 'react-native-dotenv';

const api = create ({
    baseURL: API_BASE_URL,
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 5000,
});

export default api;