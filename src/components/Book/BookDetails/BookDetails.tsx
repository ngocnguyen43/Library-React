import { IBookProps } from "../Book"
import "./BookDetails.scss"
export const BookDetails: React.FC<IBookProps> = (props) => {
    return <div className="test-div">{JSON.stringify(props)}</div>
}