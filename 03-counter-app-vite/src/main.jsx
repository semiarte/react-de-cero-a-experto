import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp.jsx'
// import FirstApp from './FirstApp.jsx';
import './App.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp title="Counter app" value={100} />
  </React.StrictMode>,
)
