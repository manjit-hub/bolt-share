import mongoose from 'mongoose';
import File from './File.models.js'
const userSchema = new mongoose.Schema({
    userName :{
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
        ref: File
    }
})

export const User = mongoose.model("User", userSchema);