/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IBook, useFetchBook } from "@hooks"
import { Pagination } from "@mui/material";
import { IBookFilter } from "@pages";
import { useState } from "react";
import { AdminBookRow } from "./AdminBookRow/AdminBookRow";
import { Form } from "../../form/Form";
import "./AdminBook.scss"
export const AdminBook = () => {
    const [currentPage, setCurrrentPage] = useState(1);
    const [filter, setFilter] = useState<IBookFilter>({ page: currentPage, category: "", title: "" });
    const [data, error, loading] = useFetchBook(filter, "");
    const [showModal, setShowModal] = useState<boolean>(false)
    const handleOnPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrrentPage(value)
        setFilter({ ...filter, page: value })
    }
    const handleSubmit = (data: IBook) => {
        console.log(data);
    }
    return <>
        <div className="button-add-user">
            <button onClick={() => setShowModal(true)}>Add</button>
        </div>
        {showModal && <div className={"book-modal-wrapper" + (showModal ? " open" : "")} onClick={() => setShowModal(false)}></div>}
        {showModal && <Form<IBook> onSubmit={handleSubmit} setShowModal={setShowModal} data={
            {
                title: "",
                author: "",
                category: "",
                description: "",
                stock: 0,
                _id: "",
                ISBN: ""
            }
        }
            ignoredFields={["_id", "ISBN"]}
        />}
        <table cellPadding="0" cellSpacing="0" border={0}>
            <thead>
                <tr>
                    <th>ID</th>
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
        {loading ? (<>Loading...</>) : <></>}
        <Pagination style={{ position: "absolute", bottom: "40%", left: "50%" }}
            count={data?.pagination.totalpages || 1}
            showFirstButton
            showLastButton
            page={currentPage}
            onChange={handleOnPageChange}
        />
    </>
}