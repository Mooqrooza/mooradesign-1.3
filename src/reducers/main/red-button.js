const initialState = {
  stateClass: '',
}

const redButton = ( state = initialState, action ) => {
  switch (action.type) {
    case 'RED_BUTTON_FLY_OUT':
      return { ...state, stateClass: 'flyOut' };
    case 'RED_BUTTON_FLY_BACK':
      return { ...state, stateClass: 'flyBack' };
   default: return state;
  }
};

export default redButton;
