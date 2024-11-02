import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen  my-10'>
        <div className='w-[45%] bg-blue-400 text-white rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold '>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-green-400 text-white rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold '>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 text-white rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold '>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='w-[45%] bg-red-400 text-white rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold '>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber;