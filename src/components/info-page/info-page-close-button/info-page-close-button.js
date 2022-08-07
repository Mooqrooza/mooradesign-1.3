import React from 'react';
import './info-page-close-button.css'
import { connect } from 'react-redux';
import { clickIpCloseButton } from '../../../actions';

const InfoPageCloseButton = ({ stateClass, txtColorNew, onBttClick }) => {
  return (
    <div className={`ip-close-button`} onClick={clickIpCloseButton}>
      <div className={`cbtt-45deg-line-1 ${stateClass}`} >
        <svg width='100%' height='3px' >``
          <line x1='0' y1='1' x2='100%' y2='1' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
        </svg>
      </div>
      <div className={`cbtt-45deg-line-2 ${stateClass}`} >
        <svg width='100%' height='3px' >
          <line x1='0' y1='1' x2='100%' y2='1' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
        </svg>
      </div>
      <div className='cbtt-lines'>
        <div className={`cbtt-bord-line-1 ${stateClass}`} >
          <svg width='3px' height='100%' >
            <line x1='1' y1='0' x2='1' y2='100%' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
          </svg>
        </div>
        <div className={`cbtt-bord-line-2 ${stateClass}`}>
          <svg width='100%' height='3px' >
            <line x1='0' y1='2' x2='100%' y2='2' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
          </svg>
        </div>
        <div className={`cbtt-bord-line-3 ${stateClass}`}>
          <svg width='100%' height='3px' >
            <line x1='0' y1='1' x2='100%' y2='1' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
          </svg>
        </div>
        <div className={`cbtt-bord-line-4 ${stateClass}`}>
          <svg width='3px' height='100%' >
            <line x1='2' y1='0' x2='2' y2='100%' fill='none' stroke={txtColorNew} strokeWidth='1.4'/>
          </svg>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({
    infoPageButtons: {stateClass}, projectsPresent: {txtColorNew}
}) => {
    return  { stateClass, txtColorNew }
};

export default connect(mapStateToProps)(InfoPageCloseButton);
