import React from 'react'
import Users from './Users'
import ShortCuts from './ShortCuts'
import Donutchart from './DonutChart'
const Profile = () => {
  return (
    <div className='flex flex-col justify-between gap-4 px-2 py-4 mt-2 text-gray-400 bg-gray-200 rounded-lg dark:bg-gray-700 lg:w-60 xl:w-80'>
        <Users/>
        <ShortCuts/>
        <Donutchart/>
    </div>
  )
}

export default Profile