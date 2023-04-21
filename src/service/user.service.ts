import { Axios } from '@config';
import { IResponse } from '@hooks';

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
