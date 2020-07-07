import React,{useState,useEffect} from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import './chat.css'
import InfoBar from '../infobar/infobar';
import Messages from '../messages/messages'
import Input from '../input/input'



let socket
let special
const Chat = ({location}) =>{
  
  const [name , setName] = useState('')
  const [room , setRoom] = useState('')
  const [message,setMessage]=useState('')
  const [messages,setMessages]=useState([])
  const [list,setList]=useState([])
  
  const ENDPOINT='https://chat-box-react-app.herokuapp.com/'
  
  
  
  useEffect(()=>{
    const {name ,room} = queryString.parse(location.search)
   
    socket=io(ENDPOINT)
    setName(name)
    setRoom(room)
    socket.emit('join' ,{name,room},()=>{
      
    })
    return() =>{
      socket.emit('disconnect')
      socket.off()
    }
  },[ENDPOINT,location.search])

 

  useEffect(( ) => {
    socket.on("message", message => {
      setMessages(msgs => [...msgs, message]);
    });
    socket.on("roomData", ({ users }) => {
      setList(users)
    });
},  [ ]);
  
  const sendMessage =(event)=>{
    event.preventDefault()
    if(message)
    {
      socket.emit('sendMessage',message,()=>setMessage(''))
    }
  
    
  }
  
  console.log(message,messages,list)
  return(
    
    <div className='outerContainer'>
     
      {special}
      <div className='container '>
        <InfoBar Room={room} people={list}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    
    </div>
  )
}

export default Chat;
