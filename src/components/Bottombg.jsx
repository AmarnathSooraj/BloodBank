import React from 'react'
import './Background.css'
import { useLocation } from 'react-router-dom'
function Bottombg() {
  const location = useLocation;
  var logsign = location.pathname === '/signup' || '/login';

  return (
    <div className={`background2 ${logsign ? '-logsign' : ''} `}>
      <div className='content'>
        <p className="heading">Just one donation can help up to three people</p>
        <p className='line'>Reach out to us via phone, email, or visit our center. We're here to help!</p>
        <button>Contact us</button>
      </div>
      <p className='copy'> 2025 Cactus. All rights Reserved.</p>
    </div>
  )
}

export default Bottombg
