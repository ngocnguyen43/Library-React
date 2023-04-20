/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* Peslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import { getAllBook } from '@service';
import { IBookFilter } from '@pages';
import { ConvertToQuery } from '@utils';

interface IBook {
	_id: string;
	title: string;
	ISBN: string;
	author: string;
	stock: number;
	category: string;
	description: string;
}
export interface IResponse {
	data: IBook[];
	pagination: {
		totalpages: number;
		currentpage: number;
	};
	message: string;
	statusCode: number;
}
export const useFetchBook = (filter: IBookFilter, token: string): [IResponse | undefined, any, boolean] => {
	const [data, setData] = useState<IResponse | undefined>();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(false);
	console.log(ConvertToQuery(filter));

	let users: IResponse | undefined;
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				// eslint-disable-next-line react-hooks/exhaustive-deps
				users = await getAllBook(ConvertToQuery(filter), token);
				setData(users);
			} catch (error: any) {
				setError(error);
			} finally {
				users !== undefined && setLoading(false);
			}
		})();
	}, [filter]);
	return [data, error, loading];
};
