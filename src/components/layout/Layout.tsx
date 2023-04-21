import { Sidebar } from "@components";
import { Unauthorization } from "@pages";
import { StoreContext } from "@store";
import { useContext } from "react";
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
    const { state, } = useContext(StoreContext)

    const content = (state.role === "admin") ? (<div
        style={{
            padding: '50px 0px 0px 370px'
        }}>
        {/* <RequireAuth roles={["admin"]} /> */}
        <Sidebar />
        <Outlet />
    </div>) : <Unauthorization />
    return content;
}