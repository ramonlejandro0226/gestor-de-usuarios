import React from 'react'
import './Input.css'

function Input({label,...rest}) {
  return (
    <div className='field'>
        <label>{label}</label>

        <input{...rest}/>
    </div>
    
  )
}

export default Input