import React, { useEffect } from 'react';
import InfoPageBackground from './info-page-background';
import InfoPageContacts from './info-page-contacts';
import InfoPageCloseButton from './info-page-close-button';
import './info-page.css';
import { connect } from 'react-redux';

const InfoPage = ({ stateClass, windowHeight, lessWidth500 }) => {
  const ipContentTop = windowHeight ? windowHeight/2 : '50%';
  return (
    <div className={`info-page ${stateClass}`} >
      <InfoPageBackground />
      <div className='ip-content' style={{ top: ipContentTop }}>
        <InfoPageCloseButton />
        <div className='ip-text-wrapper'>
          <div className={`ip-text-1 ${lessWidth500 ? 'lessWidth500' : ''}`}>
            <span>Mooradesign</span> - дизайн гвоздей, пепельниц, арбалетов и прочей х... <br />
            Заряжаюсь кофеином, полетами на марс, бывает от сети.
          </div>
          <InfoPageContacts />
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({
    infoPage: { stateClass }, responsiveQuery: { windowHeight, lessWidth500 }
}) => {
    return { stateClass, windowHeight, lessWidth500 }
};

export default connect(mapStateToProps)(InfoPage);
