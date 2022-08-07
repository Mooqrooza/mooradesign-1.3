const initialState = {
 stateClass: '',
};

const infoPageButtons = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_IP_CLOSE_BUTTON':
      return { ...state, stateClass: 'show' };
    case 'HIDE_IP_CLOSE_BUTTON':
       return { ...state, stateClass: 'hide' };
    default: return state;
  }
};

export default infoPageButtons;
