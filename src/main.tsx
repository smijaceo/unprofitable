import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { leadMetadata, trackEvent } from './lib/analytics';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

trackEvent('ViewContent', leadMetadata({ source: 'home', interest: 'full_drop' }));
