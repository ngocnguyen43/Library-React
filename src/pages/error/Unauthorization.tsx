import { Link, useLocation } from "react-router-dom"

export const Unauthorization = () => {
    const location = useLocation();
    return <>
        An error
        <h1> Click <Link style={{ textDecoration: "underline" }} to="/login" state={{ from: location }}>Here</Link>  to back!  </h1>
    </>
}