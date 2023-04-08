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
            <div className="card-img"></div>
            <div className="card-content">
                <span className="card-name">Title: {props.title}</span>
                <span className="card-category">Category: {props.category}</span>
                <span className="card-stock">Stock: {props.stock}</span>
            </div>
            <br />
            <div className="card-button">
                <button>Details</button>
                <RequiredAuth role="user">
                    <button>Issue</button>
                </RequiredAuth>
            </div>
        </div>)
}