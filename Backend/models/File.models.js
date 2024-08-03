import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  path: {
    type: String,
    required: true
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  url: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(), // Generate a unique ObjectId string
    unique: true
  }
}, { timestamps: true });

const File = mongoose.model("File", fileSchema);

export default File;
