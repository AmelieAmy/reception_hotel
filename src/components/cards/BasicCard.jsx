import React from 'react'

const BasicCard = ({children}) => {
  return (
    <div className='p-4 bg-neutral-300 flex-1 w-full rounded-xl m-auto drop-shadow-2xl/25 text-left'>
        {children}
    </div>
  )
}

export default BasicCard;