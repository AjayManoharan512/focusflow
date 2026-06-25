import useApiFetch from "../shared/hooks/useApiFetch";
import styles from "../shared/styles/commonstyles.module.scss";

function Randomadvice() {
    const { loading, data, error, refetch } = useApiFetch("https://api.adviceslip.com/advice")


    return (<>
        <div className={`commoncard ${styles.advicecard}`}>
            {loading ? <div style={{ flex: "1" }}> <>
                <style>
                    {`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
                </style>

                <div
                    style={{
                        width: "32px",
                        height: "32px",
                        margin: "auto",
                        border: "4px solid #e5e5e5",
                        borderTop: "4px solid #333",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                />
            </></div> :
                <div style={{ flex: "1" }}>
                    {data?.slip.advice}
                </div>}
         {error && <div>{error}</div>}
            <button onClick={refetch}>New quote</button>
        </div>
    </>)
} export default Randomadvice
