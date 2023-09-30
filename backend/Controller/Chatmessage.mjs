import Chat from "../model/Chat.mjs";
import mongoose from "mongoose";

const Chatmessage = async(req,res) => {
    const{name,message} = req.body;
    if(!name || !message){
        res.json({message: 'fill all fields'})
    }
    const mesj = await Chat.create({name,message})

    if(mesj){
        res.send({message:' messsage sent'})
    }else{
        res.send({message : 'not sent'})
    }
}

export default Chatmessage ; 