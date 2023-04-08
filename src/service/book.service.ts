import { Axios } from '../config';
import { IResponse } from '../hooks';

export const getAllBook = async (): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/books',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer 1234',
		},
	});
};
