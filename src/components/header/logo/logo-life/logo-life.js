import React, {Component} from 'react';
import './logo-life.css';
/* Modules for Redux */
import { connect } from 'react-redux';

class LogoLife extends Component {
  render() {
    const { kickCount, lifes, showLifes } = this.props;
    let showClass = '';
    let itemColor = '#ae2926';
    showLifes ? showClass = 'show' : showClass = 'hide';
    return (
      <div className={`logo-life ${showClass}`} >
        <div style={{ backgroundColor: itemColor, transition: 'all 0.2s', opacity: lifes < 1 && '0.35', }}></div>
        <div style={{ backgroundColor: itemColor, transition: 'all 0.2s', opacity: lifes < 2 && '0.35', }}></div>
        <div style={{ backgroundColor: itemColor, transition: 'all 0.2s', opacity: lifes < 3 && '0.35', }}></div>
        <div style={{ backgroundColor: itemColor, transition: 'all 0.2s', opacity: lifes < 4 && '0.35', }}></div>
        <div style={{ backgroundColor: itemColor, transition: 'all 0.2s', opacity: lifes < 5 && '0.35', }}></div>
      </div>
    );
  }
};

/* Redux store and dispatch to props */
const mapStateToProps = ({ logo: { kickCount, lifes, showLifes } }) => {
  return { kickCount, lifes, showLifes }
};

export default connect(mapStateToProps)(LogoLife);
