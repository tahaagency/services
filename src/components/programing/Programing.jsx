import React from 'react'
import './style.css'
import { FaCss3, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'

const Programing = () => {
  return (
    <>
      <div className="main_company_container">
        <div className="company_container">
        <div className="pro_heading">
        <h1 className='heading_pro'>Programming</h1>
        </div>
           <div className="pro_logos">
           <span>
                <FaHtml5 />
            </span>
            <span>
                <FaCss3 />
            </span>
            <span>
                <FaReact />
            </span>
            <span>
                <FaJsSquare />
            </span>
            <span>
                <RiTailwindCssFill />
            </span>
           </div>
        </div>
      </div>
    </>
  )
}

export default Programing
