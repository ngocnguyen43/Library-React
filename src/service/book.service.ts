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
