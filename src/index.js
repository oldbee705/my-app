import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Gallery from './Gallery';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Gallery />
      <hr />
      <Gallery />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);