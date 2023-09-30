import Chatbox from "./Chatbox"

import arrow from "../assets/arrow.png"


function Chat() {
  return (<>
    <p className="text-center pt-3">Welcome To ChatBox</p>
    <a href="/"><img src={arrow} className="w-[20px]"/></a>
    <div className="m-auto"><Chatbox/></div>
    
    </>)
  
}

export default Chat
