import React, {Component, createRef} from 'react';
import './mini-logos-fly.css';
/* Modules for Redux */
import { connect } from 'react-redux';

const MiniLogoFlySvg = ({ animateDur, colors }) => {
  return (
    <svg className='mlf-svg' width="100" height="80" viewBox="0 0 100 80">
      <g>
        <path fill={colors[0]} d="M49.747,62.937c-2.586,0-34.978-54.655-6.36-40.329,14.7,7.36,21.174,26.368,21.086,26.418C64.473,53.759,52.333,62.937,49.747,62.937Z" />
        <animateTransform attributeName="transform" type="rotate" values="0;-60;0;-55;0" dur={animateDur} repeatCount="indefinite"/>
      </g>
      <g>
        <path fill={colors[1]} d="M49.844,63.335c3.233,0,35.065-54.9,6.375-40.509C41.48,30.219,34.992,49.311,35.081,49.361,35.081,54.115,46.611,63.335,49.844,63.335Z"/>
        <animateTransform attributeName="transform" type="rotate" values="0;60;0;55;0" dur={animateDur} repeatCount="indefinite"/>
      </g>

    </svg>
  )
};

const MiniLogosFly = ({ stateClass }) => {
  return (
    <div className={`mini-logos-fly ${stateClass}`} >
      <MiniLogoFlySvg animateDur={'0.42s'} colors={['#d44848','#ed5a5a']} />
      <MiniLogoFlySvg animateDur={'0.42s'} colors={['#ffa8a8','#ff8e8e']} />
      <MiniLogoFlySvg animateDur={'0.6s'} colors={['#dc4b4b','#dc4b4b']} />
      <MiniLogoFlySvg animateDur={'0.5s'} colors={['#d44848','#ed5a5a']} />
      <MiniLogoFlySvg animateDur={'0.45s'} colors={['#d74b4b','#e75e5e']} />
      <MiniLogoFlySvg animateDur={'0.4s'} colors={['#ef7070','#fd8989']} />
      <MiniLogoFlySvg animateDur={'0.48s'} colors={['#ef7070','#fd8989']} />
      <MiniLogoFlySvg animateDur={'0.35s'} colors={['#ef7070','#fd8989']} />
      <MiniLogoFlySvg animateDur={'0.35s'} colors={['#ef7070','#fd8989']} />
    </div>
  )
};

/* Redux store to props */
const mapStateToProps = ({ infoPage: { stateClass }, }) => {
  return { stateClass }
};

export default connect(mapStateToProps)(MiniLogosFly);
