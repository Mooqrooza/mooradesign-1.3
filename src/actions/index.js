import {
    overlapToInfoPage,
    overlapFromInfoPage,
    overlapToProjPage,
    overlapFromProjPage,
    overlapToPrevProj,
    overlapToNextProj,
    overlapCoverCheck,
    overlapOpacityCheck
} from './solid-overlap';
import store from '../store.js';
import { audioObject } from '../utils';
import services from '../services';
const { getState, dispatch } = store;

/***************************** RESPONSIVE ACTIONS *****************************/
window.addEventListener("resize", () => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    dispatch({ type: 'WIN_HEIGHT', payload: winHeight });
    switch (true) {
        case winHeight < 500  : dispatch({type: 'LESS_HEIGHT_500'}); break;
        case winHeight < 600  : dispatch({type: 'LESS_HEIGHT_600'}); break;
        case winHeight < 700  : dispatch({type: 'LESS_HEIGHT_700'}); break;
        case winHeight < 800  : dispatch({type: 'LESS_HEIGHT_800'}); break;
        case winHeight < 1000 : dispatch({type: 'LESS_HEIGHT_1000'}); break;
        case winHeight > 999  : dispatch({type: 'MORE_HEIGHT_999'}); break;
    }
    switch (true) {
        case winWidth < 500   : dispatch({type: 'LESS_WIDTH_500'}); break;
        case winWidth < 600   : dispatch({type: 'LESS_WIDTH_600'}); break;
        case winWidth < 800   : dispatch({type: 'LESS_WIDTH_800'}); break;
        case winWidth < 1000  : dispatch({type: 'LESS_WIDTH_1000'}); break;
        case winWidth < 1010  : dispatch({type: 'LESS_WIDTH_1010'}); break;
        case winWidth < 1200  : dispatch({type: 'LESS_WIDTH_1200'}); break;
        case winWidth > 1199  : dispatch({type: 'MORE_WIDTH_1199'}); break;
    }
});

/************ FETCH PROJECTS & REDIRECT DATA TO COMPONENTS ACTIONS ************/
const projectsRequested = () => dispatch({ type: 'FETCH_PROJECTS_REQUEST' });
const projectsLoaded = (projects) => dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: projects });
const projectsError = (error) => dispatch({ type: 'FETCH_PROJECTS_FAILURE', payload: error });
/* Get and redirect needed data to components */
const useProjectsData = (projects) => {
  const cards = projects.map( (item) => {
            const sizes = [50,90,100,48,60];
            const size = sizes[Math.round(Math.random()*4)];
            return ({ id: item.id, stateClass: 'none', offSens: false, letterSize: size, showed: false });
        });
  updateProjCards(cards);
};
const hideLoadingScreen = () => {
    const loadingScreenEl = document.querySelector('.loading-screen');
    loadingScreenEl.classList.add('hidden');
    loadingScreenEl.firstElementChild.classList.add('hidden');
}
/* Fetch projects data */
const fetchProjects = () => {
    services.getProjects().then((projects) => {
        window.dispatchEvent(new Event('resize'));
        projects.sort((a, b) => a.id - b.id);
        useProjectsData(projects);
        setTimeout(() => {
            hideLoadingScreen();
            projectsLoaded(projects);
            mainAnimationPlay();
            setTimeout(() => mainAnimationInit(),500)
            setTimeout(() => reactRemarkShow(), 2500);
        },1200);
    }).catch( (error) => { projectsError(error); } );
};

/************************* MAIN ANIMATION ACTIONS *****************************/
/* Looped animation state */
const mainAnimationPlay = () => dispatch({ type:'MAIN_ANIMATION_PLAY' });
const mainAnimationPause = () => dispatch({ type:'MAIN_ANIMATION_PAUSE' });
const mainAnimationInitial = () => dispatch({ type:'MAIN_ANIMATION_INITIAL' });
const mainAnimationloop = () => dispatch({ type:'MAIN_ANIMATION_LOOP' });
/* Show first animations */
const mainAnimationInit = () => {
    mainAnimationInitial()
    setTimeout(() => mainAnimationloop(), 2000);
};

