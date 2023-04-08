/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import { getAllBook } from '../service/book.service';

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
	};
	message: string;
	statusCode: number;
}
export const useFetchBook = (): [IResponse | undefined, any, boolean] => {
	const [data, setData] = useState<IResponse>();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				const res: IResponse = await getAllBook();
				setData(res);
			} catch (error: any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);
	return [data, error, loading];
};
