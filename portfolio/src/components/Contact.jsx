import { useState } from "react"
import axios from 'axios';
import Squid from "../assets/squidward2.png"
import Insta from "../assets/insta.png"
import github from "../assets/github.png"
import arrow from "../assets/arrow.png"
const Contact = () => {

  const [name,setname] = useState("")
  const [mail,setmail] = useState("")
  const [message,setmessage] = useState("")
   
  const submitinfo = () => {
    const infomessage = {name,
    mail,message}
    axios.post("http://localhost:3000/contact",infomessage);
    
  }

  const handlesubmit = event => {
    
    event.preventDefault();
    document.getElementById("ourform").reset()

    
  }
  return (
   <>
   <p className="text-center pt-3">Message me!</p>
   <a href="/"><img src={arrow} className="w-[20px]"/></a>
   <div className="flex flex-col md:flex-row md:justify-around ">
   <form id="ourform" className="flex flex-col text-center gap-y-3 pt-2" onSubmit={handlesubmit}>
      <label>Name <input type="text" className="w-[200px] border-solid border-2 border-black" placeholder=" Enter your name" onChange={(e)=>setname(e.target.value)} /></label>
      <label>Mail<input type="email" placeholder="Enter your email" onChange={(e)=>setmail(e.target.value)} className="w-[200px] ml-4 border-solid border-2 border-black"/></label>
      <label>Message <textarea className=" border-solid border-2 border-black w-[200px]" placeholder="Enter your message" onChange={(e)=>setmessage(e.target.value)} /></label>
      <button className="border border-black rounded shadow max-w-[38px] m-auto" type="submit" onClick={submitinfo}>Send</button>
      
   </form>
   <div><img className="max-h-96 pt-4 md:pt-0" src={Squid}/></div>
   </div>
   <p className="text-center p-[40px]">***************</p>
   <p className="text-center">Social Handles</p>
   <div className="flex justify-around">
     <a target="_blank" href="https://github.com/Jatinbedii"><img src={github} className="w-[50px] mt-3"/></a>
     <a target="_blank" href="https://www.instagram.com/jatinbedii/"> <img src={Insta} className="w-[50px] mt-3" /></a>
   </div>
   <p className="text-center p-[40px]">***************</p>
   </>
  )
}

export default Contact