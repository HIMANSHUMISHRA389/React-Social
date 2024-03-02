import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthcontextProvider } from './components/context/AuthContexts';

ReactDOM.render(
  <React.StrictMode>
    <AuthcontextProvider>
      <App />
    </AuthcontextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
