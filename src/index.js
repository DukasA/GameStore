import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

//export const Context = createContext(null);

ReactDOM.render(

    /* <Context.Provider value={{
      data: new DataStore()
    }}> */
      <Provider store={store}>
        <App />
      </Provider>,
    /* </Context.Provider>, */

  document.getElementById('root')
);
