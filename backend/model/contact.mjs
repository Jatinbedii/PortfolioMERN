import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    mail : {
        type: String,
        required : true
    },
    message : {
        type : String,
        required: true
    }
    
},{timestamps : true})

const Contact = mongoose.model('Contact', contactSchema);

export default Contact