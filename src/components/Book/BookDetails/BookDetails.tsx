import { IBookProps } from "../Book"
import "./BookDetails.scss"
export const BookDetails: React.FC<IBookProps> = (props) => {
    const { ISBN, author, _id, stock, category, description, title } = props;
    return <div className="book-details-wrapper">
        <div className="book-details-content">
            <h3>Title: {title}</h3>
            <h4>Category: {category}</h4>
            <h4>Author: {author}</h4>
            <span style={{ fontSize: "10px" }}>Description: {description}</span>
        </div>
    </div>
}