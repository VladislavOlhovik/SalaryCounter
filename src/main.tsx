import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './i18n';

import store from '@store';
import { ThemeProvider } from '@theme';

import App from './App.tsx'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
