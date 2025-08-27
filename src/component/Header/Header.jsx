// import React from 'react'
// import { FaSun,FaMoon } from 'react-icons/fa'
// import { HiOutlineMenuAlt2 } from 'react-icons/hi'
// import { MdSpaceDashboard } from 'react-icons/md'
// const Header = ({darkMode,toggleDarkMode}) => {
//   return (
//     <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:gray-800 dark:border-gray-700' >
//       <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        
      
//       <div className='flex items-center justify-start rtl:justify-end'>
//       <div className='flex items-center justify-start rtl:justify-end'>
//         <button className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hideen hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' >
//           <HiOutlineMenuAlt2 className='text-2xl'/>
//         </button>
//         <a href="#" className='flex ms-2 md:me-24'>
//           <MdSpaceDashboard className='h-8 text-xl me-3 text-violet-500'/>
//           <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>DaxBod</span>
          
//         </a>
//       </div>
//       <button className='p-2 rounded-full dark:bg-slate-50 dark:text-slate-700'onClick={toggleDarkMode}>{darkMode ? <FaSun/> : <FaMoon/>}</button>
//       </div>
//       </div>
//     </nav>
//   )
// }

// export default Header

import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { MdSpaceDashboard } from 'react-icons/md'

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex items-center justify-between px-4 py-3 lg:px-6'>
        <div className='flex items-center gap-3'>
          <button className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'onClick={toggleSidebar}>
            <HiOutlineMenuAlt2 className='text-2xl' />
          </button>
          <a href="#" className='flex items-center'>
            <MdSpaceDashboard className='h-8 text-xl me-2 text-violet-500' />
            <span className='text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>DaxBod</span>
          </a>
        </div>

        <button
          onClick={toggleDarkMode}
          className='p-2 text-xl transition rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-slate-50 dark:text-slate-700'
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Header
