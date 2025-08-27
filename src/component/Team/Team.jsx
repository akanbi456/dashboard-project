import React from 'react'
import Title from '../../ui/Title'
import { users } from '../../constants'
import Member from './Member'
const Team = () => {
  return (
    <div className='flex flex-col flex-1 gap-5 p-3 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300'>
        <Title>Team</Title>
        {users.map((user,index)=>(
            <Member key={index} user={user}/>
        ))}
    </div>
  )
}

export default Team