/*************************** PROJECT CARDS ACTIONS ****************************/
const updateProjCards = (cards) => dispatch({ type: 'PROJ_CARDS_UPDATE', payload: cards });

/* Select loading project card */
const setLoadStyleToProjCard = (cards, id) => {
    cards = cards.map( item => {
        if (id === item.id) return ({ ...item, stateClass: 'loadingBegin', offSens: true, showed: true });
        if (item.stateClass === 'loadingBegin') return ({ ...item, stateClass: 'hoverOff', offSens: false });
        return item;
    });
   updateProjCards(cards);
};
/* Sens Off for all project cards, update cards arr  */
const sensOffProjCardsStyles = (cards) => {
  cards = cards.map( item => ({ ...item, offSens: true }) );
  updateProjCards(cards);
};
/* Sens Off for all project cards, update cards arr  */
const resetProjCardsStyles = () => {
    let cards = getState().projectCards.cards.slice(0);
    cards = cards.map( item => ({ ...item, stateClass: 'none', offSens: false }) );
    updateProjCards(cards);
};
/* Set fly animate for all project cards, update cards arr  */
const updateProjCardsFlyOut = () => {
    let cards = getState().projectCards.cards.slice(0);
    cards = cards.map( item => ({...item, offSens: true, stateClass: 'flyOut' }) );
    updateProjCards(cards);
};
/* Set fly animate for all project cards, update cards arr  */
const updateProjCardsFlyBack = () => {
    let cards = getState().projectCards.cards.slice(0);
    cards = cards.map( item => ({...item, offSens: false, stateClass: 'flyBack' }) );
    updateProjCards(cards);
};
/* Set mouse enter style for current card, update cards arr */
const mouseenterProjCard = (id) => {
    const cards  = getState().projectCards.cards.slice(0);
    const card = cards[id];
    if (card.offSens) return;
    card.stateClass = 'hoverOn';
    updateProjCards(cards);
};
/* Set mouse leave style for current card, update cards arr */
const mouseleaveProjCard = (id) => {
    const cards = getState().projectCards.cards.slice(0);
    const card = cards[id];
    if (card.offSens) return;
    card.stateClass = 'hoverOff';
    updateProjCards(cards);
};
/* Project card ckick & start to showing project present page */
const clickProjCard = (id) => {
    const cards  = getState().projectCards.cards.slice(0);
    const card = cards[id];
    const project = getState().main.projects[id];
    if (card.loading) return; /* Exit */
    setLoadStyleToProjCard(cards, card.id);
    services.getProjectImages(project.pictures).then((projectImages) => {
        if (projectImages) {
            overlapToProjPage('#ffffff','#ca3232');
            mainAnimationPause();
            overlapCoverCheck().then(() => {
                scrollUp();
                showProjsPage({ projectImages, projectInfo: project })
            });
        } else {
            projectsError('Project images loading error!');
        }
    })
};
const getProjectImageHrefs = (id) => {
    const { projects } = getState().main;
    let hrefs = [];
    projects.some((project) => {
       if (project.id === id) {
           hrefs = project.images;
           return true;
       }
    });
    return hrefs;
};

