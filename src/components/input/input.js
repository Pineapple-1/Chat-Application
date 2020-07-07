import React from 'react'
import './input.css'
const Input =({message,setMessage,sendMessage})=>(

    <form className='form'>
    <input 
      className='input'
      placeholder='Type a message ...'
      value={message}
      onChange={(event)=>setMessage(event.target.value)}
      onKeyPress={(event)=>event.key==="Enter"?sendMessage(event):null}
      type="text"/>
      <button className="sendButton" onClick={(event)=>sendMessage(event)}>Send</button>
      </form>
)


export default Input