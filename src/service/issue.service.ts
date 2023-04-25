import { Axios } from '@config';
import { IResponse } from '@hooks';
import { ICount } from './book.service';
import qs from 'qs';
export interface IIssues {
	_id: string;
	book_info: {
		id: string;
		title: string;
		author: string;
		ISBN: string;
		category: string;
		stock: number;
		issueDate: string;
		returnDate: string;
		renewDate: number[];
	};
	user_id: {
		id: string;
	};
}
export const getAllIssue = async (page: number, token: string): Promise<IResponse> => {
	return await Axios({
		method: 'GET',
		url: '/issues' + (page > 1 ? `?page=${page}` : ''),
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
		},
	});
};
export const countAllIssues = async (token: string): Promise<ICount> => {
	return await Axios({
		method: 'GET',
		url: '/issues/all',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
		},
	});
};
export const deleteIssue = async (token: string, userId: string, issueId: string) => {
	const value = qs.stringify({
		issueId: issueId,
		userId: userId,
	});
	return await Axios({
		method: 'DELETE',
		url: '/issue',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: value,
	});
};
export const createIssue = async (token: string, userId: string, bookId: string) => {
	const value = qs.stringify({
		bookId: bookId,
		userId: userId,
	});
	return await Axios({
		method: 'POST',
		url: '/issue',
		headers: {
			'x-client-id': 1,
			Authorization: 'Bearer ' + token,
			ACCESS_TOKEN: 123,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: value,
	});
};
