const initialState = {
 swipeBegin: false,
 mainStateClass: '',
 childStateClass:'',
 bgColorOld: '',
 bgColorNew: '',
 isCovered: false,
}

const solidOverlap = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'PAGE_IS_COVERED':
      return {
        ...state, isCovered: true
      }
    case 'SLIDE_TO_PROJ_PAGE':
      return {
        ...state,
        mainStateClass: payload.mainStateClass,
        childStateClass: payload.childStateClass,
        bgColorOld: payload.bgColorOld,
        bgColorNew: payload.bgColorNew,
      }
    case 'SLIDE_FROM_PROJ_PAGE':
      return {
        ...state,
        mainStateClass: payload.mainStateClass,
        childStateClass: payload.childStateClass,
        bgColorOld: payload.bgColorOld,
        bgColorNew: payload.bgColorNew,
      }

    case 'SLIDE_TO_INFO_PAGE':
      return {
        ...state,
        mainStateClass: payload.mainStateClass,
        childStateClass: payload.childStateClass,
        bgColorOld: payload.bgColorOld,
        bgColorNew: payload.bgColorNew,
      }
    case 'SLIDE_FROM_INFO_PAGE':
      return {
        ...state,
        mainStateClass: payload.mainStateClass,
        childStateClass: payload.childStateClass,
        bgColorOld: payload.bgColorOld,
        bgColorNew: payload.bgColorNew,
      }
    case 'SLIDE_TO_PREV_PROJ':
      return {
        ...state,
        mainStateClass: payload.mainStateClass,
        childStateClass: payload.childStateClass,
        bgColorOld: payload.bgColorOld,
        bgColorNew: payload.bgColorNew,
      }
    case 'SLIDE_TO_NEXT_PROJ':
      return {
        ...state,
        mainStateClass: payload.mainStateClass,
        childStateClass: payload.childStateClass,
        bgColorOld: payload.bgColorOld,
        bgColorNew: payload.bgColorNew,
      }
    case 'RESET_OVERLAP_ANIMATION':
      return {
        ...state,
        mainStateClass: 'resetAnimation',
        childStateClass: 'resetAnimation',
      }
    default: return state;
  }
};

export default solidOverlap;
