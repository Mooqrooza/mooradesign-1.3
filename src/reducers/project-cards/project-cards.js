const initialState = {
 cards: [],
}

const projectCards = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'PROJ_CARDS_UPDATE':
    return { cards: payload };
   default: return state;
  }
};

export default projectCards;
