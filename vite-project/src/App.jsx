import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Homepage from './pages/Homepage';
import TaskListPage from './pages/TaskListPage';
import ShowTask from './pages/ShowTask';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout/>} />
        <Route index element ={<Homepage />} />
        <Route path="/task-list" element={<TaskListPage />} />
        <Route path="/show-task/:taskid" element={<ShowTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App