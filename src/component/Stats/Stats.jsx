
// import React from 'react'
// import { employeesData } from "../../constants"
// import Balance from './Balance'
// import Card from './Card'

// const Stats = ({darkMode}) => {
//   return (
//     <div className='flex flex-col gap-4 md:flex-row md:flex-wrap'>
//       {employeesData.map((data, index) => (
//         <Card key={index} data={data} />
//       ))}
//       <Balance darkMode={darkMode} />
//     </div>
//   )
// }

// export default Stats

import React from 'react'
import { employeesData } from '../../constants'
import Card from './Card'
import Balance from './Balance'

const Stats = ({ darkMode }) => {
  return (
    <div className='flex flex-col flex-wrap w-full gap-6 lg:flex-row lg:gap-8 lg:px-4'>
      <div className='flex flex-wrap flex-1 gap-4'>
        {employeesData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      <div className='flex-[1] min-w-[320px]'>
        <Balance darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Stats
