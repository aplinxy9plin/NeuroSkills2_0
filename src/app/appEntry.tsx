import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from '@/app/appRouter';
import { store } from '@/app/store';
import '@/shared/base.css';
import { withTheme } from './withTheme';

const AppRouterWithTheme = withTheme(AppRouter);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AppRouterWithTheme />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
