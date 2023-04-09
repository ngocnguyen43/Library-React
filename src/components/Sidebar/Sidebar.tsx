import { IoBookOutline, IoCalendarOutline, IoHomeOutline, IoMenuOutline, IoPeopleOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { Location, NavLink, useLocation } from "react-router-dom";
import React, { ReactNode, useEffect, useState } from "react";
import './Sidebar.scss';
interface IChilds {
    children?: ReactNode
}
interface menuItem {
    path: string,
    name: string,
    icon: IconType
}
const menuItems: menuItem[] = [
    {
        path: "/",
        name: "HOME",
        icon: IoHomeOutline
    },
    {
        path: "/users",
        name: "USERS",
        icon: IoPeopleOutline
    },
    {
        path: "/books",
        name: "BOOKS",
        icon: IoBookOutline
    },
    {
        path: "/issues",
        name: "ISSUES",
        icon: IoCalendarOutline
    },
]
export const Sidebar: React.FC<IChilds> = ({ children }) => {
    const location: Location = useLocation()
    const [url, setUrl] = useState<string>("")

    useEffect(() => {
        setUrl(location.pathname)
    }, [location])
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="top-section">
                    <a className="logo" href="/"><h4>Logo</h4></a>
                    <div className="bars">
                        <IoMenuOutline />
                    </div>
                </div>
                {menuItems.map((item: menuItem, index: number) => {
                    const Icon = item.icon;
                    console.log((item.path === url ? " active" : null));
                    return (

                        <NavLink to={item.path} key={index} className="link" >
                            <div className="icon"><Icon /></div>
                            <div className="icon-text">{item.name}</div>
                        </NavLink>
                    )
                })}
            </div>
            <main>{children}</main>
        </div>
    );
};