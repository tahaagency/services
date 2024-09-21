import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

const ContactCards = ({ icon, to, heading, param, email}) => {
  return (
    <>
      <div className="card">
        <div className="card_icon">
            <span>{icon}</span>
        </div>
        <div className="card_content">
            <h3>{heading}</h3>
            <p>{param}</p>
            <Link to={to} target='_blank' className='link_tag'>{email}</Link>
        </div>
      </div>
    </>
  )
}

export default ContactCards
