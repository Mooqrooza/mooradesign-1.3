import React, {Component} from 'react';
import "./proj-card-item.css";
import { connect } from 'react-redux';
import { clickProjCard, mouseenterProjCard, mouseleaveProjCard } from '../../../actions';

const ProjLoadingIndicator = ({stateClass}) => {
    return (
     <div className = {`proj-card-loader ${stateClass}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
   )
};

class ProjCardItem extends Component  {
    prevStClass = '';
    render() {
      const { id, title, cards, lessWidth600 } = this.props;
      const { letterSize, stateClass } = cards[id];
      return (
        <div
         className = {`proj-card ${lessWidth600 ? 'lessWidth600': ''}`}
         onClick = {() => { clickProjCard(id)}}
         onMouseEnter = {() => mouseenterProjCard(id)}
         onMouseLeave = {() => mouseleaveProjCard(id)} >
          <div className = {`proj-card-word-1 ${stateClass}`} style={{fontSize: letterSize }} >{title[0]}</div>
          <div className = {`proj-card-word-2`} ></div>
          <div className = {`proj-card-square`} >
            <div className = {stateClass} ></div>
            <div className = {stateClass} ></div>
            <div className = {stateClass} ></div>
            <div className = {stateClass} ></div>
          </div>
          {!lessWidth600 &&
            <div className={`proj-card-word-line ${stateClass}`}>
              <div>
                <svg  width="100%" height="3px" >
                  <line x1="0" y1="0.6" x2="100%" y2="0.6" fill="none" stroke="#ca3232" strokeWidth="1.4" />
                </svg>
              </div>
            </div>
          }
          {stateClass==='loadingBegin' && <ProjLoadingIndicator stateClass = {stateClass}/>}
          <div className="hidden"></div>
        </div>
      )
    }
};

const mapStateToProps = ({
    projectCards: {cards},
    redButton: { stateClass: flyOutClass },
    responsiveQuery: {lessWidth600} }) => {
    return { cards, flyOutClass, lessWidth600 };
};

export default connect(mapStateToProps)(ProjCardItem);
