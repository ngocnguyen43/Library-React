/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Axios } from '@config';
import { IResponse } from '@hooks';
import qs from 'qs';
import { ICount } from './book.service';

export const GetAllUser = async (token: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/users',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
		},
	});
};
export const deleteUser = async (id: string, token: string) => {
	const value = qs.stringify({
		_id: id,
	});
	return await Axios({
		method: 'GET',
		url: '/users',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
		},
	});
};
export const countAllUsers = async (token: string): Promise<ICount> => {
	return await Axios({
		method: 'GET',
		url: '/user/all',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
		},
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	}).catch((err) => err.response);
};
