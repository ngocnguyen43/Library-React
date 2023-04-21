import { StoreContext, USER_LOG_OUT } from "@store";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom"

export const Unauthorization = () => {
    const location = useLocation();
    const { state, dispatch } = useContext(StoreContext);
    return <>
        An error
        <h1> Click <Link style={{ textDecoration: "underline" }} to="/" state={{ from: location }} onClick={() => dispatch({ type: USER_LOG_OUT })}>Here</Link>  to back!  </h1>
    </>
}