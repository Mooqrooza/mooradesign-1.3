const initialState = {
 playState: 'pause',
 stateClass: '',
};

const mainAnimations = ( state = initialState, action ) => {
  let stateClass = state.stateClass;
  stateClass = stateClass.replace(' play','').replace(' pause','');
  switch (action.type) {
    case 'MAIN_ANIMATION_PLAY':
      return { ...state, stateClass: stateClass+' play'};
    case 'MAIN_ANIMATION_PAUSE':
      return { ...state, stateClass: stateClass+' pause'};
    case 'MAIN_ANIMATION_INITIAL':
      return { ...state, stateClass: 'firstAnimate' };
    case 'MAIN_ANIMATION_LOOP':
      return { ...state, stateClass: 'loopAnimate' };
    default: return state;
  }
}

export default mainAnimations;
