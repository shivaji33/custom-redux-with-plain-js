
import './style.css';
// import { combineReducers } from 'redux';
import createStore from './customRedux/createStore'
import videos from './reducers/videos';
import users from './reducers/users';
import combineReducers from './reducers/combineReducers'

// import {createStore} from 'redux';

document.querySelector('#app').innerHTML = `
  <div>
  Custom redux implimentation!
  </div>
`;



const initialState = {
  videos: {
    data: [
      {
        id: 1,
        title: "Flat Array Interview Question",
        link: "https://bit.ly/devtools-afiq",
      },
    ],
  },
};

const rootReducer = combineReducers({
  videos,
  users,
});

// createStore(reducer, preloadedState, enhancer)
const store = createStore(rootReducer, initialState);
/**
 * {
 *  getState,
 *  subscribe,
 *  dispatch
 * }
 */

// to check the initial value of our store
console.log("------ INITIAL CALL ------\n", store.getState());

// to watch store changes
store.subscribe(() => {
  console.log("Listener called");
});

// to trigger store changes
store.dispatch({
  type: "ADD_VIDEO",
  payload: {
    id: 2,
    title: "DOM API Interview Question",
    link: "https://bit.ly/devtools-daiq",
  },
});

console.log("------ SECOND CALL ------\n", store.getState());

store.dispatch({
  type: "ADD_VIDEO",
  payload: {
    id: 3,
    title: "Build Your Own Redux",
    link: "https://bit.ly/devtools-byor",
  },
});

console.log("------ LAST CALL ------\n", store.getState());