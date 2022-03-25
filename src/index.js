import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Button from './Button';

ReactDOM.render(
  <React.StrictMode>
    <Button message="Playing!">
        Play Movie
    </Button>
    <Button message="Uploading!">
        Upload Image
    </Button>
  </React.StrictMode>,
  document.getElementById('root')
);