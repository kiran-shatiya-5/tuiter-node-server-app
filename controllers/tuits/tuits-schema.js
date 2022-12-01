import mongoose from 'mongoose';
const schema = mongoose.Schema({
  _id: {type: mongoose.SchemaTypes.ObjectId},
  topic: String,
  username: String,
  time: String,
  image: String,
  title: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  replies: Number,
  retuits: Number,
}, {collection: 'tuits'});
export default schema;