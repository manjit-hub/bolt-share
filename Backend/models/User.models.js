import mongoose from 'mongoose';
import './fileConverted.models'
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    file: {
        type: mongoose.Schema.Types.ObjectId,
        ref: FileConverted
    }
})

export const User = mongoose.model("User", userSchema);