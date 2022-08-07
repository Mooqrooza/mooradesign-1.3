import React from 'react';
import './reacted-remark.css';
/* Modules for Redux */
import { connect } from 'react-redux';

const ReactedRemark = ({ stateClass, lessWidth500 }) => {
  return (
    <div className={`reacted-remark ${stateClass} ${lessWidth500 && 'lessWidth500'}`}>
      <a href='https://reactjs.org/' target='blank' >
      <div className={`rm-lines ${lessWidth500 ? 'lessWidth500' : ''}`}>
        <div className={`rm-line-1 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-2 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-2a ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-2b ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-3 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-3a ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-3b ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-4 ${stateClass}`}><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-4a ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-5 ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-5a ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-6 ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-6a ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-7 ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-8 ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-8a ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-9 ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
        <div className={`rm-line-9 ${stateClass}`} ><svg><g><line x1='1' x2='1' y1='0' y2='100%' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
      </div>
      <div className={`rm-eclipse ${stateClass}`} >
        <svg width='180' height='80'>
          <g><circle  cx='90' cy='40' r='22' fill='#000' /></g>
          <g opacity='0'><circle  cx='90' cy='40' r='16' fill='#b42a27' /></g>
          <g><circle  cx='90' cy='40' r='16' fill='#000' /></g>
        </svg>
      </div>
      <div className={`react-ico ${stateClass} ${lessWidth500 && 'lessWidth500'}`} >
        <svg width='180' height='80' viewBox='0 0 180 80'>
          <g>
            <path stroke='#b42a27' strokeWidth='1.6' fill='none' d='M130,59.134c8.046,0,14.569,2.178,14.569,4.866S138.046,68.866,130,68.866,115.431,66.687,115.431,64,121.954,59.134,130,59.134Z' transform='translate(-40 -24)'/>
            <path stroke='#b42a27' strokeWidth='1.6' fill='none' d='M134.209,61.57c4.026,6.973,5.406,13.715,3.081,15.057s-7.473-3.223-11.5-10.2-5.406-13.715-3.081-15.057S130.183,54.6,134.209,61.57Z' transform='translate(-40 -24)'/>
            <path stroke='#b42a27' strokeWidth='1.6' fill='none' d='M125.791,61.57c4.026-6.974,9.174-11.539,11.5-10.2s0.945,8.083-3.081,15.057-9.174,11.539-11.5,10.2S121.765,68.544,125.791,61.57Z' transform='translate(-40 -24)'/>
            <circle  fill='#b42a27' cx='90.001' cy='40' r='1.813'/>
          </g>
        </svg>
      </div>
      <div className={`rm-text-1 ${stateClass} ${lessWidth500 && 'lessWidth500'}`} >SITE ON<br />REACT</div>
      </a>
    </div>
  )
};

/* Redux store to props */
const mapStateToProps = ({ reactRemark: { stateClass }, responsiveQuery: { lessWidth500} }) => {
  return { stateClass, lessWidth500 }
};

/* Export ReactedRemark */
export default connect(mapStateToProps)(ReactedRemark);
