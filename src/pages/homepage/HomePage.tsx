/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Header, Book } from "../../components/"
import { useFetchBook } from "../../hooks";
import "./HomePage.scss"
export const HomePage: React.FC = () => {
    const [data, error, loading] = useFetchBook();
    return (
        <>
            <Header ></Header>
            <section>
                {loading ? (<>Loading...</>) : <></>}
                {data?.data?.length && data.data.map((book, index) => {
                    return (<Book key={index} {...book} />)
                }
                )}
            </section>
        </>
    )

}