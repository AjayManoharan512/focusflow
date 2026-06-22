import React from 'react'
import styles from "../assets/styles/stage1.module.scss"
function Button({title, onClick, variant}) {
  return (
    <>
       <button onClick={onClick} className={`${styles.button} ${variant == "secondarybtn" ? styles.secondary:"" }`}>{title}</button>
    </>
  )
}

export default Button