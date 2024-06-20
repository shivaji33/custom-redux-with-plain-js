const combineReducers = (reducers) => {
  return (state={}, action) => {
    console.log({state, action});
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key],action);
      return nextState;
    }, {});
  }

}

export default combineReducers;