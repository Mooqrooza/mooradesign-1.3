import React from 'react';
import './red-button-elements.css';
import RedButtonLines from './red-button-lines'
import { clickRedButton } from '../../actions'
import { connect } from 'react-redux';

const RedButtonElements = ({ globalStateClass, stateClass }) => {
   if ( stateClass === '' ) { stateClass = globalStateClass }
   return(
     <div className="red-button-elements">
     <div><p className={`red-button-elements-txt ${globalStateClass}`}>ЧТО ТУТ ПРОИСХОДИТ?</p></div>
     <RedButtonLines />
     <div className="red-button" onClick = {() => clickRedButton()}>
       <div className={`red-button-blur ${stateClass}`}></div>
       <div className={`red-button-main ${stateClass}`}></div>
       <div className={`red-button-txt ${stateClass}`}>%#$!!!...</div>
     </div>
     <div className="rb-bolts">
        <svg width="68px" height="60px" viewBox="0 0 68 60">
           <g opacity="0" >
             <path d="M2,18.461L19.906,6.485l0.059,5.1L34.016,5.537,15.132,17.72l-0.059-5.1Z" fill="#ca3232"/>
           </g>
           <g opacity="0" >
             <path d="M10.826,33.921l17.336-6.743-2.519,5.537,19.975-5-0.069,4.123,13.144-2.69-18.3,6.484,1.035-3.864L19.967,38.441l2.778-6.5Z" fill="#ca3232" />
           </g>
           <g opacity="0" >
             <path d="M7.451,48.736L21.979,53.3l-2.4,3.539Z" fill="#ca3232" />
           </g>
        </svg>
     </div>
     </div>
   )
}

const mapStateToProps = ({
    mainAnimations: { stateClass: globalStateClass },
    redButton: { stateClass }
}) => {
  return { globalStateClass, stateClass }
};

export default connect(mapStateToProps)(RedButtonElements);
