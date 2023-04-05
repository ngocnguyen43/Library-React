import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Book } from './../../components/Book/Book';
import { User } from "../../components/User/User";
import { Issue } from './../../components/Issue/Issues';
import { DashBoard } from "../../components/dashboard/DashBoard";

export const Admin = () => {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="/books" element={<Book />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/issues" element={<Issue />} />
                </Routes>
            </Sidebar>
        </BrowserRouter>
    )
}