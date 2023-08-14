import React, { ReactNode } from 'react'
import './style.css'

interface ITab {
  children: ReactNode;
}

const Title = ({children}: ITab) => {
  return (
    <div className='title'>
      {children}
    </div>
  )
}

export default Title
