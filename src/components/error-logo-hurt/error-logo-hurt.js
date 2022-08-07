import React from 'react';
import './error-logo-hurt.css'

const ErrorLogoHurt = () => {
  return (
    <div className='error-logo-hurt' >
      <div className='elh-wrapper'>
        <svg className='logo-hurt' width='140' height='140'>
          <g><line x1="82" y1="76" x2="82" y2="100" stroke="#781313" /></g>
          <g><line x1="62" y1="88" x2="62" y2="140" stroke="#ac2320" /></g>
          <g><line x1="66" y1="88" x2="66" y2="110" stroke="#ac2320" /></g>
          <g><line x1="56" y1="60" x2="56" y2="70" stroke="#ac2320" /></g>
          <g><line x1="74" y1="60" x2="74" y2="66" stroke="#ac2320" /></g>
          <path d="M70.7,97.7c-1.8,0-14.7-21.1-20.2-37.2-0.4-1.2,3.8-6.8,3.5-8s-5.2,1.9-5.5.7c-1.7-9.2,1.2-14.4,14.2-7.9,18.4,9.2,26.5,33,26.4,33,0,1.9-1.9,2.4-4.1,5.2,1-1.2-5,8-5,8S72.1,97.7,70.7,97.7Z" fill="#781313" />
          <path d="M85.1,83.4c2.2-2.7,4-3.2,4-5.1,0.1-.1-6.7-19.9-21.9-30.4A85.9,85.9,0,0,0,52.8,66.4c6.2,14.9,16.4,31.3,17.9,31.3S80,91.5,80,91.5,85.6,82.9,85.1,83.4Z" fill="#601212" />
          <g><path d="M94.3,53.1c0.9-4.9-3.3-.5-6.3-1.6s-5.5-4.4-8-5.8C61.3,54.3,52.4,77.9,52.5,78c-0.1,2.5,3.4,2.1,6.5,5.8s3.2,8.9,5.3,10.7,4.8,3.5,6,3.6S85.1,79.6,91.5,66.9c1.7-3.3-10.5,4-9.2.8S93.8,56.3,94.3,53.1Z" fill="#ac2320"/></g>
        </svg>
        <div>
          <div className='elh-text'>
            Что то пошло не так ... <br /> <span>Попробуйте зайти позже.</span>
          </div>
        </div>
        <a href='https://mooradesign.ru' >
          <svg width='78' height='78' viewBox="0 0 78 78" className='elh-refresh-button'>
            <polyline points="25 38.9 58 38.9 52 31.1" fill="none" stroke="#ac2320" strokeMiterlimit="10" strokeWidth="1.4"/>
            <polyline points="53 43.1 20 43.1 26 50.9" fill="none" stroke="#ac2320" strokeMiterlimit="10" strokeWidth="1.4"/>
          </svg>
        </a>
      </div>
    </div>
  )
};


/* Export ErrorLogoHurt with connect-redux */
export default ErrorLogoHurt;
