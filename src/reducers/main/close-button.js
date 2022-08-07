const initialState = {
  stateClass: '',
}

const closeButton = ( state = initialState, action ) => {
  switch (action.type) {
    case 'HIDE_CLOSE_BUTTON':
      return { ...state, stateClass: 'hide' };
    case 'SHOW_CLOSE_BUTTON':
      return { ...state, stateClass: 'show' };
   default: return state;
  }
};

export default closeButton;
