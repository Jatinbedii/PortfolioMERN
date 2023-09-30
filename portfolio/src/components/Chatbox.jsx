import axios from "axios"
import { useEffect, useState } from "react"


function Chatbox() {
  const [name,setname] = useState("")
  const [message,setmessage] = useState("")
  const [data,setdata]= useState([])
   const sendmessage = () => {
    const sendchat = {name,message}
    axios.post("http://localhost:3000/chat",sendchat)
    let newdata = axios("http://localhost:3000/chat")
    setdata(newdata.data.allchats)
    
   }
   const submithandler = () => {
   
    document.getElementById("messageform").reset()

    
   }
   
   useEffect(()=>{ const fetchdata =()=> {console.log('hello');  axios("http://localhost:3000/chat").then((res)=>setdata(res.data.allchats)).catch((err)=>console.log(err))}
  fetchdata(); },[])
  return (
    <>
    <div className="m-auto w-[300px] h-[300px] border-dashed border-2 border-gray-500 overflow-x-auto">
      {data.map((post)=>{ const {_id, name,message}= post; 
    return <section key={_id} className="flex flex-row"><div className="text-red-600 font-bold ">{name}</div><div className="pl-1 ">{message}</div></section>  })}
    </div>
    <form onSubmit={submithandler} id="messageform" className="mt-3 flex justify-around flex-wrap">
    <input placeholder="name" className="w-[100px] border-solid border-2 border-gray-500" onChange={(e)=>setname(e.target.value)}/>

      <input placeholder="message" className="border-solid border-2 border-gray-500" onChange={(e)=>setmessage(e.target.value)}/>
      <button className="border-solid border-2 border-gray-500" onClick={sendmessage}>Send</button>
    </form>
    </>
  )
}

export default Chatbox