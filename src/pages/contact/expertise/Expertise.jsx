import React from 'react'
import './Style.css'

const Expertise = ({title}) => {
  return (
    <>
      <div className="content_expertise">
        <div className="card_expertise">
            <span className='span_expertise'>{title}</span>
        </div>
      </div>
    </>
  )
}

export default Expertise
