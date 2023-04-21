import { useState } from 'react';
import "./IssuesBox.scss"
interface IProps {
    OnSubmit: (value: number, bookId: string) => void
    setShowIssue: (value: boolean) => void
    bookId: string
}
export const IssueBox: React.FC<IProps> = (props) => {
    const [time, setTime] = useState<number>(0);
    const { OnSubmit, setShowIssue, bookId } = props
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const timestamp = new Date(e.target.value).getTime()
        setTime(timestamp)
    }
    return <div className="issue-box-wrapper">
        <div className="issue-box-content">
            <h1>Choose Return Date</h1>
            <form>
                <input id='date' type="date" min={new Date().toISOString().split('T')[0]} onChange={(e) => handleOnChange(e)} />
                <button onClick={(e) => { e.preventDefault(); setShowIssue(false); OnSubmit(time, bookId) }}>Issue</button>
            </form>
        </div>
    </div>

}