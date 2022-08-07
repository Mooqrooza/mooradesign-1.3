import React from 'react';
import './proj-present-image-list.css';
import ProjPresentImageItem from '../proj-present-image-item';
/* Modules for Redux */
import { connect } from 'react-redux';


const ProjPresentImageList = ({ projectImages, stateClass, showPage, txtColorNew, lessWidth1010 }) => {
  if (!showPage) return (<div className='pp-content'></div>);
  return (
    <div className={`pp-content ${lessWidth1010 ? 'lessWidth1010' : ''}`} >
      { projectImages.map( (el, idx) => {
        return <ProjPresentImageItem el={el} key={`k${idx}`} id={idx} txtColorNew={txtColorNew} /> })
      }
    </div>
  );
};

/* Redux store and dispatch to props */
const mapStateToProps = ({
  projectsPresent: {
    projectImages,
    stateClass,
    showPage,
    txtColorNew },
  responsiveQuery: { lessWidth1010 }
}) => {
  return { projectImages, stateClass, showPage,  txtColorNew, lessWidth1010 }
};

export default connect(mapStateToProps)(ProjPresentImageList);
