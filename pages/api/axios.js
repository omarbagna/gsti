import axios from 'axios';
//importconst BASE_URL = 'https://gvhip.v1-backend-api.rxhealthbeta.com/api/v1';
const BASE_URL = 'https://gssp-backend-api.rxhealthbeta.com/api/v1';

export default axios.create({
	baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		//'Content-Type': 'multipart/form-data',
		'Access-Control-Allow-Origin': '*',
	},
});
