import React, { useState } from 'react'
import Input from './input';

function index(): React.ReactNode {
    const [inc,setinc]=useState<number>(0)
    const [inptval,setinptval]=useState<string>("0")
    const increment=(): void => {
        const value = parseInt(inptval) || 0;
        setinc(inc + value);
    }
  return (
    <div>
         <p>Count: {inc}</p>
         <Input type="text" placeholder="Enter number" inptval={inptval} setinptval={setinptval} />
         {/* <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setinptval(e.target.value)} value={inptval}/> */}
         <button onClick={increment}>Inc</button>
    </div>
  )
}

export default index