import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
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
    path: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const File = mongoose.model("File", fileSchema);

export default File;