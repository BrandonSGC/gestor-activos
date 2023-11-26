import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './normalize.css';
import './styles.css';
import { UserProvider } from './context/UserProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
)
