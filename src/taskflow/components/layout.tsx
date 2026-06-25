import { useContext } from 'react'
import styles from "../scss/layout.module.scss"
import { ThemeContext } from '../../themecontext'
import {NavLink } from 'react-router-dom'

function Layout({children}:any) {
  const { theme, settheme } = useContext(ThemeContext);
  var white ="#fff";
  var black ="#000"


  return (
    <div className={`${styles.wholepage} ${theme ? "" : styles.darkwholepage}`}>
      <div className={`${styles.header} ${theme ? "" : styles.darkheader} `}>
       <h1>Focus flow</h1>
       <div style={{width:"26px", cursor:"pointer"}} onClick={()=>settheme(!theme)}>  <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill={theme ?black:white}
    >
      <path
        d="m32.8,29.3c-8.9-.8-16.2-7.8-17.5-16.6-.3-1.8-.3-3.7,0-5.4.2-1.4-1.4-2.3-2.5-1.6C6.3,9.7,2.1,16.9,2.5,25c.5,10.7,9,19.5,19.7,20.4,10.6.9,19.8-6,22.5-15.6.4-1.4-1-2.6-2.3-2-2.9,1.3-6.1,1.8-9.6,1.5Z"
        fill="none"
        stroke={theme ?black:white}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg></div>
      </div>
      <div className={`${styles.body} ${theme ? "" : styles.darkbody}`}>
        <nav className={`${styles.sidebar} ${theme ? "" : styles.darksidebar} sidebar`}>
   
    <NavLink to="/moodcapturer" >Mood</NavLink>
    <NavLink to="/tasklistnew">Tasks</NavLink>
    <NavLink to="/focussession" >Timer</NavLink>
    <NavLink to="/dashboard" >Dashboard</NavLink>
    <NavLink to="/quotegenerator">Quote</NavLink>
    <NavLink to="/weatherapp" >Weather</NavLink>
    <NavLink to="/goalform" >Goals</NavLink>
    <NavLink to="/tripform" >Trips</NavLink>
  </nav>
        <div className={`${styles.inner} ${theme ? "" : styles.darkinner}`}>
               {children}   
        </div>
        
      </div>
    </div>
  )
}

export default Layout
