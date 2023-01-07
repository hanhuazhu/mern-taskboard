import mongoose, { Schema } from "mongoose";

const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tasks: {
    type: [mongoose.Types.ObjectId],
    ref: 'Card'
  }
}, { timestamps: true });

const List = mongoose.model('List', listSchema);

export default List;