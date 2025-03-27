// index.js is the main entry point of our React application
// This is the default file that runs when we run the app. The default can be configured in package.json

/*--------------------------------*/
import React from 'react';
// ReactDOM is specifically for web applications - it renders React to the HTML DOM
import ReactDOM from 'react-dom/client';
// This is our App component that does all the rendering of our OTHER components
import App from './App';
import './styles.css';
// BrowserRouter enables client-side routing in our app
// There's different routers out there for different environments and using different frameworks, so don't dwell on this specific one too much.
// Just know that it's a router that allows us to navigate between pages. Frameworks like Next.js have their own routers built in.
import { BrowserRouter } from 'react-router-dom';

// Below we:
// 1. Create a root element using ReactDOM.createRoot() targeting the div with id="root" in index.html
// 2. Render our app inside React.StrictMode (which helps catch common bugs)
// 3. Wrap everything in BrowserRouter to enable navigation between pages

const root = ReactDOM.createRoot(document.getElementById('root'));
// React uses reusable components to render HTML dynamically.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
/*--------------------------------*/
