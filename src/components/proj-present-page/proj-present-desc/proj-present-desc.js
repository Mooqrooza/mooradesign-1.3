import React from 'react';
import './proj-present-desc.css';
/* Modules for Redux */
import { connect } from 'react-redux';

const ProjPresentDesc = ({ projectInfo, txtColorNew, lessWidth1000 }) => {
  return (
    <div className='pp-desc' >
      <div>
        <div className='pp-desc-circles'>
          <svg width='100' height='40' >
           <circle fill={txtColorNew} strokeWidth='0' cx='45' cy='20' r='2' />
           <circle fill={txtColorNew} strokeWidth='0' cx='54' cy='20' r='2' opacity='0.4' />
          </svg>
        </div>
        <div className={`pp-desc-txt ${lessWidth1000 ? 'lessWidth1000' : ''}`} style={{ color: txtColorNew}} >{projectInfo.description || ''}</div>
      </div>
    </div>
  )
};

/* Redux store to props */
const mapStateToProps = ({ projectsPresent: {projectInfo, txtColorNew}, responsiveQuery: {lessWidth1000} }) => {
  return { projectInfo, txtColorNew, lessWidth1000 }
};

/* Export ProjPresentDesc with Connect */
export default connect(mapStateToProps)(ProjPresentDesc);
