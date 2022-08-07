const initialState = {
  toggleKick: null,
  kickCount: 0,
  lifes: 5,
  repair: false,
  showLifes: false,
  alive: true,
};

const logo = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'LOGO_DESTROYED':
      return { ...state, alive: false, showLifes: false };
    case 'COUNT_LOGO_KICKS':
      return { ...state, toggleKick: !state.toggleKick, kickCount: payload };
    case 'COUNT_LOGO_LIFES':
      return { ...state, lifes: payload };
    case 'SHOW_LOGO_LIFES':
      return { ...state, showLifes: true };
    case 'HIDE_LOGO_LIFES':
      return { ...state, showLifes: false };
    default: return state;
  }
};

export default logo;
