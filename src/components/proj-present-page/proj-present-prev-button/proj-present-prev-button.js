import React from 'react';
import './proj-present-prev-button.css';
import { connect } from 'react-redux';
import { slideToPrevProject } from '../../../actions';

const ProjPresentPrevButton = ({ txtColorNew, prevBttStateClass, lessWidth1200,}) => {
  return (
    <div className={`to-prev-button ${lessWidth1200 ? 'lessWidth1200' : ''}`} onClick={() => slideToPrevProject()} >
      <svg width='100' height='80' >
        <g className={`tprev-button-arrow ${prevBttStateClass}`}>
          <polyline points='25 50 17 39.5 83 39.5' fill='none' stroke={txtColorNew} strokeWidth='1.3'></polyline>
        </g>
        <g className={`tprev-button-circle ${prevBttStateClass}`}>
          <path d='M12.5,40a37.5,37.5,0,0,1,75,0' fill='none' stroke={txtColorNew} strokeWidth='1.3'></path>
          <rect x='0' y='0' width='100' height='80' fill='none' strokeWidth='0' ></rect>
        </g>
      </svg>
   </div>
  )
};

const mapStateToProps = ({
    projectsPresent: { txtColorNew },
    projPresentButtons: { prevBttStateClass },
    responsiveQuery: { lessWidth1200 }
}) => { return { txtColorNew, prevBttStateClass, lessWidth1200 } };

export default connect(mapStateToProps)(ProjPresentPrevButton);
