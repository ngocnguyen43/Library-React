/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { IUser, useFetchUser } from "@hooks"
import { UserRow } from "./UserRow/UserRow";
import { Form } from "../form/Form";
import "./User.scss"
export const User = () => {
    const { data, error, loading } = useFetchUser();
    const [showModal, setShowModal] = useState<boolean>(false)
    const handleSubmit = (data: IUser) => {
        console.log(data);
    }
    return <>
        <div className="button-add-user">
            <button onClick={() => setShowModal(true)}>Add</button>
        </div>
        {showModal && <div className={"user-modal-wrapper" + (showModal ? " open" : "")} onClick={() => setShowModal(false)}></div>}
        {showModal && <Form<IUser> onSubmit={handleSubmit} setShowModal={setShowModal} data={
            {
                _id: "",
                name: "",
                email: "",
                status: "",
                issues: [],
                roles: []
            }
        }
            ignoredFields={["_id", "roles", "issues"]}
        />}
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