/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Pagination } from "@mui/material";
import { IBookFilter } from "@pages";
import { StoreContext } from "@store";
import { IBook, useFetchBook } from "@hooks"
import { createNewBook, deleteBook } from "@service";
import { useState, useContext } from "react";
import { AdminBookRow } from "./AdminBookRow/AdminBookRow";
import { Form } from "../../form/Form";
import "./AdminBook.scss"
export const AdminBook = () => {
    const [currentPage, setCurrrentPage] = useState(1);
    const [filter, setFilter] = useState<IBookFilter>({ page: currentPage, category: "", title: "" });
    const [data, error, loading] = useFetchBook(filter, "");
    const [showModal, setShowModal] = useState<boolean>(false)
    const { state } = useContext(StoreContext)
    const handleOnPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrrentPage(value)
        setFilter({ ...filter, page: value })
    }
    const handleSubmit = (data: IBook) => {
        void (async () => {
            await createNewBook(data, state.token)
        })()
        setFilter({ page: currentPage, category: "", title: "" })
    }
    const handleDelete = (value: string) => {
        void (async () => {
            await deleteBook(value, state.token)
        })()
        setFilter({ page: currentPage, category: "", title: "" })
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
                {data?.data?.length && data.data.map((book, index) => {
                    return (<AdminBookRow key={index} id={index + 1 + (currentPage - 1) * 6} {...book} OnDelete={handleDelete} />)
                }
                )}
            </tbody>
        </table>
        {loading ? (<>Loading...</>) : <></>}
        <Pagination style={{ position: "absolute", bottom: "20%", left: "50%" }}
            count={data?.pagination.totalpages || 1}
            showFirstButton
            showLastButton
            page={currentPage}
            onChange={handleOnPageChange}
        />
    </>
}