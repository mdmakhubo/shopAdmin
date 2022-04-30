import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkContextProvider } from './context/DarkContext';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DarkContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>
        </Provider> 
      </DarkContextProvider>      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

