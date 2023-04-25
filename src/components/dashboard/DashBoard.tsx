/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState, useContext } from 'react';
import "./Dashboard.scss"
import { StoreContext } from '@store';
import { countAllBook, countAllIssues, countAllUsers } from '@service';
export const DashBoard = () => {
    const [books, setBooks] = useState(0);
    const [issues, setIssues] = useState(0);
    const [users, setUsers] = useState(0);
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(false);
    const { state } = useContext(StoreContext);
    useEffect(() => {
        void (async () => {
            let totalBooks;
            let totalIssues;
            let totalUsers;
            try {
                setLoading(true);
                totalBooks = (await countAllBook(state.token)).data.total;
                totalIssues = (await countAllIssues(state.token)).data.total;
                totalUsers = (await countAllUsers(state.token)).data.total;
                setBooks(totalBooks);
                setIssues(totalIssues);
                setUsers(totalUsers);
            } catch (error: any) {
                setError(error);
            } finally {
                (totalBooks !== undefined && totalIssues !== undefined) && setLoading(false);
            }
        })();
    }, [])

    return <>
        <div className="dashboard-box">
            <div className="box">
                <h1 style={{ display: "block" }}>Books: {books}</h1>
            </div>
            <div className="box">
                <h1 style={{ display: "block" }}>Users: {users}</h1>
            </div>
            <div className="box">
                <h1>Issues: {issues}</h1>

            </div>
        </div>
        <div className="dashboard-notification"></div>
    </>
}