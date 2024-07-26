import mongoose from 'mongoose';

const fileConvertedSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

}, {timestamps: true});

export const FileConverted = mongoose.model("FileConverted", fileConvertedSchema);