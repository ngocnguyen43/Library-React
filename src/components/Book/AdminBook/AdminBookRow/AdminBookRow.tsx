import { IBook } from "@hooks";

export const AdminBookRow: React.FC<IBook & { id: number, OnDelete: (value: string) => void }> = (props) => {
    const { id, ISBN, author, title, category, stock, _id, OnDelete } = props;
    const OnClick = (value: string) => {
        OnDelete(value)
    }
    return <tr>
        <td>{id}</td>
        <td>{ISBN}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{author}</td>
        <td>{stock}</td>
        <td><button onClick={() => OnClick(_id)}>Delete</button><button>Update</button></td>
    </tr>
}