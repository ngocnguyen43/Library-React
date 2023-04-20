import React, { createContext } from 'react';
import { Action } from './Reducer';

export interface IGlobalState {
	token: string;
	role: string;
}

export const initialState: IGlobalState = {
	token: '',
	role: 'admin',
};
export const Store = createContext<{ state: IGlobalState; dispatch: React.Dispatch<Action> }>({
	state: initialState,
	dispatch: () => null,
});
