import React, { useState } from "react";
import styles from "../shared/styles/commonstyles.module.scss"
import Simpledebounce from "../debounce/simpledebounce"

export default function Notesapp() {
    const [modalopen, setmodalopen] = useState(false)
    const [inptchange, setinptchange] = useState("")
    const [notes, setnotes] = useState([])
    const [searchquery,setsearchquery]=useState("")
   
    const today = new Date()
    const handleinptchange = (e: any) => {
        setnotes([...notes, { text: inptchange, timestamp: new Date() }])
        setinptchange("")
        setmodalopen(false)

    }
  const handleSearch = (query: string) => {
  setsearchquery(query)
}
const filteredNotes = notes.filter((note: any) =>
  note.text.toLowerCase().includes(searchquery.toLowerCase())
)
    
    const handledelelist=(index:any)=>{
        const dellist=notes.filter((_:any,i)=> i != index)
       setnotes(dellist)
    }

    return (<>
        <div className={styles.overallnotescontainer}>
            <div className={styles.header}>
                <div className={styles.lefts}>
                    My notes
                </div>
                <div className={styles.rights}>
                    <Simpledebounce onSearch={handleSearch} />
                    <button onClick={() => setmodalopen(!modalopen)}> New note</button>
                </div>
            </div>
            <div className={styles.body}>
                {filteredNotes.length > 0 ? <>
                    {
                        filteredNotes.map((el: any, index: number) => (
                            <div key={index} className={styles.previewcard}>
                                <div className={styles.text}>{el.text} <button onClick={()=>handledelelist(index)}>del</button></div>
                                <span style={{ fontSize: "11px", color: "grey", display: "block", width: "100%", textAlign: "end" }}>{`${el.timestamp.toDateString()} ${el.timestamp.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}`}</span>
                            </div>
                        ))
                    }
                </> : "No notes yet!"}

            </div>
        </div>

        {
            modalopen &&
            <>
                <div className={`${styles.editormodalwrapper} ${styles.open}`}>
                    <div className={styles.modal}>
                        <div className={styles.header}>
                            <div> Editor</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <button onClick={() => setmodalopen(!modalopen)}>Close</button>
                                <button onClick={handleinptchange}>Save</button>
                            </div>

                        </div>
                        <div className={styles.body}>
                            <textarea value={inptchange} placeholder="Enter notes here" onChange={(e: any) => setinptchange(e.target.value)} onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleinptchange(e);
                                }
                            }}></textarea>
                        </div>
                        <div className={styles.footer}>
                            <div style={{ fontSize: "11px", color: "grey" }}>Last saved:  <span style={{ fontSize: "11px", color: "grey" }}>{`${today.toDateString()} ${today.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}`}</span></div>
                            
                        </div>
                    </div>
                </div>

            </>
        }
    </>)
}