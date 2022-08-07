import React from 'react';
import './proj-present-next-button.css';
import { connect } from 'react-redux';
import { slideToNextProject } from '../../../actions';

const ProjPresentNextButton = ({ txtColorNew, nextBttStateClass, lessWidth1200 }) => {
  return (
    <div className={`to-next-button ${lessWidth1200 ? 'lessWidth1200' : ''}`} onClick={() => slideToNextProject()} >
      <svg width="100" height="80" >
        <g className={`tnext-button-arrow ${nextBttStateClass}`} >
          <polyline points="17 39.5 83 39.5 75 50" fill="none" stroke={txtColorNew} strokeWidth="1.3"/>
        </g>
        <g className={`tnext-button-circle ${nextBttStateClass}`} >
          <path d="M12.5,40a37.5,37.5,0,0,1,75,0" fill="none" stroke={txtColorNew} strokeWidth="1.3"></path>
          <rect x="0" y="0" width="100" height="80" fill="none" strokeWidth="0"></rect>
        </g>
      </svg>
   </div>
  )
};

const mapStateToProps = ({
    projectsPresent: { txtColorNew },
    projPresentButtons: { nextBttStateClass },
    responsiveQuery: { lessWidth1200 }
}) => { return {
    txtColorNew, nextBttStateClass, lessWidth1200 }
};

export default connect(mapStateToProps)(ProjPresentNextButton);
