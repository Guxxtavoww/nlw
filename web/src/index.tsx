import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(
  document.querySelector('div#root') as HTMLElement,
);

root.render(<App />);
