import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let todoSchema = new Schema({
  id: String,
  task: String,
  completed: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;