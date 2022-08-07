const initialState = {
 audioLoading: null,
 audioLoadingErr: null,
 audioLoaded: false,
 play: null,
 stateClass: 'loading',
 bttColor: '#ca3232'
}

const audioControl = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'FETCH_BG_AUDIO_REQUEST':
      return { ...state, audioLoading: true  };
    case 'FETCH_BG_AUDIO_SUCCESS':
      return { ...state, audioLoaded: true, stateClass: 'done'  };
    case 'FETCH_BG_AUDIO_FAILURE':
      return { ...state, audioLoadingErr: true  };
    case 'CLICK_AUDIO_BUTTON':
      return { ...state, stateClass: payload.stateClass, play: payload.play };
    case 'FREE_CLICK_AUDIO_BUTTON':
      return { ...state, stateClass: payload };
    case 'BG_AUDIO_PLAY':
      return { ...state, play: true, stateClass: 'play'  };
    case 'BG_AUDIO_PAUSE':
      return { ...state, play: false };
    case 'SET_AUDIO_BUTTON_COLOR':
      return { ...state, bttColor: payload };
    default: return state;
  }
};

export default audioControl;
