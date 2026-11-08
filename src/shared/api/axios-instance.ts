import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL } from './api-consts';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});
