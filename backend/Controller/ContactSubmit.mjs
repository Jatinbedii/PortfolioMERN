import mongoose from "mongoose";
import Contact from "../model/contact.mjs";

const ContactSubmit =async(req,res)=>{
 const   {name,mail,message} = req.body ;
 if(!name || !mail || !message){
    return res.json({message : 'fill all fields'})
 }

 const contact = await Contact.create({
    name,
    mail,
    message
 })

 if(contact){
    res.json({message: 'sent'})
 }else{
    res.json({error: 'not sent'})
 }
 

}
export default ContactSubmit;