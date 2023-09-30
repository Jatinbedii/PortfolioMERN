import Chat from "../model/Chat.mjs";
import mongoose from "mongoose";

const Getchats = async(req,res) => {
    try {
        const allchats = await Chat.find({})
        res.send({allchats})
    } catch (error) {
        res.send(error)
    }
}

export default Getchats