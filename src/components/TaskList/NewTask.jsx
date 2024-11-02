import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5 shadow-lg transition-transform transform hover:scale-105'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-gray-900'>{data.taskTitle}</h2>
            <p className='mt-2 text-sm text-gray-700'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='bg-green-500 text-white rounded px-4 py-2 text-sm hover:bg-green-600 transition duration-200 ease-in-out transform hover:scale-105'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask