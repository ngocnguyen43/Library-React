import { useFetchUser } from "@hooks"
import "./User.scss"
import { UserRow } from "./UserRow/UserRow";
export const User = () => {
    const { data, error, loading } = useFetchUser();

    return <>
        <div className="button-add-user">
            <button>Add</button>
        </div>
        <table cellPadding="0" cellSpacing="0" border={0}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {loading && <>Loading....</>}
                {data?.length && data.map((items, index) => {
                    return (<UserRow key={index} {...items} id={index + 1} />)
                })}
            </tbody>
        </table>
    </>
}