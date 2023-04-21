import { IIssues } from "@service";
import { ConvertDate } from "@utils";

export const IssueRow: React.FC<IIssues & { index: number, OnDelete: (userId: string, issueId: string) => void }> = (props) => {
    const { _id, index, book_info: { title, category, issueDate, returnDate }, user_id: { id }, OnDelete } = props;
    const OnClick = (userId: string, issueId: string) => {
        OnDelete(userId, issueId)
    }
    return <>
        <tr>
            <td>{index}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{ConvertDate(issueDate)}</td>
            <td>{ConvertDate(returnDate)}</td>
            <td>{id}</td>
            <td><button onClick={() => OnClick(id, _id)}>Cancel</button></td>
        </tr>
    </>
}