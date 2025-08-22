import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import App from './App';
import './index.css';

export const createApp = ViteReactSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    // Custom setup can be done here
    // For example, you can install plugins, set up providers, etc.
  }
);