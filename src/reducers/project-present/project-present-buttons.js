const initialState = {
 clBttStateClass: '',
 prevBttStateClass: '',
 nextBttStateClass: '',
 prevBttBussy: false,
 nextBttBussy: false,
}

const projPresentButtons = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_PP_CLOSE_BUTTON':
      return { ...state, clBttStateClass: 'show' };
    case 'HIDE_PP_CLOSE_BUTTON':
      return { ...state, clBttStateClass: 'hide'};
    case 'ROLL_PP_PREV_BUTTON':
      return { ...state, prevBttStateClass: 'roll', prevBttBussy: true, nextBttBussy: false };
    case 'ROLL_PP_NEXT_BUTTON':
      return { ...state, nextBttStateClass: 'roll', prevBttBussy: false, nextBttBussy: true };
    case 'ROLLOFF_PP_PREV_BUTTON':
      return { ...state, prevBttStateClass: '', prevBttBussy: false };
    case 'ROLLOFF_PP_NEXT_BUTTON':
      return { ...state, nextBttStateClass: '', nextBttBussy: false };
    default: return state;
  }
};

export default projPresentButtons;
