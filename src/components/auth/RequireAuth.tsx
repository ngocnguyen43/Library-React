import { StoreContext } from "@store";
import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
interface IProps {
    roles: string[]
}
export const RequireAuth: React.FC<IProps> = (props) => {
    const { roles } = props;
    const { state } = useContext(StoreContext);
    const location = useLocation()
    const content = (
        roles.includes(state.role) ? <Outlet />
            : <Navigate to="/error" state={{ from: location }} replace />
    )
    return content
}