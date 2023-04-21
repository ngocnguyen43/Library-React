/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IoBookOutline, IoCalendarOutline, IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import './Sidebar.scss';
import { StoreContext } from "@store";
interface menuItem {
    path: string,
    name: string,
    icon: IconType
}
const menuItems: menuItem[] = [
    {
        path: "home",
        name: "HOME",
        icon: IoHomeOutline,
    },
    {
        path: "users",
        name: "USERS",
        icon: IoPeopleOutline
    },
    {
        path: "books",
        name: "BOOKS",
        icon: IoBookOutline
    },
    {
        path: "issues",
        name: "ISSUES",
        icon: IoCalendarOutline
    },
]
export const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const { state, dispatch } = useContext(StoreContext);
    console.log(state);

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current?.querySelector('.sidebar-menu-item');
            if (indicatorRef.current && sidebarItem) {
                indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`
            }
            if (typeof (sidebarItem?.clientHeight) === 'number')
                setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = menuItems.findIndex(item => item.path === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar-logo">
            Admin
        </div>
        <div ref={sidebarRef} className="sidebar-menu">
            <div
                ref={indicatorRef}
                className="sidebar-menu-indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                menuItems.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <div className={`sidebar-menu-item ${activeIndex === index ? 'active' : ''}`} style={activeIndex === index ? { color: "#f3f3f3" } : {}}>
                            <div className="sidebar-menu-item-icon" style={{ display: "flex" }}>
                                {<item.icon style={{ fontWeight: "bolder", fontSize: "1.5rem" }} />}
                            </div>
                            <div className="sidebar-menu-item-text">
                                {item.name}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

