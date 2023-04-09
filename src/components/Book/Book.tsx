/* eslint-disable jsx-a11y/aria-role */
import React from "react"
import "./Book.scss"
import { RequiredAuth } from "../../hoc/RequiredAuth"
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
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-img"></div>
                <div className="card-content">
                    <h2 className="card-name"> {props.title}</h2>
                    <h4 className="card-category"> {props.category}</h4>
                    <RequiredAuth role="user">
                        <h5 className="card-stock">Stock: {props.stock}</h5>
                    </RequiredAuth>
                </div>
                <br />
                <div className="card-button">
                    <button className="outline">Details</button>
                    <RequiredAuth role="user">
                        <button className="card-btn issue outline">Issue</button>
                    </RequiredAuth>
                </div>
            </div>
        </div>)
}