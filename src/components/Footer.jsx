import React from 'react'
import { FaDownload } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
                    <h5>0.4mb</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    <FaDownload size=".7em" color='#fff'/>
                    </span>
                </div>
    </div>
  )
}

export default Footer
