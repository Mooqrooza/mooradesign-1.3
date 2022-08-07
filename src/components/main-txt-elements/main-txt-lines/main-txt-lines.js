import React from 'react';
import './main-txt-lines.css';
/* Modules for Redux */
import { connect } from 'react-redux';

const MainTxtLines = ({ stateClass, lessWidth600 }) => {
    return(
      <div className={`main-txt-lines ${lessWidth600 ? 'lessWidth600' : ''}`}>
        <div>
          <svg className='mt-line-1' width='50%' height='3' >
            <g  className={stateClass} >
              <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
          <svg className='mt-line-2' width='16' height='3' >
            <g  className={stateClass}>
              <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
          <svg className='mt-line-2a' width='20' height='3' >
            <g  className={stateClass}>
              <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
          <svg className='mt-line-2b' width='20' height='3' >
            <g  className={stateClass}>
              <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
          <svg className='mt-line-3' width='50%' height='3' >
            <g  className={stateClass}>
              <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
          <svg className='mt-line-4' width='20' height='3' >
            <g  className={stateClass}>
              <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
          <svg className='mt-line-4a' width='20' height='3' >
            <g  className={stateClass}>
              <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
          {!lessWidth600 &&
            <div>
              <svg className='mt-line-5' width='20' height='3' >
                <g  className={stateClass}>
                  <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
                </g>
              </svg>

              <svg className='mt-line-5a' width='20' height='3' >
                <g  className={stateClass}>
                  <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
                </g>
              </svg>
              <svg className='mt-line-6' width='20' height='3' >
                <g  className={stateClass}>
                  <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
                </g>
              </svg>
              <svg className='mt-line-6a' width='20' height='3' >
                <g  className={stateClass}>
                  <line x1='0' y1='1' x2='100%'  y2='1' fill='none' stroke='#c93131' strokeWidth='1.4' />
                </g>
              </svg>
            </div>
          }
          <svg className='mt-line-7' width='3' height='12' >
            <g  className={stateClass}>
              <line x1='1' y1='0' x2='1'  y2='100%' fill='none' stroke='#c93131' strokeWidth='1.4' />
            </g>
          </svg>
        </div>
      </div>
    )
};

/* Redux store to props */
const mapStateToProps = ({ mainAnimations: { stateClass }, responsiveQuery: { lessWidth600} }) => {
  return { stateClass, lessWidth600 }
};

/* Export MainTxtLines */
export default connect(mapStateToProps)(MainTxtLines);
