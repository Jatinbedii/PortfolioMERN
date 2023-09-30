import express from 'express';
import 'dotenv/config'
const app = express()
import router from './routes/contact.mjs';
import connectdb from './db.mjs';
import cors from "cors";
import Chatrouter from './routes/Chatmessage.mjs';
const port = process.env.PORT
app.use(express.json());
app.use(cors())
connectdb();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/contact', router)
app.use('/chat', Chatrouter)
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})