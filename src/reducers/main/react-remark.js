const initialState = {
 stateClass: '',
}

const reactRemark = ( state = initialState, action ) => {
  switch (action.type) {
    case 'REACT_REMARK_SHOW':
      return { ...state, stateClass: 'show' };
    case 'REACT_REMARK_HIDE':
      return { ...state, stateClass: 'hide' };
    default: return state;
  }
};

export default reactRemark;
