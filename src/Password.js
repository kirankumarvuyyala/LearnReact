import React, { useState } from 'react'

export default function Password() {
    const[flag,setFlag]=useState(true)
    const[count,setCount]=useState(100);
    const reaming=(e)=>{
        const msg=e.target.value;
        setCount(100-msg.length);

    }
    console.log(flag);
  return (
    <>

    <input type={flag?"password":"text"} maxLength={100} onKeyUp={reaming} className="m-1"/>
    <input type="checkbox" onChange={()=>setFlag(!flag)}/>
    {flag ? "Show" : "Hide"} Password
    
    <p>{count}</p>
    <button onClick={()=>setFlag(!flag)}>{flag?"show":"hide"}</button></>
  )
}
