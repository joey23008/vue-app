import { useUserStore } from '@/stores/user';
import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

const baseURL = import.meta.env.VITE_API_URL + '/api';
const headers = {
    'Content-Type': 'application/json',
}

export const client = axios.create({
    baseURL,
    headers,
});

client.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
        const { session } = useUserStore();
        console.log('session', session)
        if (session?.authorisation?.token) {
            request.headers.Authorization = 'Bearer ' + session?.authorisation.token;
        }

        return request;
    }
);