import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Sidebar, Book, User, Issue, DashBoard } from "@components"
import { ErrorPage, HomePage, RedirectAccess, Unauthorization, Login } from "@pages"
import { RequireAuth } from "@components"
export const Admin = () => {
    return (
        <BrowserRouter >
            {/* <Sidebar> */}
            <Routes >
                <Route element={<RedirectAccess />} >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Login />} />
                </Route>
                <Route path="/error" element={<Unauthorization />} />
                <Route element={<RequireAuth roles={["", "user"]} />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route element={<RequireAuth roles={["admin"]} />} >
                    <Route path="home" element={<DashBoard />} />
                    <Route path="books" element={<Book />} />
                    <Route path="users" element={<User />} />
                    <Route path="issues" element={<Issue />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route >
                {/* </Route> */}
            </Routes>
            {/* </Sidebar> */}
        </BrowserRouter>
    )
}