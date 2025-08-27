import React from 'react'
import Title from '../../ui/Title'
import { events } from '../../constants'
import Items from './Items'
const Event = () => {
  return (
    <div className='flex flex-col flex-1 gap-5 p-5 bg-white rounded-2xl dark:bg-gray-600 dark:txt-gray-300'>
        <Title>Events</Title>
        {events.map((event, index)=>(
            <Items key={index} event={event} />
        ))}
    </div>
  )
}

export default Event