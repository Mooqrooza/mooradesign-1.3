import { combineReducers } from 'redux';
/* Main reducers */
import main from './main/main';
import mainAnimations from './main/main-animations';
import solidOverlap from './main/solid-overlap';
import redButton from './main/red-button';
import reactRemark from './main/react-remark';
import audioControl from './main/audio-control';
import logo from './logo/logo';
/* Main background reducers */
import mainBackground from './main-background/main-background';
/* Project cards reducers */
import projectCards from './project-cards/project-cards';
/* Project present reducers */
import projectsPresent from './project-present/projects-present';
import projPresentButtons from './project-present/project-present-buttons';
/* Info page reducers */
import infoPage from './info-page/info-page';
import infoPageButtons from './info-page/info-page-buttons';
import infoPageContent from './info-page/info-page-content';
/* Responsive reducer */
import responsiveQuery from './responsive/responsive-query';
import pageScrollY from './responsive/page-scroll-y';

const rootReducer = combineReducers({
  main,
  projectCards,
  mainBackground,
  mainAnimations,
  logo,
  solidOverlap,
  redButton,
  infoPage,
  projectsPresent,
  projPresentButtons,
  infoPageButtons,
  infoPageContent,
  audioControl,
  responsiveQuery,
  reactRemark,
});

export default rootReducer;
