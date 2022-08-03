import React from 'react'
import cn from 'classnames'
import { BsCheck } from 'react-icons/bs'

const Checkbox = ({ isCompleted }) => {
  return (
    <div
      className={cn(
        'border-2 rounded-lg border-pink-400 w-6 h-6 mr-4 flex items-center justify-center',
        {
          'bg-pink-400': isCompleted,
        }
      )}
      type='checkbox'
    >
      {isCompleted && <BsCheck size={24} className='text-gray-900' />}
    </div>
  )
}

export default Checkbox
