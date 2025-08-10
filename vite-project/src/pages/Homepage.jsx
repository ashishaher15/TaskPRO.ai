import React from "react";
import  Navigation from "../component/Navigation";
import { Outlet } from "react-router-dom";  
import{z} from "zod";				
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const HomePage = () => {
//Usestate hook fo r

const[formData, setFormData] = React.useState({
  title: "",
  description: "",
});




   const taskSchema = z.object({
 
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),

  });
  //functipon to handle  input 

  const  handleInput = (e) => {
    console.log (e.target.value); 
  }


  //function to handle form submission
   const  handleSubmit =  (e) => {
    e.preventDefault();

   }
    return (

    <>
   
    <Outlet />
    <div className="  pt-5  ">
      <h1 className="text-2xl font-bold mb-5">Add Task</h1>
       <Navigation />
      <form  onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Title
          </label>
          <input onChange={handleInput}  name ="title"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Task title"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Description
          </label>
          <textarea onChange={handleInput} name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Task description..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default HomePage;