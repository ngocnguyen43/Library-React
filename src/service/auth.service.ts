import { Axios } from '@config';

export const loginUser = () => {
	return Axios({
		method: 'POST',
	});
};
