/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
import React, { useMemo, useState } from "react"
import "./Book.scss"
import { RequiredAuth } from "../../hoc/RequiredAuth"
import { BookDetails } from "./BookDetails/BookDetails"
import { ImageURL } from "@utils"
export interface IBookProps {
    _id: string,
    title: string,
    ISBN: string,
    author: string,
    description: string,
    category: string,
    stock: number
}
export const Book: React.FC<IBookProps> = (props) => {
    const { title, category, stock } = props;
    const [openDetails, setOpenDetails] = useState(false);
    const [openIssue, setOpenIssue] = useState(true)
    openDetails ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "")
    const memoUrl = useMemo(() => ImageURL(), [])

    return (
        <>
            <div className="card-container" onClick={() => setOpenDetails(true)}>
                <div className="card-wrapper">
                    <div className="card-img" style={{ backgroundImage: `url(${memoUrl})` }}></div>
                    <div className="card-content">
                        <h2 className="card-name"> {title}</h2>
                        <h4 className="card-category"> {category}</h4>
                        <RequiredAuth role="user">
                            <h5 className="card-stock">Available: {stock}</h5>
                        </RequiredAuth>
                    </div>
                    <br />
                    <div className="card-button">
                        <button className="outline" onClick={() => setOpenDetails(true)}>Details</button>
                        <RequiredAuth role="user">
                            <button className="card-btn issue outline">Issue</button>
                        </RequiredAuth>
                    </div>
                </div>
            </div>
            {openDetails && <>
                <div className={'open-details-wrapper' + (openDetails ? " active" : "")} onClick={(e) => {
                    setOpenDetails(false); console.log(e.currentTarget);
                }}></div>
                <BookDetails {...props} />
            </>
            }
        </>
    )
}