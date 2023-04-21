import { IUser } from "@hooks"
import React from "react"

export const UserRow: React.FC<IUser & { id: number }> = (props) => {
    const { id, name, email, roles, status } = props;
    return <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{roles[0]}</td>
        <td>{status}</td>
        <td><button>Delete</button></td>
    </tr>
}