import axios from 'axios';

let baseURL = 'http://localhost:5000/api';

if ('env' in import.meta) {
    baseURL = import.meta.env.VITE_BASE_API_URL || 'http://localhost:5000/api';
}

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});
