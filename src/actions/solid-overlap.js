import store from '../store.js';
const { getState, dispatch } = store;

/* Overlap position value check */
const overlapCoverCheck = () => {
    return new Promise((resolve) => {
      let el = document.querySelector('.overlap-mover');
      let tmr = setInterval( () => {
          el = el || document.querySelector('.overlap-mover');
          if (el) {
              if (el.offsetLeft === 0) {
                  clearInterval(tmr);
                  resolve();
              }
          }
      }, 10);
    });
};

/* Overlap opacity value check */
const overlapOpacityCheck = () => {
    return new Promise((resolve) => {
        let el = document.querySelector('.overlap-mover');
        let tmr = setInterval( () => {
            el = el || document.querySelector('.overlap-mover');
            if (el) {
                const opy = window.getComputedStyle(el).getPropertyValue("opacity");
                if (opy > 0.99 ) {
                    clearInterval(tmr);
                    resolve();
                }
            }
        }, 10);
    });
};

/* Solid Overlap Actions & Creators */
const overlapToInfoPage = (bgColorOld, bgColorNew) => dispatch({
    type: "SLIDE_TO_INFO_PAGE",
    payload: {
        mainStateClass: 'slideToInfo',
        childStateClass: 'slideToInfo',
        bgColorOld: bgColorOld,
        bgColorNew: bgColorNew
    }
});
const overlapFromInfoPage = (bgColorOld, bgColorNew) => dispatch({
    type: 'SLIDE_FROM_INFO_PAGE',
    payload: {
        mainStateClass: 'slideFromInfo',
        childStateClass: 'slideFromInfo',
        bgColorOld: bgColorOld,
        bgColorNew: bgColorNew
    }
});
const overlapToProjPage = (bgColorOld, bgColorNew) => dispatch({
    type: "SLIDE_TO_PROJ_PAGE",
    payload: {
        mainStateClass: 'slideToProj',
        childStateClass: 'slideToProj',
        bgColorOld: bgColorOld,
        bgColorNew: bgColorNew
    }
});
const overlapFromProjPage = (bgColorOld, bgColorNew) => dispatch({
    type: 'SLIDE_FROM_PROJ_PAGE',
    payload: {
        mainStateClass: 'slideFromProj',
        childStateClass: 'slideFromProj',
        bgColorOld: bgColorOld,
        bgColorNew: bgColorNew
    }
});
const overlapToPrevProj = ( bgColorOld, bgColorNew ) => {
  dispatch({type:'RESET_OVERLAP_ANIMATION'});
  setTimeout(() =>
  dispatch({
      type: 'SLIDE_TO_PREV_PROJ',
      payload: {
          mainStateClass: 'slideToPrevProj',
          childStateClass: 'slideToPrevProj',
          bgColorOld: bgColorOld,
          bgColorNew: bgColorNew
      }
  }), 30);
};
const overlapToNextProj = (bgColorOld, bgColorNew ) => {
    dispatch({type:'RESET_OVERLAP_ANIMATION'});
    setTimeout(() =>
    dispatch({
        type: 'SLIDE_TO_NEXT_PROJ',
        payload: {
            mainStateClass: 'slideToNextProj',
            childStateClass: 'slideToNextProj',
            bgColorOld: bgColorOld,
            bgColorNew: bgColorNew
        }
    }), 30);
};

export {
    overlapToInfoPage,
    overlapFromInfoPage,
    overlapToProjPage,
    overlapFromProjPage,
    overlapToPrevProj,
    overlapToNextProj,
    overlapCoverCheck,
    overlapOpacityCheck
};
