const initialState = {
 scrollPosY: 0,
}

const pageScrollY = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'PAGE_SCROLL_Y':
      return { scrollPosY: payload };
    default: return state;
  }
};

export default pageScrollY;