/*************************** PROJECT PRESENT ACTIONS **************************/
const showPpCloseButton = () => dispatch({type: 'SHOW_PP_CLOSE_BUTTON'});
const hidePpCloseButton = () => dispatch({type: 'HIDE_PP_CLOSE_BUTTON'});
const clickPpCloseButton = () => () => (dispatch) => {
    hidePpCloseButton();
    dispatch(overlapFromProjPage('#ca3232','#ca3232'));
    overlapOpacityCheck().then(() => {
        scrollUp();
        mainAnimationPlay();
        setAudioButtonColor("#ca3232");
        hideProjsPage();
        clearProjData();
        resetProjCardsStyles();
    });
};
const clearProjData = () => dispatch({type: 'CLEAR_PROJ_DATA'});
const clearProjImages = () => dispatch({type: 'CLEAR_PROJ_IMAGES'});
const hideProjsPage = () => dispatch({type: 'HIDE_PROJ_PAGE'})
const showProjsPage = ({ projectImages, projectInfo }) => {
    dispatch({
        type: 'SHOW_PROJ_PAGE',
        payload: {
            projectImages,
            projectInfo,
            stateClass: 'show',
            showPage: true,
            bgColorNew: projectInfo.colors.bground,
            txtColorNew: projectInfo.colors.font
        }
    });
    setAudioButtonColor(projectInfo.colors.font);
    setTimeout( () => { showPpCloseButton() }, 500);
};
const rollNextProjButton = () => dispatch({ type:'ROLL_PP_NEXT_BUTTON'});
const rollPrevProjButton = () => dispatch({ type:'ROLL_PP_PREV_BUTTON'});
const rollOffNextProjButton = () => dispatch({ type:'ROLLOFF_PP_NEXT_BUTTON'});
const rollOffPrevProjButton = () => dispatch({ type:'ROLLOFF_PP_PREV_BUTTON'});
const toggProjectPresentSatteClass = () => {
    let { stateClass } = getState().projectsPresent;
    stateClass = stateClass.indexOf('togg') >= 0 ? stateClass.replace('togg','') : stateClass + ' togg';
    dispatch({ type:'TOGG_PP_STATE_CLASS', payload: stateClass});
}
const rollOffToProjectButtons = (slidePrev, slideNext) => {
  if (slidePrev) {
      rollOffNextProjButton();
      rollPrevProjButton();
  } else if (slideNext) {
      rollOffPrevProjButton();
      rollNextProjButton();
  } else {
      rollOffNextProjButton();
      rollOffPrevProjButton();
  }
}
const slideProject = (slidePrev) => {
    if (getState().projPresentButtons.nextBttBussy) return;
    let { projects } = getState().main;
    let cards = getState().projectCards.cards.slice(0);
    let fromIdx = cards.findIndex( i => i.showed === true );
    let toIdx = slidePrev ? fromIdx-1 < 0 ? projects.length-1 : fromIdx-1 : fromIdx+1 > projects.length-1 ? 0 : fromIdx+1;
    let fromColors = [projects[fromIdx].colors.bground, projects[fromIdx].colors.font];
    let toColors = [projects[toIdx].colors.bground, projects[toIdx].colors.font];
    let overlapToProj = slidePrev ? overlapToPrevProj : overlapToNextProj;
    let project = projects[toIdx];
    rollOffToProjectButtons(slidePrev, !slidePrev);
    services.getProjectImages( project.pictures ).then( (projectImages) => {
        if (projectImages) {
            cards = cards.map( (item) => {
                if (item.id === project.id) { return { ...item, showed: true } }
                else return { ...item, showed: false }
            });
            updateProjCards(cards);
            overlapToProj(fromColors[0], toColors[0]);
            overlapCoverCheck().then(() => {
                scrollUp();
                fillProjectPresent({ projectImages, projectInfo: project });
                rollOffToProjectButtons();
            });
        } else {
           projectsError('Project images loading error!');
        }
    })
};
const slideToNextProject = () => {
  slideProject();
};
const slideToPrevProject = () => {
  slideProject(true);
};
const fillProjectPresent = ({ projectImages, projectInfo }) => {
  dispatch({
    type: 'FILL_PROJ_PAGE',
    payload: {
      projectImages,
      projectInfo,
      bgColorNew: projectInfo.colors.bground,
      txtColorNew: projectInfo.colors.font
    }
  });
  setAudioButtonColor(projectInfo.colors.font);
};

/**************************** RED BUTTON ACTIONS ******************************/
const flyOutRedButton = () => dispatch({ type:'RED_BUTTON_FLY_OUT' });
const flyBackRedButton = () => dispatch({ type:'RED_BUTTON_FLY_BACK' });
const clickRedButton = () => {
    updateProjCardsFlyOut();
    flyOutRedButton();
    setTimeout( () => {
        setAudioButtonColor("#ffffff");
        overlapToInfoPage('#ffffff','#ca3232');
        mainAnimationPause();
        audioObject.onLowpassFilter();
        overlapCoverCheck().then(() => {
            showInfoPageContent();
            showInfoPage();
            scrollUp();
            setTimeout( () => showIpCloseButton(), 700);
        });
    }, 600);
};

