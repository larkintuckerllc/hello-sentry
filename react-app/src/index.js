import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Sentry from '@sentry/browser';

const RELEASE = '0.1.0';
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://303c04eac89844b5bfc908ceffc6757c@sentry.io/1289887',
    release: RELEASE,
  });
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
