import React from 'react'
import './Style.css'

const Edu = ({name, heading, edu, date, time}) => {
  return (
    <>
          <div className="card_heading">
            <h1>{name}</h1>
          </div>
          <div className="additional_experiense">
            <div className="card_1">
              <div className="card_1_left">
              <h3>{heading}</h3>
              <span>{edu}</span>
              </div>
              <div className="card_1_right">
                <span>{date}</span>
                <span>{time}</span>
              </div>
            </div>
          </div>
    </>
  )
}

export default Edu
