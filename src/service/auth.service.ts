/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Axios } from '@config';
import qs from 'qs';
export interface Logindata {
	email: string;
	password: string;
}
export const loginUser = async (data: Logindata) => {
	const { email, password } = data;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
	const login = qs.stringify({
		email: email,
		password: password,
	});
	return await Axios({
		method: 'post',
		url: '/auth/login',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: login,
	}).catch((err) => err.response);
};
