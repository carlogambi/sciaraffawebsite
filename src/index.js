import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import DeviceManager from './components/device-manager.js'

ReactDOM.render(
  <React.StrictMode>
    <DeviceManager />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();