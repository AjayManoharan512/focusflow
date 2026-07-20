import React from "react";
import useApiFetch from "../shared/hooks/useApiFetch";
import styles from "../shared/styles/commonstyles.module.scss";

function Newsapi() {
    const apiKey = import.meta.env.VITE_NEWSAPI_KEY;
    const url = apiKey
        ? `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en`
        : null;

    const { loading, data, error, refetch } = useApiFetch(url);
    const articles = data?.results ?? [];

    return (
        <div className={`commoncard ${styles.qtcard}`}>
            <div className={styles.header}>
                <div className={styles.title}>Daily News</div>
                <button onClick={refetch}>Refresh</button>
            </div>

            <div className={styles.body}>
                {!apiKey && <p>Set VITE_NEWSAPI_KEY in .env</p>}
                {apiKey && loading && <p>Loading news...</p>}
                {apiKey && error && <p>Couldn't load news.</p>}
                {apiKey && !loading && !error && articles.length === 0 && <p>No news yet.</p>}

                {apiKey && articles.length > 0 && (
                    <ul>
                        {articles.map((article: any, index: number) => (
                            <li key={index}>
                                <a href={article.link} target="_blank" rel="noreferrer">
                                    {article.title}
                                </a>
                                {article.description && <p>{article.description}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Newsapi;
