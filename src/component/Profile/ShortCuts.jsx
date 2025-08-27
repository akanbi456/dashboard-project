import React from 'react'
import Title from '../../ui/Title'
import { ShortcutLink } from '../../constants'
import { IoIosArrowForward } from 'react-icons/io'

const ShortCuts = () => {
  return (
    <div className='flex flex-col gap-4 p-4 bg-white rounded-lg dark:bg-gray-600'>
        <Title>Shortcuts</Title>
        {ShortcutLink.map((list, index)=>(
            <div key={index} className='flex items-center justify-between rounded-sm cursor-pointer'>
                <div className='flex items-center gap-4'>
                    <span className='flex items-center justify-center w-8 h-8 p-2 bg-blue-100 ronded-full dark:bg-gray -800 dark:text-gray-300'>
                        <list.icon/>
                    </span>
                    <h3 className='font-medium dark:text-gray-300' > 
                        {list.title}
                    </h3>
                </div>
                <span className='p-2 transition-all duration-500 bg-gray-700 rounded-md dark:text-gray-300 hover:mr-3'>
                    <IoIosArrowForward/>
                </span>
                
            </div>
        ))}
    </div>
  )
}

export default ShortCuts

       
 