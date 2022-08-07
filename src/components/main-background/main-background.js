import React, {Component} from 'react';
import './main-background.css';

class BlackPlanet extends Component {
  shouldComponentUpdate() { return false; }
  render() {
    return(
      <div className='black-planet-1'>
        <div className='bp-sputnik-1'>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
};

class MainBackground extends Component {
  render() {
    return (
       <div className="main-background">
         <div>
           <BlackPlanet />
         </div>
       </div>
    )
  }
};

export default MainBackground;
