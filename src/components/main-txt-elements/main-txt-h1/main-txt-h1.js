import React from 'react';
import './main-txt-h1.css'
/* Modules for Redux */
import { connect } from 'react-redux';

const MainTxtH1 = ({ stateClass, lessWidth600, alive }) => {
  let badText = 'ТЫ РАЗРУШИЛ МОЙ ЛОГОТИП';
  badText = badText.split('');
  if (!alive) return (
    <h1 className = {`main-bad-txt-1 ${lessWidth600 ? 'lessWidth600' : ''}`}>
      <span className='bad-word-group'>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>L</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>O</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>G</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>O</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}> </span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>I</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>S</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}> </span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>D</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>I</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>E</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>.</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>.</span>
        <span className={`bad-word ${lessWidth600 ? 'lessWidth600' : ''}`}>.</span>
      </span>
    </h1>
  );
  return (
    <h1 className = {`main-txt-1 ${stateClass} ${lessWidth600 && 'lessWidth600'}`} >
      СТРАСТНАЯ РАЗРАБОТКА ВИДОВ
    </h1>
  );
};

/* Redux store to props */
const mapStateToProps = ({
  mainAnimations: {stateClass} ,
  responsiveQuery: {lessWidth600},
  logo: {alive} }) => {
    return { stateClass, lessWidth600, alive }
};

/* Export MainTxtElements */
export default connect(mapStateToProps)(MainTxtH1);
