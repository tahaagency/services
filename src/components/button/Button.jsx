import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Button = ({name, icon, to}) => {
  return (
    <>
      <div className="btn_main">
        <Link to={to} className='btn_main_1'>{name} <span className='icon'>{icon}</span></Link>
      </div>
    </>
  )
}

export default Button
