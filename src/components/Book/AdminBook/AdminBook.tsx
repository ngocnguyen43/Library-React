import { useFetchBook } from "@hooks"
import { Pagination } from "@mui/material";
import { IBookFilter } from "@pages";
import { useState } from "react";
import { AdminBookRow } from "./AdminBookRow/AdminBookRow";

export const AdminBook = () => {
    const [currentPage, setCurrrentPage] = useState(1);
    const [filter, setFilter] = useState<IBookFilter>({ page: currentPage, category: "", title: "" });
    const [data, error, loading] = useFetchBook(filter, "");
    const handleOnPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrrentPage(value)
        setFilter({ ...filter, page: value })
    }
    return <>
        <div className="button-add-user">
            <button>Add</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th> ID</th>
                    <th>ISBN</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* {loading ? (<>Loading...</>) : <></>} */}
                {data?.data?.length && data.data.map((book, index) => {
                    return (<AdminBookRow key={index} id={index + 1 + (currentPage - 1) * 6} {...book} />)
                }
                )}
            </tbody>
        </table>
        <Pagination style={{ position: "absolute", bottom: "40%", left: "50%" }}
            count={data?.pagination.totalpages || 1}
            showFirstButton
            showLastButton
            page={currentPage}
            onChange={handleOnPageChange}
        />
    </>
}