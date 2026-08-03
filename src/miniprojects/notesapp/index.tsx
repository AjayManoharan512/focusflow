import React, { useState, type ChangeEvent, type KeyboardEvent } from "react";
import styles from "../shared/styles/commonstyles.module.scss"
import Simpledebounce from "../debounce/simpledebounce"
import useLocalStorage from "../shared/hooks/useLocalStorage"

interface Note {
  text: string;
  timestamp: string;
}

export default function Notesapp(): React.ReactNode {
    const [modalopen, setmodalopen] = useState<boolean>(false)
    const [inptchange, setinptchange] = useState<string>("")
    const [notes, setnotes] = useLocalStorage<Note[]>("notes", [])
    const [searchquery, setsearchquery] = useState<string>("")

    const today = new Date()
    const handleinptchange = () => {
        setnotes([...notes, { text: inptchange, timestamp: new Date().toISOString() }])
        setinptchange("")
        setmodalopen(false)

    }
    const handleSearch = (query: string) => {
        setsearchquery(query)
    }
    const filteredNotes = notes.filter((note: Note) =>
        note.text.toLowerCase().includes(searchquery.toLowerCase())
    )

    const handledelelist = (index: number) => {
        const dellist = notes.filter((_: Note, i: number) => i != index)
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
                        filteredNotes.map((el: Note, index: number) => (
                            <div key={index} className={styles.previewcard}>
                                <div className={styles.text}>{el.text} <div className={styles.delbtn} onClick={() => handledelelist(index)}><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M3 6h18" />
                                    <path d="M8 6V4h8v2" />
                                    <path d="M19 6l-1 14H6L5 6" />
                                    <path d="M10 11v6" />
                                    <path d="M14 11v6" />
                                </svg></div></div>
                                <span style={{ fontSize: "11px", color: "grey", display: "block", width: "100%", textAlign: "end" }}>{`${new Date(el.timestamp).toDateString()} ${new Date(el.timestamp).toLocaleTimeString([], {
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
                            <textarea value={inptchange} placeholder="Enter notes here" onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setinptchange(e.target.value)} onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                                if (e.key === "Enter") {
                                    handleinptchange();
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