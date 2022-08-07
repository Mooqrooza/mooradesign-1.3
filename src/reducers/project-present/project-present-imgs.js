const initialState = {
 imgs: []
}

const projectsPresent = ( state = initialState, action ) => {
  switch (action.type) {
    case 'PROJECT_IMAGE_OPACITY':
      return { ...state, imgOpacity: action.payload };
   default: return state;
  }
};

export default projectsPresent;
