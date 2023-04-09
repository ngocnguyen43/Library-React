/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { Header, Book } from "@components"
import { useFetchBook } from "@hooks";
import { Pagination } from "@mui/material";
import "./HomePage.scss"
export interface IBookFilter {
    page: number;
    category: string;
    title: string
}
export const HomePage: React.FC = () => {
    const [currentPage, setCurrrentPage] = useState(1);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState<IBookFilter>({ page: currentPage, category: "", title: "" });
    const [data, error, loading] = useFetchBook(filter);
    const handleOnPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrrentPage(value)
        setFilter({ page: value, category: category, title: title })
    }
    console.log(currentPage);

    return (
        <>
            <Header />
            <section>
                <div className="cards">
                    {loading ? (<>Loading...</>) : <></>}
                    {data?.data?.length && data.data.map((book, index) => {
                        return (<Book key={index} {...book} />)
                    }
                    )}
                </div>
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