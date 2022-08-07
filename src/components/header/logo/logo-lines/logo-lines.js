import React from 'react';
import './logo-lines.css';

const LogoLines = ({ strokeColor = '#b42a27', stateClass, toggleKick }) => {
  if (toggleKick === null) return <div></div>;
  return (
    <div className={`l-lines ${stateClass}`}>
      <div className={`l-line-1 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor} strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-1a ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor}  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-1b ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor}  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-2 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor}  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-3 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor}  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-3a ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor}  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-4 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27' strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-4a ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27'  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-4b ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke='#b42a27'  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-5 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor}  strokeWidth='1.4' fill='none' /></g></svg></div>
      <div className={`l-line-6 ${stateClass}`} ><svg><g><line x1='0' x2='100%' y1='1' y2='1' stroke={strokeColor}  strokeWidth='1.4' fill='none' /></g></svg></div>
    </div>
  )
};

export default LogoLines;
