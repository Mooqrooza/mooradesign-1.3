import React from 'react';
import './red-button-lines.css';
/* Modules for Redux */
import { connect } from 'react-redux';

const RedButtonLines = ({ stateClass }) => {
  return (
    <div className="red-button-lines">
     <svg width="100%" height="40" >
      <g className = {stateClass} transform-origin="50%"><line x1="0" y1="50%" x2="50%" y2="50%" fill="none" stroke="#c93131"/></g>
      <g className = {stateClass} transform-origin="50%"><line x1="100%" y1="50%" x2="50%" y2="50%" fill="none" stroke="#c93131"/></g>
      <g className = {stateClass} transform-origin="0"><line x1="50%" y1="33%" x2="50%" y2="66%" fill="none" stroke="#c93131"/></g>
      <g className = {stateClass} opacity='0' transform-origin="0"><line x1="0" y1="80%" x2="100%" y2="80%" fill="none" stroke="#c93131"/></g>
     </svg>
   </div>
  )
};

/* Redux store and dispatch to props */
const mapStateToProps = ({ mainAnimations: { stateClass } }) => {
  return { stateClass }
};

export default connect(mapStateToProps)(RedButtonLines);
