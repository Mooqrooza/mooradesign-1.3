import React from 'react';
import './info-page-background.css';
import MiniLogosFly from './mini-logos-fly';
/* Modules for Redux */
import { connect } from 'react-redux';

const InfoPageBackground = ({
  stateClass, lessWidth500, lessWidth800, lessWidth1000,
  lessHeight600, lessHeight700, lessHeight1000,
}) => {
  let respClass = '';
  if (lessWidth800 && lessHeight700) { respClass = 'lessWidth800-lessHeight700' }
  if (lessWidth500 && lessHeight1000) { respClass = 'lessWidth500-lessHeight1000' }
  if (lessWidth1000 && lessHeight600) { respClass = 'lessWidth1000-lessHeight600' }
  return (
    <div className={`ip-background ${stateClass}`}>
      <div className={`ip-face-container ${stateClass} ${respClass}`} >
        <div className={`ip-face ${stateClass}`} >
        </div>
      </div>
    </div>
  )
}

/* Redux store to props */
const mapStateToProps = ({
  infoPageContent: { stateClass },
  responsiveQuery: {
    lessWidth500, lessWidth800, lessWidth1000,
    lessHeight600, lessHeight700, lessHeight1000,
   }
}) => {
  return {
    stateClass,
    lessWidth500, lessWidth800, lessWidth1000,
    lessHeight600, lessHeight700, lessHeight1000,
  }
};

/* Export InfoPageBackground */
export default connect(mapStateToProps)(InfoPageBackground);
