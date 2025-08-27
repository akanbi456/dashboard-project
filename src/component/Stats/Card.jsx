

const Card = ({ data }) => {
  const Icon = data.icon

  return (
    <div className='flex items-center w-full sm:w-[300px] md:w-[320px] bg-white dark:bg-gray-600 dark:text-gray-400 shadow-md rounded-2xl p-4'>
      
      {/* Icon */}
      <div className={`${data.bgColor} p-3 rounded-2xl text-black dark:text-gray-200 flex items-center justify-center`}>
        <Icon className="text-3xl" />
      </div>

      {/* Text */}
      <div className='flex flex-col justify-center ml-4'>
        <h2 className='text-xl leading-tight'>
          <span className='text-2xl font-bold text-black dark:text-gray-200'>
            {data.count}
          </span>
          <span className='text-gray-500 dark:text-gray-400'> /250</span>
        </h2>
        <p className='text-sm font-semibold text-black dark:text-gray-300'>
          {data.title}
        </p>
      </div>
    </div>
  )
}

export default Card
