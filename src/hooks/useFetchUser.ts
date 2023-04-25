import { IResponse } from '@hooks';
import { GetAllUser } from '@service';
import { StoreContext } from '@store';
import { useContext, useEffect, useState } from 'react';

// "_id": "6416c95add89ddbdefc61a60",
// "name": "Minh Ngoc",
// "email": "minhngoc@gmail.com",
// "status": "active",
// "roles": [
//     "admin"
// ],
// "bookIssues": [
//     "6415efc74e22d9f3f9590c41",
//     "6415efc74e22d9f3f9590c3f",
//     "6415efc74e22d9f3f9590c43",
//     "6415efc74e22d9f3f9590c43"
// ],
// "createdAt": "2023-03-19T08:35:38.564Z",
// "updatedAt": "2023-03-21T15:35:58.296Z"
export interface IUser {
	_id: string;
	name: string;
	email: string;
	status: string;
	roles: string[];
	issues: string[];
}
export const useFetchUser = (value: number) => {
	const [data, setData] = useState<IResponse | undefined>();
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(false);
	let users: IResponse | undefined;
	const { state } = useContext(StoreContext);
	useEffect(() => {
		void (async () => {
			try {
				setLoading(true);
				// eslint-disable-next-line react-hooks/exhaustive-deps
				users = await GetAllUser(state.token);
				setData(users);
			} catch (exception) {
				setError(exception);
			} finally {
				users && setLoading(false);
			}
		})();
	}, [value]);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	return { data: data?.data, error, loading };
};
