import { USER_LOG_IN, USER_LOG_OUT } from './Constants';
import { IGlobalState, initialState } from './Store';

export interface Action {
	type: string;
	payload?: {
		token: string;
		role: string;
	};
}
// export type Action = { type: 'OK'; token?: string; role?: string } | { type: 'Pending'; token?: string; role?: string };

export const Reducer = (state: IGlobalState, action: Action): IGlobalState => {
	switch (action.type) {
		case USER_LOG_IN:
			return {
				...initialState,
				token: action.payload?.token,
				role: action.payload?.role,
			} as IGlobalState;

		case USER_LOG_OUT:
			return {
				...initialState,
				token: '',
				role: '',
			};
		default:
			return state;
	}
};
