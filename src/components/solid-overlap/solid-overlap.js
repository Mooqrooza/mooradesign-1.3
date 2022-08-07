import React from 'react';
import './solid-overlap.css';
// Modules for Redux
import { connect } from 'react-redux';

const SolidOverlap = ({ mainStateClass, childStateClass, bgColorOld, bgColorNew }) => {
  return (
    <div className = {`solid-overlap ${mainStateClass}`} >
      <div className = {`overlap-mover ${childStateClass}`} >
       <div className = {`overlap-old-color ${childStateClass}`} style = {{ backgroundColor: bgColorOld }} ></div>
       <div className = {`overlap-new-color ${childStateClass}`} style = {{ backgroundColor: bgColorNew }} ></div>
      </div >
    </div>
  )
};

// Redux store and dispatch to props ******************************************
const mapStateToProps = ({ solidOverlap: { mainStateClass, childStateClass, bgColorOld, bgColorNew } }) => {
  return { mainStateClass, childStateClass, bgColorOld, bgColorNew }
};

export default connect(mapStateToProps)(SolidOverlap);
