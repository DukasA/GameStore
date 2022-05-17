import React from 'react';
import { createStore } from 'redux';



const defaultState = {
    data: []
}
  
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD':
          return {...state, data: action.payload};
        default:
          return state;
    }
}

const store = createStore(reducer);

export default store;