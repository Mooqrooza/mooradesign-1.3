const initialState = {
 lettersForFlash: '#',
 flashLetter: '$',
 changeLetterTimer: [ null, 4000 ],
}

const mainBackground = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'FILL_BGROUND_FLASH_LETTERS':
      return { ...state, lettersForFlash: payload };
    case 'CHANGE_BGROUND_FLASH_LETTER':
      return { ...state, flashLetter: payload };
   default: return state;
  }

};

export default mainBackground;
