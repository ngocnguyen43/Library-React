/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
const url: string = import.meta.env?.VITE_APP_BACKEND_URL || 'http://localhost:4343/api/v1';

export const Axios = axios.create({
	baseURL: url,
});
Axios.interceptors.response.use((response) => {
	return response.data;
});
