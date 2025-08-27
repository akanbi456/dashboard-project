import React from 'react'

const Main = ({children}) => {
  return (
    <div className='flex flex-col gap-2 p-4 text-gray-100 duration-300 bg-gray-100 text-gray sm:ml lg:flex-row translate-all mt-14 dark:bg-gray-800'>
{children}
    </div>
  )
}

export default Main