const initialState = {
    projectImages: [],
    projectInfo: [],
    showPage: false,
    stateClass: 'hidden',
    bgColorOld: '##ca3232',
    bgColorNew: '##ca3232',
    txtColorOld: '#ffffff',
    txtColorNew: '#ffffff',
    prevProjLoading: false,
    nextProjLoading: false,
    slideMode: false
}

const projectsPresent = ( state = initialState, action ) => {
    const payload = action.payload;
    switch (action.type) {
        case 'NEXT_PROJ_LOADING_BEGIN':
            return { ...state, nextProjLoading: true, prevProjLoading: false };
        case 'PREV_PROJ_LOADING_BEGIN':
            return { ...state, prevProjLoading: true, nextProjLoading: false, };
        case 'TOGG_PP_STATE_CLASS':
            return { ...state, stateClass: payload };
        case 'CLEAR_PROJ_IMAGES':
            return { ...state, projectImages: [] };
        case 'CLEAR_PROJ_DATA':
            return {
              ...state,
               projectImages: [],
               projectInfo: [],
               bgColorNew: '#ca3232',
               txtColorNew: '#ffffff',
            };
        case 'SHOW_PROJ_PAGE':
            return {
              ...state,
              projectImages: payload.projectImages,
              showPage: payload.showPage,
              stateClass: payload.stateClass,
              projectInfo: payload.projectInfo,
              bgColorNew: payload.bgColorNew,
              txtColorNew: payload.txtColorNew,
            };
        case 'FILL_PROJ_PAGE':
            return {
              ...state,
              projectImages: payload.projectImages,
              projectInfo: payload.projectInfo,
              bgColorNew: payload.bgColorNew,
              txtColorNew: payload.txtColorNew,
            };
        case 'HIDE_PROJ_PAGE':
            return {
              ...state,
              stateClass: 'hide'
            };
        default: return state;
    }
};

export default projectsPresent;
