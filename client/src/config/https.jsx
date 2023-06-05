import axios from 'axios';

let baseURL = 'http://localhost:5000';

if ('env' in import.meta) {
    baseURL = import.meta.env;
}

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});
