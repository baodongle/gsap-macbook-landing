import './styles.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement, // eslint-disable-line unicorn/prefer-query-selector
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
