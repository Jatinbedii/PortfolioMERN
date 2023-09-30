import express from 'express';
import Chatmessage from '../Controller/Chatmessage.mjs';
import Getchats from '../Controller/Getchats.mjs';

const Chatrouter = express.Router()
Chatrouter.get("/", Getchats).post("/",Chatmessage)
export default Chatrouter;

