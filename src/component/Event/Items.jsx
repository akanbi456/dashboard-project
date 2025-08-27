import React from 'react'

const Items = ({event}) => {
  return (
    <div className='flex items-center gap-5'>
        <span className='w-16 h-16 p-2 font-bold text-center text-gray-800 bg-gray-300 rounded-lg'>{event.date}</span>
        <div>
            <h1 className='text-xl font-bold text-gray-400'>{event.title}</h1>
            <p className='text-gray-400'>{event.description}</p>
        </div>
    </div>
  )
}

export default Items