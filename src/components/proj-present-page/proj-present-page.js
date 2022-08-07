import React from 'react';
import './proj-present-page.css';
import ProjPresentLabel from './proj-present-label';
import ProjPresentNextButton from './proj-present-next-button';
import ProjPresentPrevButton from './proj-present-prev-button';
import ProjPresentImageList from './proj-present-image-list';
import ProjPresentCloseButton from './proj-present-close-button';
import ProjPresentDesc from './proj-present-desc';

/* Modules for Redux */
import { connect } from 'react-redux';
import { clickPpCloseButton } from '../../actions';
import { bindActionCreators } from 'redux';

const ProjPresentPage = ({ stateClass, bgColorNew, txtColorNew, clickCloseButton, clickPpCloseButton}) => {
  return (
    <div className={`proj-present-page ${stateClass}`} style = {{ backgroundColor: bgColorNew }} >
      <div className='pp-container' >
        <ProjPresentLabel />
        <ProjPresentImageList />
        <ProjPresentDesc />
      </div>
      <ProjPresentCloseButton />
      <ProjPresentPrevButton />
      <ProjPresentNextButton />
    </div>
  )
};

/* Redux store to props */
const mapStateToProps = ({ projectsPresent: {stateClass, bgColorNew} }) => {
  return { stateClass, bgColorNew }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ clickPpCloseButton: clickPpCloseButton() }, dispatch);
};
/* Export ProjPresentPage with Connect */
export default connect(mapStateToProps, mapDispatchToProps)(ProjPresentPage);
