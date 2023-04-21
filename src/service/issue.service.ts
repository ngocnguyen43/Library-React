import { Axios } from '@config';
import { IResponse } from '@hooks';
import { ICount } from './book.service';
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
