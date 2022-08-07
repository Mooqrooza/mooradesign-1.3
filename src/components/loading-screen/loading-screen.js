import React from 'react';
import './loading-screen.css';
/* Import modules for Redux */
import { connect } from 'react-redux';

const LoadingScreen = ({ projsLoading }) => {
  return (
    <div className={`loading-screen ${!projsLoading && 'hidden'}`}>
      <div className={`loading-indicator ${!projsLoading && 'hidden'}`}>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
};

/* Redux store and dispatch to props */
const mapStateToProps = ({ main: { projsLoading } }) =>
  {return { projsLoading } }

/* Export LoadingScreen with Connect */
export default connect(mapStateToProps)(LoadingScreen);
