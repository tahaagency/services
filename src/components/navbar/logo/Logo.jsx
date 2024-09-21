import React from 'react'
import LogoImage from '../../../Assets/remove_bg_logo.png'
import './Style.css'

function Logo() {
  return (
    <div>
      <img className='logo' src={LogoImage} alt='Logo' />
    </div>
  )
}

export default Logo
