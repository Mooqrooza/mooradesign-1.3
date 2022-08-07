import React from 'react';
import './footer.css';
import { connect } from 'react-redux';

const Footer = ({ stateClass = '', lessWidth600 }) => {
    return (
        <footer className={lessWidth600 ? 'lessWidth600' : ''} >
           <div className='footer-wrap'>
             <p className={stateClass} >Партнеры:</p>
             <p className={stateClass}>Pasanonik,</p>
             <p className={stateClass}>Soniy,</p>
             <p className={stateClass}>Applea,</p>
             <p className={stateClass}>Adibas</p>
             <p className={stateClass}>...</p>
             <div className='footer-lines'>
                 <svg width="100%" height="20px" >
                  <g className={stateClass} transform-origin='50%' ><line x1="0" y1="50%" x2="50%" y2="50%" fill="none" stroke="#c93131" /></g>
                  <g className={stateClass} transform-origin='50%' ><line x1="50%" y1="50%" x2="100%" y2="50%" fill="none" stroke="#c93131" /></g>
                 </svg>
             </div>
             <p className={`copyright-txt ${stateClass}`}>
                 <a href="http://www.mooradesign.ru">mooradesign.ru</a> 2014-2022 All righte reserved
             </p>
           </div>
        </footer>
     )
}

const mapStateToProps = ({ mainAnimations: { stateClass }, responsiveQuery: { lessWidth600} }) => {
  return { stateClass, lessWidth600 }
};
export default connect(mapStateToProps)(Footer);
