import React from 'react';
import './explosion-screen.css';
import { connect } from 'react-redux';

const ExplosionScreen = ({ lifes }) => {
    let stateClass = '';
    if (lifes<1) stateClass = 'shot';
    return (
        <div className={`explosion-screen ${stateClass}`} ></div>
    )
};

const mapStateToProps = ({ logo: { lifes } }) => {
    return { lifes }
};

export default connect(mapStateToProps)(ExplosionScreen);
