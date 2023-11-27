import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/index.tsx'
import { StoreContext, store } from './shared/store/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
);