import express from 'express';  
import TaskModel from '../models/Task.model.js';
                    


export const createTask = async (req, res) => {
    try {
        const {title , description} = req.body;
        const newTask = new TaskModel({
            title,
            description
        });
        await newTask.save();
       
        res.status(200).json({
            success: true,
            message: "Task created successfully",
              })
    }catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create task",
            error: error.message
        });
    }
};

export const getAllTask = async (req, res) => {
   try{
    const taskData = await TaskModel.find().sort({ createdAt: -1  }).lean().exec();
    res.status(200).json({
        success: true,
        message: "All tasks fetched successfully",
        taskData
    });

   }catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch tasks",
            error: error.message
        });
    }

}
 
export const showTask = async (req, res) => {
    try {
        const { taskid } = req.params;
        const taskData = await TaskModel.findById(taskid).lean().exec();
        if (!taskData) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }   
        res.status(200).json({
            success: true,
            message: "Task fetched successfully",
            taskData
        });
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch task",
            error: error.message
        });
    }
}




export const updateTask = async (req, res) => {

    try {
        const { taskid } = req.params;
        const { title, description, status } = req.body;

        const updatedTask = await TaskModel.findByIdAndUpdate(  taskid,
            { title, description, status },
            { new: true, runValidators: true }
        ).lean().exec();
        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }   
        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            updatedTask
        }); 
} catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update task",
            error: error.message
        });
    }
}




export const deleteTask = async (req, res) => {



    try {
        const { taskid } = req.params;
        const deletedTask = await TaskModel.findByIdAndDelete(taskid).lean().exec();
        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }   
        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            deletedTask
        });

    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete task",
            error: error.message
        });
    }   
    


};