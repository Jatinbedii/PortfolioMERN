import mongoose from "mongoose";
import 'dotenv/config'


const connectdb = async() => {
    try {
       await mongoose.connect(process.env.DBKEY)
       console.log('connected to DB')
    } catch (error) {
        console.log('not connected')
    }

}
export default connectdb;