/***************************** INFO PAGE ACTIONS ******************************/
const showInfoPage = () => dispatch({ type: "SHOW_INFO_PAGE" });
const hideInfoPage = () => dispatch({ type: "HIDE_INFO_PAGE" });
const showIpCloseButton = () => dispatch({ type: 'SHOW_IP_CLOSE_BUTTON' });
const hideIpCloseButton = () => dispatch({ type: 'HIDE_IP_CLOSE_BUTTON' });
const showInfoPageContent = () => dispatch({ type: 'SHOW_IP_CONTENT'});
const hideInfoPageContent = () => ({ type: 'HIDE_IP_CONTENT'});
const clickIpCloseButton = () => {
    hideInfoPageContent();
    overlapFromInfoPage('#ca3232','#ca3232');
    hideIpCloseButton();
    audioObject.offLowpassFilter();
    overlapOpacityCheck().then(() => {
        updateProjCardsFlyBack();
        setAudioButtonColor("#ca3232");
        flyBackRedButton();
        hideInfoPage();
        mainAnimationPlay();
    });
};

/******************************  AUDIO ACTIONS ********************************/
const clickAudioButton = () => {
    let stateClass = '';
    const play = !getState().audioControl.play;
    if (!getState().audioControl.audioLoaded) {
        stateClass = getState().audioControl.stateClass;
        stateClass.indexOf('freeClick1') === -1 ?
          stateClass='loading freeClick1' : stateClass='loading freeClick2';
        dispatch({ type: 'FREE_CLICK_AUDIO_BUTTON', payload: stateClass });
        return
    };
    if (play) {
        if (!getState().audioControl.pageIsHide) {audioObject.offLowpassFilterFast()}
        audioObject.playBgAudio();
        stateClass = 'play';
    } else {
        audioObject.pauseBgAudio();
        stateClass = 'pause';
    }
    dispatch({
        type: 'CLICK_AUDIO_BUTTON',
        payload: {
          stateClass: stateClass,
          play: play,
        }
    });
};
const setAudioButtonColor = (color) => dispatch({ type: 'SET_AUDIO_BUTTON_COLOR', payload: color });
const bgAudioRequested = () => ({ type: 'FETCH_BG_AUDIO_REQUEST' });
const bgAudioError = (err) => ({type: 'FETCH_BG_AUDIO_FAILURE', payload: err});
const initBgAudio = () => {
    dispatch({type: 'FETCH_BG_AUDIO_SUCCESS', payload: true});
    audioObject.initBgAudio();
};

/******************************** LOGO ACTIONS ********************************/
const countLogoKicks = (kickCount) => dispatch({ type: 'COUNT_LOGO_KICKS', payload: kickCount });
const countLogoLifes = (lifes) => dispatch({ type: 'COUNT_LOGO_LIFES', payload: lifes });
const showLogoLifes= () => dispatch({ type: 'SHOW_LOGO_LIFES'});
const hideLogoLifes= () => dispatch({ type: 'HIDE_LOGO_LIFES'});
const logoDestroyed= () => dispatch({ type: 'LOGO_DESTROYED'});
const logoFirstShow= () => dispatch({ type: 'LOGO_FIRST_SHOW'});
const onClickLogo = () => {
    let lifes = getState().logo.lifes;
    let kickCount = getState().logo.kickCount+1;
    countLogoKicks(kickCount);
    if (kickCount < 3) return;
    showLogoLifes();
    if (kickCount === 3) return;
    lifes < 1 ? lifes = 0 : lifes--;
    countLogoLifes(lifes);
    if (lifes === 0) {
        audioObject.lowpassFilterLogoDestroy();
        logoDestroyed();
        return;
    }
};

/*********************************** OTHER ************************************/
const reactRemarkShow = () => { dispatch({ type: 'REACT_REMARK_SHOW' }); };
const reactRemarkHide = () => { dispatch({ type: 'REACT_REMARK_HIDE' }); };
const scrollUp = () => { window.scrollTo(0,0); window.scroll(0,0); };

export {
    fetchProjects,
    initBgAudio,
    clickProjCard,
    mouseenterProjCard,
    mouseleaveProjCard,
    mainAnimationPlay,
    mainAnimationPause,
    clickRedButton,
    clickPpCloseButton,
    clickIpCloseButton,
    slideToPrevProject,
    slideToNextProject,
    clickAudioButton,
    onClickLogo
};
