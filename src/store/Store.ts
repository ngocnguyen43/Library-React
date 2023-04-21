import React, { createContext } from 'react';
import { Action } from './Reducer';

export interface IGlobalState {
	token: string;
	role: string;
	id: string;
}

export const initialState: IGlobalState = {
	token: '',
	role: '',
	id: '',
};
export const Store = createContext<{ state: IGlobalState; dispatch: React.Dispatch<Action> }>({
	state: initialState,
	dispatch: () => null,
});
