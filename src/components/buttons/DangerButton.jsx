import React from 'react'

const DangerButton = ({children}) => {
  return (
    <div className='text-center rounded-full text-white text-lg capitalize bg-red-800 py-px'>
        {children}
    </div>
  )
}

export default DangerButton;