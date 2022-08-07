import React from 'react';
import MainTxtLines from './main-txt-lines'
import MainTxtH1 from './main-txt-h1';
import './main-txt-elements.css';
import { connect } from 'react-redux';

const MainTxtElements = ({ stateClass, lessWidth600 }) => {
  let badText = 'ТЫ РАЗРУШИЛ МОЙ ЛОГОТИП';
  badText = badText.split();
  lessWidth600 =  lessWidth600 ? 'lessWidth600': '';
  return (
    <div className={`main-txt-place ${lessWidth600 || ''}`}>
      <div>
        <MainTxtH1 />
      </div>
      <MainTxtLines />
      <div>
        <h2 className = {`main-txt-2 ${stateClass} ${lessWidth600}`} >
          ИЛЛЮСТРАЦИИ, АНИМАЦИИ, ЛОГОТИПЫ, хитиновые браслеты...
        </h2>
      </div>
    </div>
  )
};

const mapStateToProps = ({ mainAnimations: { stateClass }, responsiveQuery: { lessWidth600} }) => {
  return { stateClass, lessWidth600 }
};

export default connect(mapStateToProps)(MainTxtElements);
