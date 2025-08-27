import React from 'react'
import user05 from '../../assets/user05.jpg'
const Users = () => {
  return (
    <div className='flex items-center gap-3 p-4 bg-white rounded-full dark:bg-gray-600 dark:text-gray-300'>
        <img src={user05} alt="" className='rounded-full w-14 h-14' />
        <div >
            <h3 className='text-2xl font-semibold'>muhammed</h3>
            <p>stylist</p>
        </div>
    </div>
  )
}

export default Users