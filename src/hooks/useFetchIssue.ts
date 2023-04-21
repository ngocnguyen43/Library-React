import { useContext, useEffect, useState } from 'react';
import { IResponse } from './useFetchBook';
import { StoreContext } from '@store';
import { getAllIssue } from '@service';

export const useFetchIssue = (page: number) => {
	// "_id": "6419b4d268df85d524e03b62",
	// "book_info": {
	//     "id": "6415efc74e22d9f3f9590c41",
	//     "title": "voluptas autem molestiae",
	//     "author": "Guadalupe Heidenreich",
	//     "ISBN": "e5304f21-8140-499e-b43d-6fd69723a151",
	//     "category": "Science",
	//     "stock": 8,
	//     "issueDate": "2023-03-21T13:44:43.243Z",
	//     "returnDate": "2023-03-28T13:44:43.243Z",
	//     "renewDate": [],
	//     "isRenewed": false
	// },
	// "user_id": {
	//     "id": "6416c95add89ddbdefc61a60"
	// }
	const [data, setData] = useState<IResponse | undefined>();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(false);
	const { state } = useContext(StoreContext);
	let issues: IResponse | undefined;
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				issues = await getAllIssue(page, state.token);
				setData(issues);
			} catch (exception) {
				setError(exception);
			} finally {
				issues && setLoading(false);
			}
		})();
	}, [page]);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	return { data, error, loading };
};
