
import React from 'react'

const Member = ({ user }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <img
          src={user.image}
          alt={user.name}
          className='object-cover w-12 h-12 rounded-full'
        />
        <div>
          <h2 className='font-bold text-gray-400'>{user.name}</h2>
          <span className='text-sm font-semibold text-gray-400'>
            {user.country}
          </span>
        </div>
      </div>
      <span
        className={`${user.bgColor} p-3 rounded-full text-xs font-semibold text-gray-700 dark:bg-gray-500 dark:text-gray-300`}
      >
        {user.role}
      </span>
    </div>
  )
}

export default Member
