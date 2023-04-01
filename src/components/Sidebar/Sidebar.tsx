import { FaHome, FaUserFriends, FaAddressBook } from "react-icons/fa";
import './Sidebar.scss';


export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <a>Logo</a>
                <a>
                    <FaHome name="FaHome"></FaHome>
                    Dashboard
                </a>
                <a>
                    <FaUserFriends name="people"></FaUserFriends>
                    User
                </a>
                <a>
                    <FaAddressBook name="book"></FaAddressBook>Book
                </a>
            </div>
        </div>
    );
};