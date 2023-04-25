/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Axios } from '@config';
import { IBook, IResponse } from '@hooks';
import qs from 'qs';

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
export const createNewBook = async (data: IBook, token: string) => {
	const { author, title, category, stock, description } = data;
	const value = qs.stringify({
		author: author,
		title: title,
		category: category,
		stock: stock,
		description: description,
	});
	return await Axios({
		method: 'POST',
		url: '/book',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: value,
	}).catch((err) => err.response);
};
export const deleteBook = async (id: string, token: string) => {
	const value = qs.stringify({
		_id: id,
	});
	return await Axios({
		method: 'DELETE',
		url: '/book',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: value,
	}).catch((err) => err.response);
};
