import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatschmea = new Schema({
    name: {
        type : String,
        required : true
    },
    message : {
        type: String,
        required: true
    }
},{timestamps: true})

const Chat = mongoose.model('Chat', chatschmea)

export default Chat;