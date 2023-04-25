/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useFetchUser } from "@hooks"
import { UserRow } from "./UserRow/UserRow";
import { Form } from "../form/Form";
import "./User.scss"
import { Logindata, deleteUser, registerUser } from '@service';
import { useContext } from 'react';
import { StoreContext } from '@store';
export const User = () => {
    const [temp, setTemp] = useState<number>(0);
    const { data, error, loading } = useFetchUser(temp);
    const [showModal, setShowModal] = useState<boolean>(false)
    const { state } = useContext(StoreContext);
    const handleSubmit = (data: Logindata & { name: string }) => {
        void (async () => {
            await registerUser({ email: data.email, password: data.password, name: data.name })
        })()
        setTemp(Math.random() + 100);
    }
    const handleDelete = (id: string) => {
        void (async () => {
            await deleteUser(id, state.token)
        })()
        setTemp(Math.random() + 100);
    }
    return <>
        <div className="button-add-user">
            <button onClick={() => setShowModal(true)}>Add</button>
        </div>
        {showModal && <div className={"user-modal-wrapper" + (showModal ? " open" : "")} onClick={() => setShowModal(false)}></div>}
        {showModal && <Form<Logindata & { name: string }> onSubmit={handleSubmit} setShowModal={setShowModal} data={
            {
                name: "",
                email: "",
                password: ""
            }
        }
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
                {data?.length && data.map((items, index) => {
                    return (<UserRow key={index} {...items} id={index + 1} />)
                })}
            </tbody>
        </table>
        {loading && <>Loading....</>}
    </>
}