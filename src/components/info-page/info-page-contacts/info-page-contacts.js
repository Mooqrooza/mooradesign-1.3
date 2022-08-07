import React, {Fragment} from 'react';
import './info-page-contacts.css';
/* Modules for Redux */
import { connect } from 'react-redux';

const InfoPageContacts = ({ stateClass, lessWidth500 }) => {
  return (
    <Fragment>
      <svg className={`ip-line-1 ${lessWidth500 ? 'lessWidth500' : ''}`} width='30%' height='3px' >
        <g className={stateClass} >
          <line x1='0' y1='1' x2='100%' y2='1' stroke='#fff' strokeWidth='1.05'></line>
        </g>
      </svg>
      <div className={`ip-text-2 ${stateClass} ${lessWidth500 ? 'lessWidth500' : ''}`} >mooradesign@gmail.com <br />+7 932 092 4004 </div>
      <svg className={`ip-line-2 ${lessWidth500 ? 'lessWidth500' : ''}`} width='30%' height='3px' >
        <g className={stateClass} >
          <line x1='0' y1='1' x2='100%' y2='1' stroke='#fff' strokeWidth='1.05'></line>
        </g>
      </svg>
    </Fragment>
  )
};

/* Redux store to props */
const mapStateToProps = ({ infoPageContent: { stateClass }, responsiveQuery: { lessWidth500 }}) => {
  return { stateClass, lessWidth500 }
};

export default connect(mapStateToProps)(InfoPageContacts);
