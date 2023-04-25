import { useFetchIssue } from "@hooks"
import { IssueRow } from "./IssueRow/IssueRow";
import { useState, useContext } from 'react';
import { Pagination } from "@mui/material";
import { IIssues, deleteIssue } from "@service";
import { StoreContext } from "@store";

export const Issue = () => {
    const [page, setPage] = useState<number>(0)
    const { data, error, loading } = useFetchIssue(page);
    const { state } = useContext(StoreContext);
    const handleOnPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }
    const handleDelete = (userId: string, issueId: string) => {
        void (async () => {
            await deleteIssue(state.token, userId, issueId)
        })()
        setPage(0);
    }
    return <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Issue Date</th>
                    <th>Return Date</th>
                    <th>User Id</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.data?.map((items, index) => {
                    return <>
                        <IssueRow key={index}{...items} index={index + 1 + (page > 0 ? (page - 1) : page) * 6} OnDelete={handleDelete} />
                    </>
                })}
            </tbody>
        </table>
        <Pagination style={{ position: "absolute", bottom: "40%", left: "50%" }}
            count={data?.pagination.totalpages || 1}
            showFirstButton
            showLastButton
            page={page}
            onChange={handleOnPageChange}
        /></>
}