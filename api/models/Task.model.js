import mongoose from 'mongoose';


const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },    
    description: {
        type: String,
        required: true,
        trim: true,
    },

    status: { 
        type: String,
        enum: ['pending', 'in-progress', 'completed','failed'],
        default: 'pending',
    }, 
    },{timestamps: true}) 

     
    const TaskModel = new mongoose.model('Task', TaskSchema, 'tasks');
     export default TaskModel;




