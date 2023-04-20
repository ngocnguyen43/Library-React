import { IoBookOutline, IoCalendarOutline, IoHomeOutline, IoMenuOutline, IoPeopleOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { Link, Location, NavLink, Outlet, useLocation } from "react-router-dom";
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
        path: "/home",
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
    // const location: Location = useLocation()
    // const [url, setUrl] = useState<string>("")

    // useEffect(() => {
    //     setUrl(location.pathname)
    // }, [location])
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="top-section">
                    <a className="logo" href="/home"><h4>Logo</h4></a>
                    <div className="bars">
                        <IoMenuOutline />
                    </div>
                </div>
                <nav>
                    {menuItems.map((item: menuItem, index: number) => {
                        const Icon = item.icon;
                        return (

                            <NavLink to={item.path} key={index} className="link" >
                                <div className="icon"><Icon /></div>
                                <div className="icon-text">{item.name}</div>
                            </NavLink>
                        )
                    })}
                </nav>
            </div>
            <main>{children}</main>
        </div>
    );
};