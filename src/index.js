import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/HW-03-react_findder-t2/"> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
