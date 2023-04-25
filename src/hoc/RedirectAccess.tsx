import { StoreContext } from "@store"
import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const RedirectAccess: React.FC = () => {
    const { state } = useContext(StoreContext);
    const location = useLocation();
    const content = (
        state.role === "" ? <Outlet /> :
            state.role === "user" ? <Navigate to="/" state={{ from: location }} replace /> :
                <Navigate to="/home" state={{ from: location }} replace />
    )
    return content

}