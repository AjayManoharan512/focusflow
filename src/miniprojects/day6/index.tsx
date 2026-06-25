import styles from "../shared/styles/commonstyles.module.scss";
import useApiFetch from "../shared/hooks/useApiFetch";

function Quotegenerator() {
    const { loading, data, error, refetch } = useApiFetch(
        "https://quotesapi.prayushadhikari.com.np/api/quotes?order=random&limit=1"
    )

    return (<>
        <div className={`commoncard ${styles.qtcard}`}>
            <div className={styles.header}>
                <div className={styles.title}>Daily Quote</div>
                <button onClick={refetch}>New quote</button>
            </div>
            <div className={styles.body}>
                {loading && (
                    <div className={styles.skeletonwrapper}>
                        <div className={styles.skeletonline}></div>
                        <div className={styles.skeletonline}></div>
                        <div className={styles.skeletonsmall}></div>
                    </div>
                )}

                {error && <p>Couldn't load quote.</p>}

                {!loading && data && (
                    <>
                        {data.data[0].quote}<br />
                        <span className={styles.author}>{data.data[0].author}</span>
                    </>
                )}
            </div>
        </div>
    </>)
} export default Quotegenerator
