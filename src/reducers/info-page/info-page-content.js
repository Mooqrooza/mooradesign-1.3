const initialState = {
 stateClass: '',
 showMiniLogos: false
};

const infoPageContent = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_IP_CONTENT':
      return { ...state, stateClass: 'show'};
    case 'HIDE_IP_CONTENT':
      return { ...state, stateClass: 'hide'};
    default: return state;
  }
};

export default infoPageContent;
