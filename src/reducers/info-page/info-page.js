const initialState = {
 stateClass: '',
 bgColorOld: '##ca3232',
 bgColorNew: '##ca3232',
 txtColorOld: '#ffffff',
 txtColorNew: '#ffffff',
 show: false,
};

const infoPage = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_INFO_PAGE':
      return { ...state, stateClass: 'show', show: true};
    case 'HIDE_INFO_PAGE':
       return { ...state, stateClass: 'hide', show: false };
    default: return state;
  }
};

export default infoPage;
