import { useState } from "react"

import mic from "../assets/mic.png"
function Music() {
     const [up,setup] = useState(false);

    const play = () => {
        document.getElementById('playmusic').play()
       
      }
      const pause = () => {
        document.getElementById("playmusic").pause()
      }
    
      const updown = () => {
        setup(!up)
      }
  return (
    
    <>
    <div className={`bg-white flex justify-around border-dashed border-2 border-black w-full fixed ${up?'visible' :    'invisible mt-[-35px]'}`}>
      <p className="pt-1">Radio</p>
      <button onClick={play} className="border border-black rounded shadow m-1">Play</button>
      <button onClick={pause} className=" border border-black rounded shadow m-1">Pause</button>
      
      
     
    </div>
    <audio src="https://prclive4.listenon.in/Hindi" id="playmusic">
    
    </audio>
    <button onClick={updown} className={`border-dotted border-2  border-black fixed ${up?'mt-[34px]':''}`}><img src={mic} className="h-[25px] "/></button>
    </>
  )
}

export default Music