import React from 'react'
import img from './error.png'
import './Error.css'

const Error = () => {
  return (
    <div className='error'>
        <img src={img} alt="" className='error-img' />
        Error
    </div>
  )
}

export default Error