import { createStore } from 'redux';



const defaultState = {
    data: []
}
  
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD':
          return {...state, data: action.payload};
        /* case 'FILTER_BY_RATING':
          const sortedData = state.data.sort((a,b) => (a.rating - b.rating))
          return {...state, data: sortedData } */
        default:
          return state;
    }
}

const store = createStore(reducer);

export default store;