import React, {Fragment} from 'react';
import './proj-present-label.css';
import ProjPresentYear from '../proj-present-year';
/* Modules for Redux */
import { connect } from 'react-redux';

const ProjPresentLabel = ({ stateClass, projTitle, txtColorNew, bgColorNew, lessWidth800 }) =>  {
  return (
    <Fragment>
       <div className={`pp-label ${lessWidth800 ? 'lessWidth800' : ''}`} style={{ color: txtColorNew }}>{projTitle}</div>
       <div className={`pp-label-lines ${lessWidth800 ? 'lessWidth800' : ''}`} >
         <svg className={`pp-label-line1 ${stateClass}`} >
           <line x1='0.5' y1='0.5' x2='100%' y2='0.5' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
         </svg>
         <svg className={`pp-label-line2 ${stateClass}`} >
           <line x1='0.5' y1='0.5' x2='100%' y2='0.5' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
         </svg>
         <ProjPresentYear />
       </div>
    </Fragment>
  )
};

// Redux store and dispatch to props ******************************************
const mapStateToProps = ({
  projectsPresent: {stateClass, projectInfo, txtColorNew, bgColorNew },
  responsiveQuery: { lessWidth800 }
 }) => {
  return {
    stateClass, projTitle: projectInfo.title, txtColorNew, bgColorNew, lessWidth800
  }
};

export default connect(mapStateToProps)(ProjPresentLabel);
