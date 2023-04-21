import { useFetchIssue } from "@hooks"
import { IssueRow } from "./IssueRow/IssueRow";
import { useState } from 'react';
import { Pagination } from "@mui/material";

export const Issue = () => {
    const [page, setPage] = useState<number>(0)
    const { data, error, loading } = useFetchIssue(page);
    const handleOnPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
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
                        <IssueRow key={index}{...items} index={index + 1 + (page > 0 ? (page - 1) : page) * 6} />
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