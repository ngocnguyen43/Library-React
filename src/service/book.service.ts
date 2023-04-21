/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Axios } from '@config';
import { IResponse } from '@hooks';

export const getAllBook = async (url: string, token: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/books' + url,
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
		},
	});
};
export interface ICount {
	message: string;
	statusCode: number;
	data: {
		total: number;
	};
}
export const countAllBook = async (token: string): Promise<ICount> => {
	return await Axios({
		method: 'GET',
		url: '/books/all',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
		},
	}).catch((err) => err.response);
};
