import { IBookProps } from "../Book"
import "./BookDetails.scss"
export const BookDetails: React.FC<IBookProps & { image: string }> = (props) => {
    const { ISBN, author, _id, stock, category, description, title, image } = props;
    console.log(image);

    return <div className="book-details-wrapper">
        <div className="book-details-content">
            <div className="book-image-details" style={{ backgroundImage: `url(${image})` }}></div>
            <h3>Title: {title}</h3>
            <h4>Category: {category}</h4>
            <h4>Author: {author}</h4>
            <span style={{ fontSize: "12px" }}>Description: {description}</span>
        </div>
    </div>
}