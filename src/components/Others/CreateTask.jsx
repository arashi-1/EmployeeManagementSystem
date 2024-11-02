import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        
<div className="bg-[#1c1c1c] flex items-center justify-center text-white p-6">
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-2 gap-6">
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="task-title">Task Title</label>
            <input
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
             type="text" id="task-title" className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter task title" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="date">Date</label>
            <input
            value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
            
            type="date" id="date" className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="assign-to">Assign To</label>
            <input
            value={asignTo}
            onChange={(e)=>{
              setAsignTo(e.target.value)
            }}
            type="text" id="assign-to" className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter assignee's name" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="category">Category</label>
            <input
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
            type="text" id="category" className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter task category" />
          </div>
        </div>

        
        <div className="space-y-6 flex flex-col">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="description">Description</label>
            <textarea 
            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
            id="description" className="w-full h-32 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter task description"></textarea>
          </div>

          <button type="submit" className="w-full py-3 font-semibold bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150">
            Create Task
          </button>
        </div>
      </form>
    </div>
    )
}

export default CreateTask