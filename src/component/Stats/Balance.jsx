

import React from 'react'
import Title from '../../ui/Title'
import { FiSend } from 'react-icons/fi'
import BarChart from './BarChart'

const Balance = ({ darkMode }) => {
  return (
    <div className='w-full max-w-[500px] p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300'>
      <div className='flex items-center justify-between mb-4'>
        <Title>Balance</Title>
        <FiSend className='w-8 h-8 p-2 text-gray-300 bg-gray-500 rounded-full' />
      </div>
      <div>
        <h1 className='text-2xl font-bold text-gray-500'>
          $600,000 <span className='text-xl font-medium'>(USD)</span>
        </h1>
        <span className='text-gray-400'>on July 2024</span>
        <BarChart darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Balance
