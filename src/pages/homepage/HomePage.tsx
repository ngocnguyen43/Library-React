import React, { useContext, useState } from "react";
import { Header, Book } from "@components"
import { useFetchBook } from "@hooks";
import { Pagination } from "@mui/material";
import { IoSearchSharp } from "react-icons/io5";
import "./HomePage.scss"
import { StoreContext } from "@store";
const categories: string[] = [
    'Science',
    'Biology',
    'Physics',
    'Chemistry',
    'Novel',
    'Travel',
    'Cooking',
    'Philosophy',
    'Mathematics',
    'Ethics',
    'Technology',
];
export interface IBookFilter {
    page: number;
    category: string;
    title: string
}
export const HomePage: React.FC = () => {
    const [currentPage, setCurrrentPage] = useState(1);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const { state } = useContext(StoreContext);
    const [filter, setFilter] = useState<IBookFilter>({ page: currentPage, category: "", title: "" });
    const [data, error, loading] = useFetchBook(filter, state.token);
    const handleOnPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrrentPage(value)
        setFilter({ page: value, category: category, title: title })
    }
    const OnKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setFilter({ page: 1, category, title })
        }
    }
    console.log(filter);
    return (
        <>
            <Header />
            <section>
                <div className="search-bar-container">
                    <div className="search-bar-content" style={{ textAlign: "center", display: "inline-flex" }}>
                        <span className="search-icon-box" style={{ height: "2rem" }}><IoSearchSharp className="search-icon" /></span>
                        <select name="" id="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)} onKeyDown={OnKeyDown}>
                            <option value="" selected disabled style={{ color: "#8b8b8b" }}>---Category---</option>
                            {categories.map((items, index) => {
                                return <option key={index} value={items}>{items}</option>
                            })}
                        </select>
                        <input type="text" placeholder="---Title---"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                            onKeyDown={OnKeyDown} />
                    </div>
                </div>
                <div className="cards">
                    {loading ? (<>Loading...</>) : <></>}
                    {data?.data?.length && data.data.map((book, index) => {
                        return (<Book key={index} {...book} />)
                    }
                    )}
                </div>
                <br />
                <Pagination
                    count={data?.pagination.totalpages || 1}
                    showFirstButton
                    showLastButton
                    page={currentPage}
                    onChange={handleOnPageChange}
                />
            </section>
        </>
    )

}