import { useContext } from 'react';
import { StoreContext } from '../store';

export const useLogin = (role: string) => {
	const { state } = useContext(StoreContext);
	if (state.role !== role || !state.token)
		return {
			isLogged: false,
		};
	return { isLogged: true };
};
