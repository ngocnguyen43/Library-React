import { StoreContext, USER_LOG_OUT } from "@store";
import { Navigate } from "react-router-dom"
import { useContext } from 'react';

export const Logout = () => {
    const { dispatch } = useContext(StoreContext);
    (() => {
        dispatch({ type: USER_LOG_OUT })
    })()
    return <Navigate to="/" replace />
}