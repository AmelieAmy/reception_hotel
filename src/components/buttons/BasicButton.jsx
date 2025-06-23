import React from 'react'

const BasicButton = ({children}) => {
  return (
    <div className='text-center rounded-full text-white text-xl capitalize bg-gold-600 py-1'>
        {children}
    </div>
  )
}

export default BasicButton;