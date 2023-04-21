import { IBook } from "@hooks";

export const AdminBookRow: React.FC<IBook & { id: number }> = (props) => {
    const { id, ISBN, author, title, category, stock } = props;
    return <tr>
        <td>{id}</td>
        <td>{ISBN}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{author}</td>
        <td>{stock}</td>
        <td><button>Delete</button><button>Update</button></td>
    </tr>
}