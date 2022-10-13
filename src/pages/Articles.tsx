import React, { useEffect } from "react";
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../store";
import { fetchData } from "../store/articles/slice";

export const Articles: FC = () => {
    const loading = useSelector((state: StoreState) => state.articles.loading);
    const error = useSelector((state: StoreState) => state.articles.error);
    const articles = useSelector((state: StoreState) => state.articles.articles);

    const fetchDispatch = useDispatch<ThunkDispatch<StoreState, void , any>>();

    useEffect(() => {
        handleFetchData();
    }, []);

    const handleFetchData = () => {
        fetchDispatch(fetchData());
    }

    return (
        <>
            <h2>Articles</h2>
            {loading && <div>Loading...</div>}
            <button onClick={() => handleFetchData()}>Reload</button>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    ); 
};