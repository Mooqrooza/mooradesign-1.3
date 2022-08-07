const initialState = {
  projects: [],
  projsLoading: true,
  projsLoadingErr: null,
  mainColors: ['','',''],
};

const main = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'FETCH_PROJECTS_SUCCESS':
      return { ...state, projects: payload, projsLoading: false };
    case 'FETCH_PROJECTS_REQUEST':
      return { ...state, projects: [], projLoading: true };
    case 'FETCH_PROJECTS_FAILURE':
      return { ...state, projsLoadingErr: payload };
    case 'RED_BUTTON_CLICK':
      return { ...state };
    default: return state;
  }
}

export default main;
