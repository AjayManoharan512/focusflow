
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../src/themecontext'
import EmailConfigCard from '../../customcomponents/tablelikecom'

function Taskform() {
const {theme , settheme}= useContext(ThemeContext)

    const [overallinfo, setoverallinfo] :any= useState({
        name: "",
        description: "",
        priority: ""
    })
    const handlesubmit = () => {
        console.log(overallinfo)
        setoverallinfo({
            name: "",
            description: "",
            priority: ""
        })

    }
   
    useEffect(()=>{
        localStorage.setItem("user", overallinfo)
       
        
    } ,[])
    return (
        <>
            <div className='formcontainer'>
                <div className='formheading'>
                    <h4>Task details</h4>
                </div>
                <div className='formrow'>
                    <label htmlFor='name'> Title Name:</label>
                    <input onChange={(e) => setoverallinfo((prev) => ({ ...prev, name: e.target.value }))} value={overallinfo.name} type='text' placeholder='Enter title name' />
                </div>
                <div className='formrow'>
                    <label htmlFor='description'> Description:</label>
                    <textarea value={overallinfo.description} onChange={(e) => setoverallinfo((prev) => ({ ...prev, description: e.target.value }))} placeholder='Enter Description'>

                    </textarea>
                </div>
                <div className='formrow'>
                    <label htmlFor='priority'> Priority:</label>
                    <select value={overallinfo.priority} onChange={(e) => setoverallinfo((prev) => ({ ...prev, priority: e.target.value }))}>
                        <option value={"low"}>Low</option>
                        <option value={"med"}>Med</option>
                        <option value={"high"}>High</option>
                    </select>
                </div>

                <div className='btncontainer'>
                    <button onClick={handlesubmit}>Submit</button>
                </div>

            </div>
            <EmailConfigCard
items={[
{
label: "Configuration Type",
value: <span className="badgePurple">Existing Email Address</span>
},
{
label: "Domain",
value: "worktual.com"
},
{
label: "Support Email Address",
value: "support@worktual.com"
},
{
label: "Email Threshold",
value: "100 emails per hour"
},
{
label: "Email Bot",
value: <span className="badgeGreen">Enabled</span>
}
]}
/>
        </>
    )
}

export default Taskform