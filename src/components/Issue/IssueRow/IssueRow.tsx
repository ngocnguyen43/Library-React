import { IIssues } from "@service";
import { ConvertDate } from "@utils";

export const IssueRow: React.FC<IIssues & { index: number }> = (props) => {
    const { index, book_info: { title, category, issueDate, returnDate }, user_id: { id } } = props;
    return <>
        <tr>
            <td>{index}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{ConvertDate(issueDate)}</td>
            <td>{ConvertDate(returnDate)}</td>
            <td>{id}</td>
            <td><button>Cancel</button></td>
        </tr>
    </>
}